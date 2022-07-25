import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from 'assets/logo-icon.svg';

const LogoWrapper = styled.div`
  display: flex;
  margin-top: 21px;
  margin-left: 24px;
  margin-right: 24px;
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
    color: ${({ theme }) => theme.colorWhiteHover};
    fill: ${({ theme }) => theme.colorGreenHover};
  }
  &:hover span,
  &:focus span {
    color: ${({ theme }) => theme.colorGreenHover};
  }
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoIcon />
      <p>
        <span>Finance</span>
        Ledger
      </p>
    </LogoWrapper>
  );
}
