import "./Header.css";
import { ButtonRouter } from "../../../components/common/ButtonRouter/ButtonRouter";

export const Header = () => {
  return (
    <header className="wrapper-hero header-hero">
      <nav className="nav-hero">
        <a href={window.location.origin}>
          <img className="watchit-logo" src="/images/svg/watchit-logo.svg" alt="watchit logo" />
        </a>
        <div>
          <ButtonRouter to="/sign-in" color="dark">
            Iniciar sesión
          </ButtonRouter>
        </div>
      </nav>
    </header>
  );
};
