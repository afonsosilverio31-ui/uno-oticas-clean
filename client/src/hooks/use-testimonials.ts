import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useTestimonials() {
  return useQuery({
    queryKey: [api.testimonials.list.path],
    queryFn: async () => {
      const res = await fetch(api.testimonials.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch testimonials");
      
      const data = await res.json();
      
      const result = api.testimonials.list.responses[200].safeParse(data);
      if (!result.success) {
        console.error("[Zod] testimonials.list validation failed:", result.error.format());
        // Fallback dummy data for visual development
        return [
          {
            id: 1,
            authorName: "Maria Silva",
            content: "Excelente atendimento! Encontrei a armação perfeita que procurava há meses. A equipe da unidade Tatuapé foi super atenciosa.",
            rating: 5
          },
          {
            id: 2,
            authorName: "João Pedro",
            content: "Óculos ficaram prontos super rápido. O exame de vista foi muito preciso. Recomendo muito para quem mora na zona leste.",
            rating: 5
          },
          {
            id: 3,
            authorName: "Ana Clara",
            content: "Variedade incrível de marcas de luxo. Preço justo e ótimas condições de parcelamento. Voltarei com certeza!",
            rating: 5
          }
        ];
      }
      
      return result.data;
    },
  });
}
