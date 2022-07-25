import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>
        <section></section>
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}

export default App;
