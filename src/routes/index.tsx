import DeploymentCardDemo from "#/components/ProfileCardResume";
import CurrentHuntData from "#/features/CurrentHuntData/CurrentHuntData";
import CurrentUserList from "#/features/CurrentUserList/CurrentUserList";
import OnBoardingForm from "#/features/OnBoardingForm/OnBoardingForm";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <OnBoardingForm />
      <CurrentUserList />
      <CurrentHuntData />
      <DeploymentCardDemo />
    </>
  );
}
