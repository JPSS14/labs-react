import "./HeroImages.scss";

export const HeroImages = () => {
  return (
    <div className="heroImages">
      <div className="heroImages__container--left">
        <div className="heroImages__item heroImages__item--mini">
          <img
            src="/labs-react/pep-guardiola.png"
            alt="Pep Guardiola Imagem"
            title="Pep Guardiola"
          />
        </div>
        <div className="heroImages__item heroImages__item--midle">
          <img
            src="/labs-react/phil-foden.png"
            alt="Phil Foden Imagem"
            title="Phil Foden"
          />
        </div>
      </div>
      <div className="heroImages__item heroImages__item--main">
        <img
          src="/labs-react/haaland.png"
          alt="Haaland Imagem"
          title="Haaland"
        />
      </div>
      <div className="heroImages__container--right">
        <div className="heroImages__item heroImages__item--midle">
          <img
            src="/labs-react/kevin-de-bruyne.png"
            alt="Kevin de Bruyne Imagem"
            title="Kevin de Bruyne"
          />
        </div>
        <div className="heroImages__item heroImages__item--mini">
          <img
            src="/labs-react/ederson.png"
            alt="Ederson Imagem"
            title="Ederson"
          />
        </div>
      </div>
    </div>
  );
};
