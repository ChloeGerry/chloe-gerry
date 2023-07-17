import {
  ProfilePicture,
  Presentation,
  MainTitle,
  HomeWrapper,
  HomeImage,
} from './Home.style';

const Home = () => {
  return (
    <section id="home">
      <ProfilePicture src="/assets/portrait.jpeg" alt="Photo de Chloé Gerry" />
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
