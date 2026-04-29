import SelectWithAvatar from "#/components/selectWithAvatar";
import { Info } from "lucide-react";
import type { OnboardingPropsStep1 } from "../OnBoardingFormProps";

import { pokemonGames, pokemonNames } from "./data";

export const OnBoardingFormStep1: React.FC<OnboardingPropsStep1> = ({
    businessNameLabel,
    legalNameLabel,
}) => {
    return (
        <div className="mb-10 space-y-6 text-left">
            <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-semibold tracking-wider whitespace-nowrap text-[#808080] uppercase transition-colors dark:text-[#6C6C6C]">
                    {businessNameLabel} <Info size={14} className="opacity-50" />
                </label>
                <SelectWithAvatar data={pokemonGames} param={"pokemonGame"}/>
            </div>

            <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-semibold tracking-wider whitespace-nowrap text-[#808080] uppercase transition-colors dark:text-[#6C6C6C]">
                    {legalNameLabel} <Info size={14} className="opacity-50" />
                </label>
                <SelectWithAvatar data={pokemonNames} param={"pokemonGamezez"} />
            </div>
        </div>
    )
}
