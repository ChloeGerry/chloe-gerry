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
              <NavLink>
                <CloseIcon
                  className="fa-solid fa-xmark"
                  onClick={() => setModalOpen(false)}
                ></CloseIcon>
              </NavLink>
            </CloseIconWrapper>
            <ModalTitle>Présentation</ModalTitle>
            <p>
              Après avoir travaillé 7 ans dans le social, j'aspirais à changer
              de vie. Je me suis donc lancée dans la grande aventure du
              développement web et plus particulièrement du front-end.
            </p>
            <a href="resume.pdf">Mon CV</a>
          </ModalWrapper>
          <HomeSection>
            <HomeImageBackground
              src="assets/home.jpg"
              $transform="translateZ(-10px) scale(2)"
              alt="Fond d'écran d'une bulle de couleur"
              theme={theme}
            />
            <HomeImageForeground
              src="assets/bubbles.png"
              $transform="translateZ(-5px) scale(1.5)"
              alt="Fond d'écran de gouttes d'eau"
              theme={theme}
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
        <HomeSection>
          <HomeImageBackground
            src="assets/home.jpg"
            $transform="translateZ(-10px) scale(2)"
            theme={theme}
          />
          <HomeImageForeground
            src="assets/bubbles.png"
            $transform="translateZ(-5px) scale(1.5);"
            theme={theme}
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
