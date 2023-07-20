import {
  HomeSection,
  ModalWrapper,
  CloseIconWrapper,
  CloseIcon,
  ModalTitle,
  ProfilePicture,
  MainTitle,
  Subtitle,
  HomeImage,
} from './Home.style';
import { useState } from 'react';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = (event) => {
    event.preventDefault();
    console.log('isModalOpen', isModalOpen);
    setModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <>
          <ModalWrapper open>
            <CloseIconWrapper>
              <CloseIcon
                className="fa-solid fa-xmark"
                onClick={() => setModalOpen(false)}
              ></CloseIcon>
            </CloseIconWrapper>
            <ModalTitle>Présentation</ModalTitle>
            <p>
              Après avoir travaillé 7 ans dans le social, j'aspirais à changer
              de vie. Je me suis donc lancée dans la grande aventure du
              développement web et plus particulièrement front-end, pour son
              accessibilité. À terme, j'ambitionne de non seulement développer
              mes compétences front-end mais aussi back-end et de m'orienter
              vers la cyber-sécurité.
            </p>
            <a href="#">Mon CV</a>
          </ModalWrapper>
          <HomeSection id="home">
            <HomeImage
              src="assets/home.jpg"
              $transform="translateZ(-10px) scale(2)"
            />
            <HomeImage
              src="/assets/bubbles.png"
              $transform="translateZ(-5px) scale(1.5);"
            />
            <MainTitle>Chloé Gerry</MainTitle>
            <Subtitle>Développeuse Front-end</Subtitle>
            <ProfilePicture
              onClick={handleModal}
              src="/assets/portrait.jpeg"
              alt="Photo de Chloé Gerry"
            />
          </HomeSection>
        </>
      ) : (
        <HomeSection id="home">
          <HomeImage
            src="assets/home.jpg"
            $transform="translateZ(-10px) scale(2)"
          />
          <HomeImage
            src="/assets/bubbles.png"
            $transform="translateZ(-5px) scale(1.5);"
          />
          <MainTitle>Chloé Gerry</MainTitle>
          <Subtitle>Développeuse Front-end</Subtitle>
          <ProfilePicture
            onClick={handleModal}
            src="/assets/portrait.jpeg"
            alt="Photo de Chloé Gerry"
          />
        </HomeSection>
      )}
    </>
  );
};

export default Home;
