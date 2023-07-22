import {
  CardPreviewImage,
  CardPreviewTitle,
  CardPreviewText,
  LinkWrapper,
  Icon,
  GitHubLogo,
} from './cardPreview.style';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const CardPreview = ({ screen, title, text, github, site, $height }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <>
      <CardPreviewImage
        src={screen}
        alt="Capture d'écran de projets de code"
        $height={$height}
      />
      <CardPreviewTitle>{title}</CardPreviewTitle>
      <CardPreviewText>{text}</CardPreviewText>
      <LinkWrapper>
        <a href={site}>
          <Icon className="fa-solid fa-globe"></Icon>
        </a>
        <a href={github}>
          {isDarkTheme ? (
            <GitHubLogo
              src="/assets/github-logo.svg"
              alt="Lien du Repository GitHub"
              $filter="invert(1)"
            />
          ) : (
            <GitHubLogo
              src="/assets/github-logo.svg"
              alt="Lien du Repository GitHub"
            />
          )}
        </a>
      </LinkWrapper>
    </>
  );
};

export default CardPreview;
