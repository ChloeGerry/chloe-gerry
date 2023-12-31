import {
  CardPreviewImage,
  CardPreviewTitle,
  CardPreviewText,
  LinkWrapper,
  Icon,
} from './cardPreview.style';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const CardPreview = ({
  screen,
  title,
  text,
  textTitle,
  github,
  site,
  $height,
  deployed,
}) => {
  const { isDarkTheme, light, dark } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;

  return (
    <>
      <CardPreviewImage
        src={screen}
        alt="Capture d'écran de projets de code"
        $height={$height}
      />
      <CardPreviewTitle>{title}</CardPreviewTitle>
      <CardPreviewText>
        <strong>{textTitle}</strong>
        {text}
      </CardPreviewText>
      <LinkWrapper>
        {deployed && (
          <a href={site} target="_blank">
            <Icon className="fa-solid fa-globe" theme={theme}></Icon>
          </a>
        )}
        <a href={github} target="_blank">
          <img src="assets/github-logo.svg" alt="Lien du Repository GitHub" />
        </a>
      </LinkWrapper>
    </>
  );
};

export default CardPreview;
