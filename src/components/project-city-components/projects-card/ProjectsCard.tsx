import { ProjectsCardProps } from "../../../types/project-city.types";
import "./ProjectsCard.scss";

export const ProjectsCard = ({
  image,
  altImage,
  title,
  description,
}: ProjectsCardProps) => {
  return (
    <article className="projectsCard">
      <div className="projectsCard__container">
        <header className="projectsCard__header">
          <h3>{title}</h3>
        </header>
        <div className="projectsCard__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="projectsCard__separator"></div>
      <div className="projectsCard__image">
        <img src={`/labs-react/${image}`} alt={altImage} />
      </div>
    </article>
  );
};
