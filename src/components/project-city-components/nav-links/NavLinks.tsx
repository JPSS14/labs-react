import { Button } from "../button";
import "./NavLinks.scss";

export const NavLinks = () => {
  return (
    <div className="navLinks">
      <ul className="navLinks__pages">
        <li className="navLinks__item--pages">Home</li>
        <li className="navLinks__item--pages">
          Serviços
          <img src="/labs-react/arrow.png" alt="arrow" />
        </li>
        <li className="navLinks__item--pages">Sobre</li>
      </ul>
      <ul className="navLinks__social">
        <li className="navLinks__item--social navLinks__item--instagram ">
          <img
            src="/labs-react/instagram-icon.png"
            alt="Instagram Logo"
            title="Instagram"
          />
        </li>
        <li className="navLinks__item--social">
          <img
            src="/labs-react/facebook-icon.png"
            alt="Facebook Logo"
            title="Facebook"
          />
        </li>
        <li className="navLinks__item--social">
          <img src="/labs-react/x-icon.png" alt="X Logo" title="X" />
        </li>
        <li className="navLinks__item--social">
          <Button>Fale conosco</Button>
        </li>
        <li className="navLinks__item--social navLinks__item--mobile">
          <img src="/labs-react/menu-mobile-icon.png" alt="Menu mobile" />
        </li>
      </ul>
    </div>
  );
};
