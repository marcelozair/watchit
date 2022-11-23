import "./Welcome.css";
import { Hero } from "../../components/landing/Hero/Hero";
import { Plataform } from "../../components/landing/Plataform/Plataform";
import { Exclusive } from "../../components/landing/Exclusive/Exclusive";

export const Welcome = () => {
  return (
    <section className="bg-[#1B1C1A]">
      <Hero />
      <Plataform />
      <Exclusive />
    </section>
  );
};
