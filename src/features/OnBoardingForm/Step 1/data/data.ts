import type { UserOption } from "#/features/OnBoardingForm/Step 1/selectWithAvatar";

export const pokemonGames = [
  {
    name: "Fire Red",
    email: "maya.chen@northstar.app",
    avatar: "https://i.pravatar.cc/160?img=32",
    status: "online",
  },
  {
    name: "Leo Grant",
    email: "leo.grant@fieldnote.co",
    avatar: "https://i.pravatar.cc/160?img=12",
    status: "offline",
  },
  {
    name: "Ruby",
    email: "amara.lewis@atlas.team",
    avatar: "https://i.pravatar.cc/160?img=47",
    status: "away",
  },
  {
    name: "Pearl",
    email: "noah.bennett@orbitmail.com",
    avatar: "https://i.pravatar.cc/160?img=15",
    status: "online",
  },
  {
    name: "Black",
    email: "jade.morris@studioflow.io",
    avatar: "https://i.pravatar.cc/160?img=5",
    status: "busy",
  },
  {
    name: "XY",
    email: "elena.park@workframe.dev",
    avatar: "https://i.pravatar.cc/160?img=20",
    status: "online",
  },
] satisfies UserOption[];

export const pokemonNames = [
  {
    name: "pikachu",
    email: "maya.chen@northstar.app",
    avatar: "https://i.pravatar.cc/160?img=32",
    status: "online",
  },
  {
    name: "Charizard",
    email: "leo.grant@fieldnote.co",
    avatar: "https://i.pravatar.cc/160?img=12",
    status: "offline",
  },
  {
    name: "Squirtle",
    email: "amara.lewis@atlas.team",
    avatar: "https://i.pravatar.cc/160?img=47",
    status: "away",
  },
  {
    name: "Noadkoko",
    email: "noah.bennett@orbitmail.com",
    avatar: "https://i.pravatar.cc/160?img=15",
    status: "online",
  },
  {
    name: "Gengar",
    email: "jade.morris@studioflow.io",
    avatar: "https://i.pravatar.cc/160?img=5",
    status: "busy",
  },
  {
    name: "Beedrill",
    email: "elena.park@workframe.dev",
    avatar: "https://i.pravatar.cc/160?img=20",
    status: "online",
  },
] satisfies UserOption[];

export const pokemonGamesList = ["Fire Red", "Ruby"] as const;
export const pokemonNamesList = ["pikachu", "Charizard"] as const;
