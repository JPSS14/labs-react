import { EvidencesCardProps } from "../../../types/project-city.types";
import "./EvidencesCard.scss";

export const EvidencesCard = ({
  name,
  image,
  description,
}: EvidencesCardProps) => {
  return (
    <article className="evidencesCard">
      <header className="evidencesCard__header">
        <div className="evidencesCard__header--avatar">
          {image ? (
            <img src={image} alt="" />
          ) : (
            <p>{name.charAt(0).toUpperCase()}</p>
          )}
        </div>
        <h3>{name}</h3>
      </header>
      <div className="evidencesCard__description">
        <p>{description}</p>
      </div>
    </article>
  );
};
