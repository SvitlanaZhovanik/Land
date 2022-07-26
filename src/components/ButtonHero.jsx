import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from 'assets/button-icon.svg';
import { StyledButton } from './Button';

const HeroButton = styled(StyledButton)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  padding: 10px 29px;
  align-items: center;
  background-color: ${({ theme }) => theme.colorGreenBackground};
  border: none;
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.colorGreenBackground};
    color: ${({ theme }) => theme.colorSecondFont};
  }
  & svg {
    margin-right: 4px;
  }
`;

export default function ButtonHero({ height, width, hero, text }) {
  return (
    <HeroButton height={height} width={width} hero={hero}>
      {hero ? <Icon /> : ''}
      {text}
    </HeroButton>
  );
}
