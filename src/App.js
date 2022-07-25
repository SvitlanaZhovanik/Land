import styled from 'styled-components';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import HeroSection from 'components/section/HeroSection';
import Hero from 'assets/images/home/showcase.jpg';
import Hero2x from 'assets/images/home/showcase@2x.jpg';
import AboutSection from 'components/section/AboutSection';
import BlogSection from 'components/section/BlogSection';

const Header = styled.header`
  margin: 0 auto;
  text-align: center;
`;
const Wrapper = styled.div`
  height: 533px;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.colorFooterBackground};
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('${Hero}');
  background-repeat: no-repeat;
  background-size: auto 533px;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .box {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url('${Hero2x}');
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header>
          <Logo />
          <Navigation />
        </Header>
        <main>
          <HeroSection />
          <AboutSection />
          <BlogSection />
        </main>
      </Wrapper>
      <footer></footer>
    </ThemeProvider>
  );
}

export default App;
