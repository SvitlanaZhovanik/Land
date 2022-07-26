import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 11px 36px;
  margin-top: 24px;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${({ theme }) => theme.colorSecondFont};
  background-color: ${props =>
    ({ theme }) =>
      theme[props.color]};
  border: 1px solid ${({ theme }) => theme.colorSecondFont};
  border-radius: 5px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colorSecondFont};
    color: ${props =>
      ({ theme }) =>
        theme[props.color]};
  }

  @media screen and (min-width: 768px) {
    width: calc(${props => props.width} + 10px);
    height: calc(${props => props.height} + 3px);
    font-size: 18px;
    line-height: 1.5;
    padding: 11px 33px;
  }
`;
export default function Button({ width, height, color, text }) {
  return (
    <StyledButton width={width} height={height} color={color}>
      {text}
    </StyledButton>
  );
}
