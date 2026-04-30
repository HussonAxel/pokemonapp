import { FloatingInput } from "#/components/ui/floating-input";
import TextZone from "../Step 1/components/textZone";
import { AlertPokemon } from "./components/AlertPokemon";
import ImageComparisonBasic from "./components/imageDiff";


export default function HuntResumeCard() {
  return (
    <div className="mb-10 space-y-6 text-left">
      <FloatingInput label="Hunt Name" />
      <TextZone />
      <AlertPokemon />
      <ImageComparisonBasic />
    </div>
  );
}
