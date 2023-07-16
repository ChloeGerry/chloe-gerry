const Card = ({ screen, title, technologies }) => {
  return (
    <article>
      <img src={screen} alt="Capture d'écran de projets de code" />
      <h3>{title}</h3>
      <div>{technologies}</div>
    </article>
  );
};

export default Card;
