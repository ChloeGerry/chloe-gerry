import Header from './components/Header';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default App;
