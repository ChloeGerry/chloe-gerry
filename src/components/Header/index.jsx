import { Navigation, Anchor } from './header.style';

const Header = () => {
  return (
    <header>
      <Navigation>
        <Anchor href="#home">Accueil</Anchor>
        <Anchor href="#experience">Mon expérience</Anchor>
        <Anchor href="#projects">Mes projets</Anchor>
        <Anchor href="#contact">Me contacter</Anchor>
      </Navigation>
    </header>
  );
};

export default Header;
