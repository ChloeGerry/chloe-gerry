import List from '../../components/List';
import { ExperienceWrapper, Article, ListWrapper } from './experience.style';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const Experience = () => {
  const { isDarkTheme, light, dark } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;

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
          <List
            logo="/assets/javascript-logo.svg"
            description="Logo de JavaScript"
            text="JavaScript"
          />
          <List
            logo="/assets/typescript-logo.svg"
            description="Logo de Typescript"
            text="TypeScript"
          />
          <List
            logo="/assets/react-logo.svg"
            description="Logo de React"
            text="React"
          />
          <List
            logo="/assets/redux-logo.svg"
            description="Logo de Redux"
            text="Redux"
          />
          <List
            logo="/assets/jest-logo.svg"
            description="Logo de Jest"
            text="Jest"
          />
          <List
            logo="/assets/styled-components-logo.svg"
            description="Logo de Styled-components"
            text="Styled-components"
          />
          <List
            logo="/assets/html-5-logo.svg"
            description="Logo de HTML5"
            text="HTML 5"
          />
          <List
            logo="/assets/css3-logo.svg"
            description="Logo de CSS3"
            text="CSS 3"
          />
          <List
            logo="/assets/sass-logo.svg"
            description="Logo de SASS"
            text="SASS"
          />
        </ListWrapper>
      </Article>
      <Article>
        <h3>Outils</h3>
        <ListWrapper>
          <List
            logo="/assets/git-logo.svg"
            description="Logo de Git"
            text="Git"
          />
          {isDarkTheme ? (
            <List
              logo="/assets/github-logo.svg"
              description="Logo de GitHub"
              text="GitHub"
              $filter="invert(1)"
            />
          ) : (
            <List
              logo="/assets/github-logo.svg"
              description="Logo de GitHub"
              text="GitHub"
            />
          )}
          <List
            logo="/assets/npm-logo.svg"
            description="Logo de NPM"
            text="NPM"
          />
          <List
            logo="/assets/swagger-logo.svg"
            description="Logo de Swagger"
            text="Swagger (REST API)"
          />
        </ListWrapper>
      </Article>
    </ExperienceWrapper>
  );
};

export default Experience;
