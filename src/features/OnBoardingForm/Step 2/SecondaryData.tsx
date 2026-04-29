import RadioShinyMethod from "#/features/OnBoardingForm/Step 2/components/RadioShinyMethod";
import type { OnboardingPropsStep1 } from "../OnBoardingFormProps";
import Input from "./components/Input";
import ShinyCharmSwitch from "./components/ShinyCharmSwitch";

export const OnBoardingFormStep2: React.FC<OnboardingPropsStep1> = () => {
  return (
    <div className="mb-10 space-y-6 text-left">
      <div className="space-y-2">
        <RadioShinyMethod />
      </div>
      <div className="space-y-2">
        <ShinyCharmSwitch />
      </div>
      <div className="space-y-2">
        <Input />
      </div>
    </div>
  );
};
