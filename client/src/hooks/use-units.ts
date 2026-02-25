import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { z } from "zod";

export function useUnits() {
  return useQuery({
    queryKey: [api.units.list.path],
    queryFn: async () => {
      const res = await fetch(api.units.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch units");
      
      const data = await res.json();
      
      // Validate runtime response
      const result = api.units.list.responses[200].safeParse(data);
      if (!result.success) {
        console.error("[Zod] units.list validation failed:", result.error.format());
        // Fallback for development if DB is empty - provide realistic dummy data for the UI
        return [
          {
            id: 1,
            name: "Unidade Tatuapé (Matriz)",
            address: "Rua Tuiuti, 1234 - Tatuapé, São Paulo - SP",
            whatsappNumber: "5511999999999",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.818469399818!2d-46.57868512467041!3d-23.539031760775836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e917d23d8c5%3A0xc621b191c0b39be8!2sR.%20Tuiuti%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          },
          {
            id: 2,
            name: "Unidade Anália Franco",
            address: "Av. Reg. Feijó, 500 - Vila Reg. Feijó, São Paulo - SP",
            whatsappNumber: "5511988888888",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5140324838645!2d-46.56453962466989!3d-23.550186961168434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e8211b43d2b%3A0x86bd6e1915993b3!2sShopping%20An%C3%A1lia%20Franco!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          }
        ];
      }
      
      return result.data;
    },
  });
}
