import "./Exclusive.css";

export const Exclusive = () => {
  return (
    <article className="exclusive wrapper">
      <h2 className="exclusive__title">MIRA LO QUE QUIERAS, DONDE QUIERAS</h2>
      <p className="exclusive__description">
        Que esperas para conocer nuestro gran catalogo de películas originales y exclusivas, con la
        mejor calidad posible.
      </p>
      <img
        className="exclusive__image"
        src="/images/svg/watchit-peliculas.svg"
        alt="watchit peliculas"
      />
    </article>
  );
};
