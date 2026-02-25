import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.units.list.path, async (req, res) => {
    const allUnits = await storage.getUnits();
    res.json(allUnits);
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const allTestimonials = await storage.getTestimonials();
    res.json(allTestimonials);
  });

  // Seed data function to run initially
  async function seedDatabase() {
    try {
      const existingUnits = await storage.getUnits();
      if (existingUnits.length === 0) {
        await storage.createUnit({
          name: "Ótica Tatuapé - Matriz",
          address: "Rua Tuiuti, 1234 - Tatuapé, São Paulo - SP",
          whatsappNumber: "5511999999999",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.822709230588!2d-46.57561848440702!3d-23.539828466650428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e7b2354c465%3A0x6b4458f2762a4d33!2sR.%20Tuiuti%2C%201234%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003081-000!5e0!3m2!1spt-BR!2sbr!4v1655000000000!5m2!1spt-BR!2sbr"
        });
        await storage.createUnit({
          name: "Ótica Tatuapé - Filial",
          address: "Rua Itapura, 567 - Tatuapé, São Paulo - SP",
          whatsappNumber: "5511988888888",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.822709230588!2d-46.57561848440702!3d-23.539828466650428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e7b2354c465%3A0x6b4458f2762a4d33!2sR.%20Itapura%2C%20567%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003310-000!5e0!3m2!1spt-BR!2sbr!4v1655000000000!5m2!1spt-BR!2sbr"
        });
      }

      const existingTestimonials = await storage.getTestimonials();
      if (existingTestimonials.length === 0) {
        await storage.createTestimonial({
          authorName: "Maria Silva",
          content: "Ótimo atendimento e armações lindas! Recomendo muito a loja da Tuiuti.",
          rating: 5
        });
        await storage.createTestimonial({
          authorName: "João Pedro",
          content: "Preço justo e óculos de qualidade. A consulta foi muito rápida.",
          rating: 5
        });
        await storage.createTestimonial({
          authorName: "Ana Costa",
          content: "Fui muito bem recebida na unidade da Itapura. Meus óculos ficaram prontos super rápido.",
          rating: 4
        });
      }
    } catch (e) {
      console.error("Failed to seed database:", e);
    }
  }

  // Fire and forget
  seedDatabase().catch(console.error);

  return httpServer;
}
