import { mutation, internalAction } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { Resend } from "resend";

export const createBooking = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    package: v.string(),
    category: v.string(),
    vision: v.string(),
  },
  handler: async (ctx, args) => {
    const bookingId = await ctx.db.insert("bookings", {
      ...args,
      status: "pending"
    });
    
    // Schedule email notifications
    await ctx.scheduler.runAfter(0, internal.bookings.sendBookingEmails, {
      bookingId,
      ...args
    });

    return bookingId;
  },
});

export const sendBookingEmails = internalAction({
  args: {
    bookingId: v.id("bookings"),
    name: v.string(),
    email: v.string(),
    package: v.string(),
    category: v.string(),
    vision: v.string(),
  },
  handler: async (ctx, args) => {
    const resend = new Resend(process.env.CONVEX_RESEND_API_KEY);

    // Send confirmation to customer
    const customerEmail = await resend.emails.send({
      from: "Nature's Lens <noreply@natureslens.com>",
      to: args.email,
      subject: "Your Photography Session Booking",
      html: `
        <h1>Thank you for booking with Nature's Lens!</h1>
        <p>Dear ${args.name},</p>
        <p>We're excited to confirm your booking for a ${args.category} photography session.</p>
        <h2>Booking Details:</h2>
        <ul>
          <li><strong>Package:</strong> ${args.package}</li>
          <li><strong>Category:</strong> ${args.category}</li>
          <li><strong>Your Vision:</strong> ${args.vision}</li>
        </ul>
        <p>We'll be in touch shortly to discuss the details and schedule your session.</p>
        <p>Best regards,<br>Nature's Lens Team</p>
      `,
    });

    if (customerEmail.error) {
      throw new Error('Failed to send customer email: ' + JSON.stringify(customerEmail.error));
    }

    // Send notification to admin
    const adminEmail = await resend.emails.send({
      from: "Nature's Lens Bookings <noreply@natureslens.com>",
      to: "filmbythomas@gmail.com",
      subject: `New Booking: ${args.category} Session - ${args.package}`,
      html: `
        <h1>New Booking Received</h1>
        <h2>Client Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${args.name}</li>
          <li><strong>Email:</strong> ${args.email}</li>
          <li><strong>Package:</strong> ${args.package}</li>
          <li><strong>Category:</strong> ${args.category}</li>
        </ul>
        <h2>Client's Vision:</h2>
        <p>${args.vision}</p>
      `,
    });

    if (adminEmail.error) {
      throw new Error('Failed to send admin email: ' + JSON.stringify(adminEmail.error));
    }

    return { customerEmail: customerEmail.data, adminEmail: adminEmail.data };
  },
});
