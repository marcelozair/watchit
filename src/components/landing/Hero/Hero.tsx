import "./Hero.css";
import { Header } from "../../../layout/Landing/Header/Header";
import { ButtonRouter } from "../../common/ButtonRouter/ButtonRouter";

export const Hero = () => {
  return (
    <article className="hero">
      <Header />
      <div className="wrapper-hero hero-container">
        {/* <img className="watchit-logo-hero" src="/images/svg/watchit-logo.svg" /> */}
        <h1 className="hero__title">LAS MEJORES PELICULAS DEL MOMENTO EN UN SOLO LUGAR</h1>
        <p className="hero__subtitle">
          Que esperas para aprovechar todas nuestras ofertas y promociones.
        </p>
        <div className="mt-8">
          <ButtonRouter color="primary" to="/">
            Suscribirme ahora
          </ButtonRouter>
        </div>
        <div className="mt-8 md:hidden block">
          <ButtonRouter color="dark" to="/">
            Iniciar sesión
          </ButtonRouter>
        </div>
      </div>
    </article>
  );
};
