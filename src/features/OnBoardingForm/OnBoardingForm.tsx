import { OnboardingScreen } from "../../components/ui/onboarding-screen";

export default function OnBoardingForm() {
    return (
        <div className="w-full">
            <OnboardingScreen
                title="Start a new Hunt"
                subtitle="Setting up the parameters of the hunt"
                businessNameLabel="Pokemon Game"
                businessNamePlaceholder="Pokemon Fire Red"
                legalNameLabel="Pokemon Name"
                legalNamePlaceholder="Charizard, Squirtle.."
                nextButtonText="Continue Setup"
                finishButtonText="Launch App"
                tooltipMainText="Upload workspace logo"
                rightSectionDescription="This information will be used to customize your dashboard experience and team collaboration settings."
            />
        </div>
    );
}
