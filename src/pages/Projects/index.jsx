import CardPreview from '../../components/CardPreview';
import List from '../../components/List';
import {
  ProjectMainTitle,
  CardsContainer,
  CardWrapper,
  ListContainer,
} from './projects.style';

const Projects = () => {
  return (
    <section id="projects">
      <ProjectMainTitle>Mes projets</ProjectMainTitle>
      <CardsContainer>
        <CardWrapper>
          <CardPreview
            screen="/assets/christmas-algorithm.jpg"
            title="Algorithme de distribution de cadeau"
          />
          <ListContainer>
            <List
              logo="/assets/html-5-logo.svg"
              description="Logo de HTML5"
              $padding="8px"
            />
            <List
              logo="/assets/css3-logo.svg"
              description="Logo de CSS3"
              $padding="8px"
            />
            <List
              logo="/assets/javascript-logo.svg"
              description="Logo de JavaScript"
              $padding="8px"
            />
          </ListContainer>
        </CardWrapper>
        <CardWrapper>
          <CardPreview
            screen="/assets/booki.jpg"
            title="Site vitrine de location de logements"
          />
          <ListContainer>
            <List
              logo="/assets/html-5-logo.svg"
              description="Logo de HTML5"
              $padding="8px"
            />
            <List
              logo="/assets/css3-logo.svg"
              description="Logo de CSS3"
              $padding="8px"
            />
          </ListContainer>
        </CardWrapper>
        <CardWrapper>
          <CardPreview
            screen="/assets/oh-my-food.jpg"
            title="Site vitrine de commande de repas"
          />
          <ListContainer>
            <List
              logo="/assets/html-5-logo.svg"
              description="Logo de HTML5"
              $padding="8px"
            />
            <List
              logo="/assets/css3-logo.svg"
              description="Logo de CSS3"
              $padding="8px"
            />
          </ListContainer>
        </CardWrapper>
        <CardWrapper>
          <CardPreview
            screen="/assets/portfolio.jpg"
            title="Portfolio d'une photographe"
          />
          <ListContainer>
            <List
              logo="/assets/html-5-logo.svg"
              description="Logo de HTML5"
              $padding="8px"
            />
            <List
              logo="/assets/sass-logo.svg"
              description="Logo de SASS"
              $padding="8px"
            />
            <List
              logo="/assets/javascript-logo.svg"
              description="Logo de JavaScript"
              $padding="8px"
            />
          </ListContainer>
        </CardWrapper>
        <CardWrapper>
          <CardPreview
            screen="/assets/kasa.jpg"
            title="Application de location immobilière"
          />
          <ListContainer>
            <List
              logo="/assets/react-logo.svg"
              description="Logo de React"
              $padding="8px"
            />
            <List
              logo="/assets/css3-logo.svg"
              description="Logo de CSS3"
              $padding="8px"
            />
          </ListContainer>
        </CardWrapper>
        <CardWrapper>
          <CardPreview
            screen="/assets/redux.jpg"
            title="Application bancaire"
          />
          <ListContainer>
            <List
              logo="/assets/react-logo.svg"
              description="Logo de React"
              $padding="8px"
            />
            <List
              logo="/assets/redux-logo.svg"
              description="Logo de Redux"
              $padding="8px"
            />
            <List
              logo="/assets/styled-components-logo.svg"
              description="Logo de Styled-components"
              $padding="8px"
            />
          </ListContainer>
        </CardWrapper>
        <CardWrapper>
          <CardPreview
            screen="/assets/cooked-by-me.jpg"
            title="Planner de repas"
          />
          <ListContainer>
            <List
              logo="/assets/react-logo.svg"
              description="Logo de React"
              $padding="8px"
            />
            <List
              logo="/assets/typescript-logo.svg"
              description="Logo de Typescript"
              $padding="8px"
            />
            <List
              logo="/assets/styled-components-logo.svg"
              description="Logo de Styled-components"
              $padding="8px"
            />
          </ListContainer>
        </CardWrapper>
      </CardsContainer>
    </section>
  );
};

export default Projects;
