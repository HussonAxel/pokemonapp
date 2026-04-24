import CurrentHuntData from "#/features/CurrentHuntData/CurrentHuntData";
import CurrentUserList from "#/features/CurrentUserList/CurrentUserList";
import OnBoardingForm from "#/features/OnBoardingForm/OnBoardingForm";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      <OnBoardingForm />
      <CurrentUserList />
      <CurrentHuntData />
    </div>
  );
}
