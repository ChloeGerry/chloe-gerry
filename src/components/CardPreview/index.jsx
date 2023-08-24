import {
  CardPreviewImage,
  CardPreviewTitle,
  CardPreviewText,
  LinkWrapper,
  Icon,
} from './cardPreview.style';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { DataContext } from '../../context/DataContext';

const CardPreview = ({
  screen,
  title,
  text,
  textTitle,
  github,
  site,
  $height,
}) => {
  const { isDarkTheme, light, dark } = useContext(ThemeContext);
  const { projectData } = useContext(DataContext);
  const theme = isDarkTheme ? dark : light;

  console.log('projectData', projectData);

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
        {projectData.map(
          ({ deployed }) =>
            deployed && (
              <a href={site}>
                <Icon className="fa-solid fa-globe" theme={theme}></Icon>
              </a>
            )
        )}
        <a href={github}>
          <img src="assets/github-logo.svg" alt="Lien du Repository GitHub" />
        </a>
      </LinkWrapper>
    </>
  );
};

export default CardPreview;
