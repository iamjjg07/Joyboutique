import { createFileRoute } from "@tanstack/react-router";
import { BoutiquePage } from "@/components/boutique-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <BoutiquePage />;
}
