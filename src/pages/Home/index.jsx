import {
  HomeSection,
  ModalWrapper,
  CloseIconWrapper,
  CloseIcon,
  ModalTitle,
  ProfilePicture,
  MainTitle,
  Subtitle,
  HomeImageForeground,
  HomeImageBackground,
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
              passionée par React et le travail par composant en général.
              L'écosystème front-end est très développé et j'ai hâte d'en
              apprendre encore plus à son sujet.
            </p>
            <a href="resume.pdf">Mon CV</a>
          </ModalWrapper>
          <HomeSection id="home">
            <HomeImageBackground
              src="assets/home-bg.png"
              $transform="translateZ(-10px) scale(2)"
              alt="Paysage avec des oiseaux"
            />
            <HomeImageForeground
              src="assets/home-fg.png"
              $transform="translateZ(-5px) scale(1.5)"
              alt="Arbres"
            />
            <ProfilePicture
              onClick={handleModal}
              src="assets/portrait.jpeg"
              alt="Photo de Chloé Gerry"
              theme={theme}
            />
          </HomeSection>
        </>
      ) : (
        <HomeSection id="home">
          <HomeImageBackground
            src="assets/home-bg.png"
            $transform="translateZ(-10px) scale(2)"
            alt="Paysage avec des oiseaux"
          />
          <HomeImageForeground
            src="assets/home-fg.png"
            $transform="translateZ(-5px) scale(1.5)"
            alt="Arbres"
          />
          <MainTitle theme={theme}>Chloé Gerry</MainTitle>
          <Subtitle theme={theme}>Développeuse Front-end</Subtitle>
          <NavLink onClick={handleModal}>
            <ProfilePicture
              src="assets/portrait.jpeg"
              alt="Photo de Chloé Gerry"
              theme={theme}
            />
          </NavLink>
        </HomeSection>
      )}
    </>
  );
};

export default Home;
