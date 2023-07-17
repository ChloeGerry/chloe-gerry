import {
  CardPreviewImage,
  CardPreviewTitle,
  CardPreviewText,
  LinkWrapper,
  Icon,
} from './cardPreview.style';

const CardPreview = ({ screen, title, text, github, site }) => {
  return (
    <>
      <CardPreviewImage src={screen} alt="Capture d'écran de projets de code" />
      <CardPreviewTitle>{title}</CardPreviewTitle>
      <CardPreviewText>{text}</CardPreviewText>
      <LinkWrapper>
        <a href={site}>
          <Icon className="fa-solid fa-globe"></Icon>
        </a>
        <a href={github}>
          <img src="/assets/github-logo.svg" alt="Lien du Repository GitHub" />
        </a>
      </LinkWrapper>
    </>
  );
};

export default CardPreview;
