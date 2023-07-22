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
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const Projects = () => {
  const { isDarkTheme, light, dark } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;

  return (
    <ProjectsSection id="projects" theme={theme}>
      <ProjectsMainTitle>Projets</ProjectsMainTitle>
      <CardsContainer>
        <CardWrapper>
          <ListContainer>
            <List
              logo="/assets/typescript-logo.svg"
              description="Logo de Typescript"
              $padding="8px"
            />
            <List
              logo="/assets/react-logo.svg"
              description="Logo de React"
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
            text="Refonte totale d'une application immobilière entièrement en React et responsive. Utilisation de react router afin de naviguer entre les différentes pages de l'application. Ce projet m'a permis de découvrir React, le travail par composants et la création de routes."
            github="https://github.com/ChloeGerry/Kasa-P8.git"
            site=""
          />
        </CardWrapper>
        <CardWrapper>
          <ListContainer>
            <List
              logo="/assets/redux-logo.svg"
              description="Logo de Redux"
              $padding="8px"
            />
            <List
              logo="/assets/react-logo.svg"
              description="Logo de React"
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
              logo="/assets/jest-logo.svg"
              description="Logo de Jest"
              $padding="8px"
            />
            <List
              logo="/assets/react-logo.svg"
              description="Logo de React"
              $padding="8px"
            />
          </ListContainer>
          <CardPreview
            screen="/assets/debug.jpg"
            title="Débug d'un site d'événementiel"
            text="Débug d'un site existant. Utilisation de librairies comme Jest et React Testing Library pour réaliser des tests unitaires et d'intégration. Ce projet m'a fait découvrir et pratiquer l'utilisation de tests dans un projet."
            github="https://github.com/ChloeGerry/Debugguer-P10.git"
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
          <CardPreview
            screen="/assets/portfolio.jpg"
            title="Portfolio d'une photographe"
            text="Création du portfolio d'une photographe. Utilisation de JavaScript pour récupérer dynamiquement les données, ainsi que pour ajouter ou supprimer des travaux. Ce projet m'a fait travailler l'utilisation du CRUD et des call api."
            github="https://github.com/ChloeGerry/Portfolio-P6.git"
            site=""
          />
        </CardWrapper>
        <CardWrapper>
          <ListContainer>
            <List
              logo="/assets/javascript-logo.svg"
              description="Logo de JavaScript"
            />
          </ListContainer>
          <CardPreview
            screen="/assets/christmas-algorithm.jpg"
            title="Algorithme de distribution de cadeau"
            text="Algorithme qui défini au hasard la distribution de cadeau au clic sur un bouton. C'est le premier projet JavaScript sur lequel j'ai travaillé, il m'a permis de travailler mon algorithmie."
            github="https://github.com/ChloeGerry/Algorithme-de-Noel.git"
            site=""
            $height="68%"
          />
        </CardWrapper>
      </CardsContainer>
      <IconesCredits>
        * Certaines icônes proviennent du site{' '}
        <a href="https://icones8.fr/">Icones8</a>
      </IconesCredits>
    </ProjectsSection>
  );
};

export default Projects;
