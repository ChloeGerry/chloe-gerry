import CardPreview from '../../components/CardPreview';
import List from '../../components/List';
import {
  ProjectsSection,
  ProjectsMainTitle,
  CardsContainer,
  CardWrapper,
  ListContainer,
  IconesCredits,
} from './projects.style';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { useState } from 'react';
import Loader from '../../components/Loader';

const Projects = () => {
  const { isDarkTheme, light, dark } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;
  const path = 'assets/';
  const [projectData, getProjectsData] = useState([]);

  useEffect(() => {
    fetch('https://chloegerry.github.io/chloe-gerry/projectsData.json')
      .then((response) => response.json())
      .then((data) => getProjectsData(data.projects))
      .catch((error) => console.log(error));
  }, []);

  if (!projectData) {
    return <Loader />;
  }

  return (
    <ProjectsSection id="projects" theme={theme}>
      <ProjectsMainTitle>Projets</ProjectsMainTitle>
      <CardsContainer>
        {projectData.map(
          ({
            id,
            technologies,
            screen,
            title,
            textTitle,
            description,
            gitHub,
            website,
          }) => {
            return (
              <CardWrapper key={id}>
                <ListContainer>
                  {technologies.map(({ logo, alt }, index) => {
                    return (
                      <List
                        key={index}
                        logo={`${path}${logo}`}
                        description={alt}
                      />
                    );
                  })}
                </ListContainer>
                {id === 6 ? (
                  <CardPreview
                    screen={`${path}${screen}`}
                    title={title}
                    textTitle={textTitle}
                    text={description}
                    github={gitHub}
                    site={website}
                    $height="68%"
                  />
                ) : (
                  <CardPreview
                    screen={`${path}${screen}`}
                    title={title}
                    textTitle={textTitle}
                    text={description}
                    github={gitHub}
                    site={website}
                  />
                )}
              </CardWrapper>
            );
          }
        )}
      </CardsContainer>
      <IconesCredits>
        * Certaines icônes proviennent du site{' '}
        <a href="https://icones8.fr/">Icones8</a>
      </IconesCredits>
    </ProjectsSection>
  );
};

export default Projects;
