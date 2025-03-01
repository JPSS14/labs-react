import { Button } from "../button";
import { HeroImages } from "../hero-images";
import "./Hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <header className="hero__header">
          <h1>
            Seja bem vindo ao <strong>Project City</strong>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          <Button>Fale conosco</Button>
        </header>
        <HeroImages />
      </div>
    </section>
  );
};
