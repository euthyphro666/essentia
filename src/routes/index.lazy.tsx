import { createLazyFileRoute } from "@tanstack/react-router";
import Portfolio from "../pages/PorfolioPage";

export const Route = createLazyFileRoute("/")({
  component: Portfolio,
});
