import { Evidences } from "../../components/project-city-components/evidences";
import { Header } from "../../components/project-city-components/header";
import { Hero } from "../../components/project-city-components/hero";
import { Projects } from "../../components/project-city-components/projects";

export const ProjectCity = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Evidences />
    </div>
  );
};
