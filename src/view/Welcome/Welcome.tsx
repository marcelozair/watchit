import "./Welcome.css";
import { Hero } from "../../components/landing/Hero/Hero";

export const Welcome = () => {
  return (
    <section>
      <Hero />
      {/* <div className="welcome__wrapper">
        <img
          className="welcome_logo"
          src={window.location.origin + "/images/svg/watchit-logo.svg"}
          alt="watchit"
        />
        <h1 className="welcome__title">LAS MEJORES PELICULAS DEL MOMENTO EN UN SOLO LUGAR</h1>
        <div className="welcome___line-gradient"></div>
        <p className="welcome__description">
          Que esperas para aprovechar todas nuestras ofertas y promociones.
        </p>
        <div className="welcome__buttons">
          <button className="welcome-button">Suscribirme ahora</button>
          <button className="welcome-button-white">Iniciar sesión</button>
        </div>
      </div> */}
    </section>
  );
};
