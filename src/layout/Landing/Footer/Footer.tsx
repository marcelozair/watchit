import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer-container">
        <Link to="/">
          <img className="watchit-logo" src="/images/svg/watchit-logo.svg" alt="watchit logo" />
        </Link>
        <div className="footer__links">
          <Link className="footer__link" to="/">
            Iniciar sesión
          </Link>
          <Link className="footer__link" to="/">
            Registrarme
          </Link>
          <Link className="footer__link" to="/">
            Terminos y condiciones
          </Link>
          <Link className="footer__link" to="/">
            Politicas de privacidad
          </Link>
        </div>
        <p className="footer__address">
          +51 999 999 999, Av. José Larco, Miraflores, Peru , sample@sample.com
        </p>
        <div className="footer__line"></div>
        <p className="footer__copy">© 2022 Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
