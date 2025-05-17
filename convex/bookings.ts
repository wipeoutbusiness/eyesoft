import { mutation, internalAction } from "../_generated/server";
import { v } from "convex/values";
import { internal } from "../_generated/api";
import { Resend } from "resend";

// Create Booking Mutation
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
      status: "pending",
    });

    // Schedule email notification
    await ctx.scheduler.runAfter(0, internal.bookings.sendBookingEmails, {
      bookingId,
      ...args,
    });

    return bookingId;
  },
});

// Internal Action to Send Booking Email to You
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
    // 🔍 Debug log to check if the API key is loading
    console.log("Resend key starts with:", process.env.CONVEX_RESEND_API_KEY?.slice(0, 6));

    const resend = new Resend("re_fZ7yKewB_4d7d88GJapRWbDTB7zz1QfWp");

    const adminEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "filmbythomas@gmail.com",
      subject: `New Booking: ${args.category} Session – ${args.package}`,
      html: `
        <h1>New Booking Received</h1>
        <h2>Client Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${args.name}</li>
          <li><strong>Email:</strong> ${args.email}</li>
          <li><strong>Package:</strong> ${args.package}</li>
          <li><strong>Category:</strong> ${args.category}</li>
        </ul>
        <h2>Client's Vision</h2>
        <p>${args.vision}</p>
      `,
    });

    if (adminEmail.error) {
      throw new Error("Failed to send admin email: " + JSON.stringify(adminEmail.error));
    }

    return { adminEmail: adminEmail.data };
  },
});
