import React, { useEffect } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';

const StyledHeader = styled.header`
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

export default function Header() {
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
    <StyledHeader id="header">
      <Logo />
      <Navigation />
    </StyledHeader>
  );
}
