import Header from './components/Header';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import { AppWrapper } from './style/app.style';
import ThemeContextProvider from './context/themeContext';
import GlobalStyle from './style/globalStyle';

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Header />
      <AppWrapper>
        <Home />
        <Experience />
        <Projects />
        <Footer />
      </AppWrapper>
    </ThemeContextProvider>
  );
};

export default App;
