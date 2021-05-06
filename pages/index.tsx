import Hero from "../components/hero/hero";
import Information from "../components/information/information";
import Features from "../components/features/features";
import Ecosystem from "../components/ecosystem/ecosystem";
import Investor from "../components/inverstor/investor";
import Roadmap from "../components/roadmap/roadmap";
import { IMember } from "../components/hero/types";

const members: IMember[] = [
  {
    name: "216k155",
    href: "#",
    role: "Co-founder | Marketing Manager",
    imageUrl: "/members/216k155.png",
  },
  {
    name: "Jun",
    href: "#",
    role: "Co-founder | Strateger",
    imageUrl: "/members/jun.png",
  },
  {
    name: "Andre",
    href: "#",
    role: "Co-founder | Technical Manager",
    imageUrl: "/members/andre.png",
  },
  {
    name: "Akira",
    href: "#",
    role: "Co-founder | Project Manager",
    imageUrl: "/members/akira.png",
  },
  {
    name: "Evil",
    href: "#",
    role: "Co-founder | Design manager",
    imageUrl: "/members/evil.png",
  },
  {
    name: "Eugen",
    href: "#",
    role: "Dude | Technical Advisor",
    imageUrl: "/members/eugen.png",
  },
  {
    name: "Adidust.eth",
    href: "#",
    role: "Dude | Marketing Advisor",
    imageUrl: "/members/adidust.eth.png",
  },
  {
    name: "Ahmed",
    href: "#",
    role: "Dude | Frontend Advisor",
    imageUrl: "/members/ahmed.png",
  },
];

export default function Home() {
  return (
    <>
      <Hero members={members} />
      <Information />
      <Features />
      <Ecosystem />
      <Investor />
      <Roadmap />
    </>
  );
}
