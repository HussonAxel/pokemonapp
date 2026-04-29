import SelectWithAvatar from "#/features/OnBoardingForm/Step 1/components/selectWithAvatar";
import { Info } from "lucide-react";
import type { OnboardingPropsStep1 } from "../OnBoardingFormProps";
import TextZone from "./components/textZone";

import { pokemonGames, pokemonNames } from "./data/data";

export const OnBoardingFormStep1: React.FC<OnboardingPropsStep1> = () => {
  return (
    <div className="mb-10 space-y-6 text-left">
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-xs font-semibold tracking-wider whitespace-nowrap text-[#808080] uppercase transition-colors dark:text-[#6C6C6C]">
          Game Version <Info size={14} className="opacity-50" />
        </label>
        <SelectWithAvatar data={pokemonGames} param={"game"} disabled={false} />
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-xs font-semibold tracking-wider whitespace-nowrap text-[#808080] uppercase transition-colors dark:text-[#6C6C6C]">
          Pokémon Name<Info size={14} className="opacity-50" />
        </label>
        <SelectWithAvatar data={pokemonNames} param={"pokemon"} disabled={false} />
      </div>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-xs font-semibold tracking-wider whitespace-nowrap text-[#808080] uppercase transition-colors dark:text-[#6C6C6C]">
          Pokémon Variant <Info size={14} className="opacity-50" />
        </label>
        <SelectWithAvatar data={pokemonNames} param={"pokemon"} disabled={true} />
      </div>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-xs font-semibold tracking-wider whitespace-nowrap text-[#808080] uppercase transition-colors dark:text-[#6C6C6C]">
          Pokémon Localization <Info size={14} className="opacity-50" />
        </label>
        <SelectWithAvatar data={pokemonNames} param={"pokemon"} disabled={true} />
      </div>

      <div className="space-y-2">
      <TextZone />
      </div>
      
    </div>
  );
};
