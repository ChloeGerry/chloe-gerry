import Header from './components/Header';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import { AppWrapper } from './style/app.style';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppWrapper>
          <Home />
          <Experience />
          <Projects />
          <Footer />
        </AppWrapper>
      </main>
    </>
  );
};

export default App;
