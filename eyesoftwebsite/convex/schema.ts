import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const applicationTables = {
  bookings: defineTable({
    name: v.string(),
    email: v.string(),
    package: v.string(),
    category: v.string(),
    vision: v.string(), // Added vision field
    status: v.string(),
  }),
  reviews: defineTable({
    name: v.string(),
    rating: v.number(),
    quote: v.string(),
    imageUrl: v.string(),
  })
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
