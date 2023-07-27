import CardPreview from '../../components/CardPreview';
import List from '../../components/List';
import {
  ProjectsSection,
  ProjectsMainTitle,
  CardsContainer,
  CardWrapper,
  ListContainer,
  IconesCredits,
  PaginationWrapper,
  Pagination,
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
  const projectsPerPage = 2;
  let numberOFPages = 0;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://chloegerry.github.io/chloe-gerry/projectsData.json')
      .then((response) => response.json())
      .then((data) => getProjectsData(data.projects))
      .catch((error) => console.log(error));
  }, []);

  if (!projectData) {
    return <Loader />;
  }

  const slicesProjects = projectData.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  numberOFPages = Math.ceil(projectData.length / projectsPerPage);

  return (
    <ProjectsSection id="projects" theme={theme}>
      <ProjectsMainTitle>Projets</ProjectsMainTitle>
      <CardsContainer>
        {slicesProjects.map(
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
      <PaginationWrapper>
        {[...Array(numberOFPages)].map((_, index) => {
          return (
            <Pagination
              className={currentPage === index + 1 ? 'isSelected' : ''}
              onClick={() => setCurrentPage(index + 1)}
              key={index}
            >
              {index + 1}
            </Pagination>
          );
        })}
      </PaginationWrapper>
      <IconesCredits>
        * Certaines icônes proviennent du site{' '}
        <a href="https://icones8.fr/">Icones8</a>
      </IconesCredits>
    </ProjectsSection>
  );
};

export default Projects;
