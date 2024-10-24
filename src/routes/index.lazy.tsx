import { createLazyFileRoute } from "@tanstack/react-router";
import Portfolio from "../pages/portfolio/view";

export const Route = createLazyFileRoute("/")({
  component: Portfolio,
});
