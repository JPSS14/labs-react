import { ProjectsCard } from "../projects-card";
import { PROJECTS_CITY } from "../../../constants/project-city";
import "./Projects.scss";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__container">
        <header className="projects__header">
          <h2>Nossos Projetos</h2>
        </header>
        <div className="projects__cards">
          {PROJECTS_CITY.map((item, index) => (
            <ProjectsCard
              key={index}
              image={item.image}
              title={item.title}
              altImage={item.altImage}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
