import List from '../../components/List';
import { ExperienceWrapper, Article, ListWrapper } from './experience.style';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { DataContext } from '../../context/DataContext';
import Loader from '../../components/Loader';

const Experience = () => {
  const { isDarkTheme, light, dark } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;
  const { portfolioData } = useContext(DataContext);

  if (!portfolioData) {
    return <Loader />;
  }

  console.log('portfolioData', portfolioData);

  return (
    <ExperienceWrapper id="experience" theme={theme}>
      <h2>Expérience</h2>
      <h3>Formations</h3>
      <p>
        Intégrateur web (React) : 2022-2023 <br />
        <span>Diplôme de niveau 5 (bac +2)</span>
      </p>
      <p>
        Développeur d'application - JavaScript React : 2023-2025 <br />
        <span>Diplôme de niveau 6 (bac + 3/4)</span>
      </p>
      <Article>
        <h3>Compétences</h3>
        <ListWrapper>
          {portfolioData.technologies.map(({ name, id, logo, description }) => {
            return (
              <List
                key={id}
                logo={`assets/${logo}`}
                description={description}
                text={name}
              />
            );
          })}
        </ListWrapper>
      </Article>
      <Article>
        <h3>Outils</h3>
        <ListWrapper>
          {portfolioData.tools.map(({ id, name, logo, description }) => {
            return (
              <List
                key={id}
                logo={`assets/${logo}`}
                description={description}
                text={name}
              />
            );
          })}
        </ListWrapper>
        {/* 
          {isDarkTheme ? (
            <List
              logo="assets/github-logo.svg"
              description="Logo de GitHub"
              text="GitHub"
              $filter="invert(1)"
            />
          ) : (
            <List
              logo="assets/github-logo.svg"
              description="Logo de GitHub"
              text="GitHub"
            />
          )} */}
      </Article>
    </ExperienceWrapper>
  );
};

export default Experience;
