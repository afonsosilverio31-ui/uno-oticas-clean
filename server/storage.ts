import { db } from "./db";
import { units, testimonials, type Unit, type Testimonial } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUnits(): Promise<Unit[]>;
  getTestimonials(): Promise<Testimonial[]>;
  createUnit(unit: Omit<Unit, "id">): Promise<Unit>;
  createTestimonial(testimonial: Omit<Testimonial, "id">): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  async getUnits(): Promise<Unit[]> {
    return await db.select().from(units);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createUnit(unit: Omit<Unit, "id">): Promise<Unit> {
    const [newUnit] = await db.insert(units).values(unit).returning();
    return newUnit;
  }

  async createTestimonial(testimonial: Omit<Testimonial, "id">): Promise<Testimonial> {
    const [newTestimonial] = await db.insert(testimonials).values(testimonial).returning();
    return newTestimonial;
  }
}

export const storage = new DatabaseStorage();
