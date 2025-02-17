import { blogMachine } from "@bbl-turbo/features/blog/machines/blog-machine";
import { fetchMD, fetchTistories } from "../apis/blog";

export const blogServiceWithConfig = blogMachine.withConfig({
  services: {
    fetchMD,
    fetchTistories,
  },
});
