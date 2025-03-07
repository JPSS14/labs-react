import { EVIDENCES_CITY } from "../../../constants/project-city";
import { EvidencesCard } from "../evidences-card";
import "./Evidences.scss";

export const Evidences = () => {
  return (
    <section className="evidences">
      <header className="evidences__header">
        <h2>Depoimentos</h2>
      </header>
      <div className="evidences__container">
        {EVIDENCES_CITY.map((item, key) => (
          <EvidencesCard
            key={key}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
