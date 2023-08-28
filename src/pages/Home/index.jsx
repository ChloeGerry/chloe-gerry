import {
  HomeSection,
  ModalWrapper,
  CloseIconWrapper,
  CloseIcon,
  ModalTitle,
  ProfilePictureWrapper,
  ProfilePicture,
  ProfilePictureText,
  MainTitle,
  Subtitle,
  HomeImage,
} from './Home.style';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { isDarkTheme, light, dark } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <>
          <ModalWrapper open theme={theme}>
            <CloseIconWrapper>
              <NavLink onClick={() => setModalOpen(false)}>
                <CloseIcon className="fa-solid fa-xmark"></CloseIcon>
              </NavLink>
            </CloseIconWrapper>
            <ModalTitle>Présentation</ModalTitle>
            <p>
              Après avoir travaillé 7 ans dans le social, j'aspirais à changer
              de carrière. Je me suis donc lancée dans la grande aventure du
              développement web et plus particulièrement du front-end. Je suis
              passionée par React et le travail par composant en général. Je
              recherche une alternance sur Paris et aux alentours afin de
              m'accompagner dans mon apprentissage du front-end.
            </p>
            <a href="resume.pdf">Mon CV</a>
          </ModalWrapper>
          <HomeSection id="home">
            <HomeImage
              src="assets/home-bg.png"
              $transform="translateZ(-10px) scale(2)"
              alt="Paysage avec des oiseaux"
            />
            <HomeImage
              src="assets/home-fg.png"
              $transform="translateZ(-5px) scale(1.5)"
              alt="Arbres"
            />
            <ProfilePictureWrapper>
              <ProfilePicture
                src="assets/portrait.jpeg"
                alt="Photo de Chloé Gerry"
                theme={theme}
              />
              <ProfilePictureText theme={theme}>À propos</ProfilePictureText>
            </ProfilePictureWrapper>
          </HomeSection>
        </>
      ) : (
        <HomeSection id="home">
          <HomeImage
            src="assets/home-bg.png"
            $transform="translateZ(-10px) scale(2)"
            alt="Paysage avec des oiseaux"
          />
          <HomeImage
            src="assets/home-fg.png"
            $transform="translateZ(-5px) scale(1.5)"
            alt="Arbres"
          />
          <MainTitle theme={theme}>Chloé Gerry</MainTitle>
          <Subtitle theme={theme}>Développeuse Front-end</Subtitle>
          <NavLink onClick={handleModal}>
            <ProfilePictureWrapper>
              <ProfilePicture
                src="assets/portrait.jpeg"
                alt="Photo de Chloé Gerry"
                theme={theme}
              />
              <ProfilePictureText theme={theme}>À propos</ProfilePictureText>
            </ProfilePictureWrapper>
          </NavLink>
        </HomeSection>
      )}
    </>
  );
};

export default Home;
