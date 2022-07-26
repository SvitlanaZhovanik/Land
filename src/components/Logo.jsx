import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { ReactComponent as LogoIcon } from 'assets/logo-icon.svg';

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.32;
  fill: ${({ theme }) => theme.colorAccentFont};
  color: ${({ theme }) => theme.colorSecondFont};
  transform: scale(1);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  & svg {
    margin-right: 6px;
  }
  & span {
    color: ${({ theme }) => theme.colorAccentFont};
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
    opacity: 0.8;
  }
  &:hover span,
  &:focus span {
    opacity: 0.8;
  }
  @media screen and (min-width: 768px) {
    margin: 0 32px;
    font-size: 35px;
    line-height: 1.21;
    & svg {
      margin-right: 10px;
    }
  }
`;

export default function Logo() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <LogoWrapper onClick={scrollToTop}>
      <LogoIcon />
      <p>
        <span>Finance</span>
        Ledger
      </p>
    </LogoWrapper>
  );
}
