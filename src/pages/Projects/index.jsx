import CardPreview from '../../components/CardPreview';
import List from '../../components/List';
import {
  ProjectsSection,
  ProjectsMainTitle,
  CardsContainer,
  CardWrapper,
  ListContainer,
} from './projects.style';

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsMainTitle>Projets</ProjectsMainTitle>
      <CardsContainer>
        <CardWrapper>
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
          <CardPreview
            screen="/assets/cooked-by-me.jpg"
            title="Planner de repas"
            text="Cooked by me est un catalague de recettes en ligne. Il est possible de chercher des recettes spécifiques grâce à une barre de recherche. Cette application permet également de composer son propre planner en ajoutant les plats souhaités au moment voulu (déjeuner / dîner) afin de composer les repas de la semaine. Ce projet m'a permis de découvrir TypeScript et de travailler de la logique algorithmique pure."
            github="https://github.com/ChloeGerry/Cooked-By-Me.git"
            site="https://chloegerry.github.io/Cooked-By-Me/"
          />
        </CardWrapper>
        <CardWrapper>
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
          <CardPreview
            screen="/assets/kasa.jpg"
            title="Application de location immobilière"
            text="Refonte totale d'une application immobilière entièrement en React et responsive. Utilisation de react router afin de naviguer entre les différentes pages de l'application. C'est projet m'a permis de découvrir React, le travail par composants et la création de routes."
            github="https://github.com/ChloeGerry/Kasa-P8.git"
            site=""
          />
        </CardWrapper>
        <CardWrapper>
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
          <CardPreview
            screen="/assets/redux.jpg"
            title="Application bancaire"
            text="Création d'une application bancaire en React. Utililisation de Redux pour gérer la connexion utilisateur entre les différentes pages de l'application. Ce projet m'a fait découvrir la gestion d'un state global, d'action et de reducers via l'utilisation de Redux."
            github="https://github.com/ChloeGerry/ArgentBank-P11.git"
            site=""
          />
        </CardWrapper>
        <CardWrapper>
          <ListContainer>
            <List
              logo="/assets/javascript-logo.svg"
              description="Logo de JavaScript"
              $padding="8px"
            />
          </ListContainer>
          <CardPreview
            screen="/assets/christmas-algorithm.jpg"
            title="Algorithme de distribution de cadeau"
            text="Algorithme qui défini au hasard la distribution de cadeau au clic sur un bouton. C'est le premier projet JavaScript sur lequel j'ai travaillé, il m'a permis de travailler mon algorithmie."
            github="https://github.com/ChloeGerry/Algorithme-de-Noel.git"
            site=""
          />
        </CardWrapper>
      </CardsContainer>
    </ProjectsSection>
  );
};

export default Projects;
