import { HeaderStyled, Navigation, Anchor } from './header.style';

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation>
        <Anchor href="#home">Accueil</Anchor>
        <Anchor href="#experience">Mon expérience</Anchor>
        <Anchor href="#projects">Mes projets</Anchor>
        <Anchor href="#contact">Me contacter</Anchor>
      </Navigation>
    </HeaderStyled>
  );
};

export default Header;
