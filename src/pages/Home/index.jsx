import {
  ModalWrapper,
  CloseIconWrapper,
  CloseIcon,
  ModalTitle,
  ProfilePicture,
  Presentation,
  MainTitle,
  HomeWrapper,
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
    <section id="home">
      {isModalOpen && (
        <ModalWrapper open>
          <CloseIconWrapper>
            <CloseIcon
              className="fa-solid fa-xmark"
              onClick={() => setModalOpen(false)}
            ></CloseIcon>
          </CloseIconWrapper>

          <ModalTitle>Présentation</ModalTitle>
          <p>
            Après avoir travaillé 7 ans dans le social, j'aspirais à changer de
            vie. Je me suis donc lancée dans la grande aventure du développement
            web et plus particulièrement front-end, pour son accessibilité. À
            terme, j'ambitionne de non seulement développer mes compétences
            front-end mais aussi back-end et de m'orienter vers la
            cyber-sécurité.
          </p>
          <a href="#">Mon CV</a>
        </ModalWrapper>
      )}
      <ProfilePicture
        onClick={handleModal}
        src="/assets/portrait.jpeg"
        alt="Photo de Chloé Gerry"
      />
      <Presentation>
        <MainTitle>Chloé Gerry</MainTitle>
        <h2>Développeuse Front-end</h2>
      </Presentation>
      <HomeWrapper>
        <HomeImage
          src="/assets/home-background.jpg"
          alt="Image artistique de couleurs pastels"
        />
      </HomeWrapper>
    </section>
  );
};

export default Home;
