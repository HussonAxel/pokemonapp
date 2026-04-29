import { pokemonGamesList, pokemonNamesList } from "#/features/OnBoardingForm/Step 1/data/data";
import { createFileRoute } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

import OnBoardingForm from "#/features/OnBoardingForm/OnBoardingForm";
const searchSchema = z.object({
  game: fallback(z.enum(pokemonGamesList).optional(), "Fire Red"),
  pokemon: fallback(z.enum(pokemonNamesList).optional(), "pikachu"),
});

export const Route = createFileRoute("/new")({
  component: RouteComponent,
  validateSearch: zodValidator(searchSchema),
});

function RouteComponent() {
  return <OnBoardingForm />;
}
