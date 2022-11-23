import "./Plataform.css";

export const Plataform = () => {
  return (
    <article className="plataform wrapper">
      <img
        src="/images/svg/watchit-dispositivos.svg"
        alt="watchit - mira lo que quieras, donde quieras"
      />
      <div className="plataform__container-text">
        <h2 className="plataform__title">MIRA LO QUE QUIERAS, DONDE QUIERAS</h2>
        <p className="plataform__description">
          Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta, computadora, teléfono y otros.
          Vive una experiencia única con una amplia selección de títulos en 4K. Además, puedes ver
          en cuatro pantallas en simultáneo para que nadie se quede afuera.
        </p>
        <div className="plataform__images">
          <img src="/images/svg/smarttv-watchit.svg" alt="watchit smarttb" />
          <img src="/images/svg/chromecast-watchit.svg" alt="watchit chromecast" />
        </div>
      </div>
    </article>
  );
};
