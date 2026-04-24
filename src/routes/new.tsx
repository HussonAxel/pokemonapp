import { pokemonGamesList, pokemonNames } from "#/features/OnBoardingForm/Step1/data";
import { createFileRoute } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

  import OnBoardingForm from "#/features/OnBoardingForm/OnBoardingForm";
  const searchSchema = z.object({
    pokemonGame: fallback(
      z.enum(pokemonGamesList).optional(),
      "Maya Chen",
 
    ),
    pokemonName: fallback(
      z.enum([pokemonNames.name]).optional(),
      "Maya Chen",    
    )
  });

  export const Route = createFileRoute("/new")({
    component: RouteComponent,
    validateSearch: zodValidator(searchSchema),
  });

  function RouteComponent() {
    return <OnBoardingForm />;
  }
