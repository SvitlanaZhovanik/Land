import React, { useEffect } from 'react';
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
import ContactSection from 'components/section/ContactSection';
import Footer from 'components/Footer';
import CasesSection from 'components/section/CasesSection';
import TeamSection from 'components/section/TeamSection';

const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }
  &.is-sticky {
    position: fixed;
    top: 0;
    left: auto;
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    z-index: 10;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
const Wrapper = styled.div`
  padding-top: 20px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url('${Hero}');
  background-repeat: no-repeat;
  background-size: auto 565px;
  background-position: top center;
  @media screen and (min-width: 768px) {
    background-size: auto 1040px;
  }
  @media screen and (min-width: 1360px) {
    background-size: auto 820px, contain;
    background-position: top;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .box {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ),
        url('${Hero2x}');
    }
  }
`;

function App() {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = e => {
    const header = document.getElementById('header');
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <Header id="header">
            <Logo />
            <Navigation />
          </Header>
          <main>
            <HeroSection />
            <AboutSection />
            <CasesSection />
            <BlogSection />
            <TeamSection />
            <ContactSection />
          </main>
        </Wrapper>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
