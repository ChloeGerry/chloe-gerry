import Header from './components/Header';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { AppWrapper } from './style/app.style';
import ThemeContextProvider from './context/themeContext';
import DataContextProvider from './context/DataContext';
import GlobalStyle from './style/globalStyle';
import Arrow from './components/Arrow';

const App = () => {
  return (
    <ThemeContextProvider>
      <DataContextProvider>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Home />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </AppWrapper>
        <Arrow />
      </DataContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
