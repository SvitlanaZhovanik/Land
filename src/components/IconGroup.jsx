import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Twitter } from 'assets/twitter.svg';
import { ReactComponent as YouTube } from 'assets/youtube.svg';
import { ReactComponent as LinkedIn } from 'assets/linkedin.svg';

const List = styled.ul`
  display: flex;
  align-items: center;
  width: 216px;
  margin: 0 auto;
`;
const Item = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
  & svg {
    fill: ${({ theme }) => theme.colorBackground};
  }
  &:hover svg,
  &:focus svg {
    fill: ${props =>
      ({ theme }) =>
        theme[props.colorHover] || (({ theme }) => theme.colorBackground)};
    opacity: ${props => props.opacity || 1};
  }
`;

export default function IconGroup({ color, opacity }) {
  return (
    <List>
      <Item colorHover={color} opacity={opacity}>
        <a href="https://www.facebook.com/" aria-label="Icon Facebook">
          <Facebook />
        </a>
      </Item>
      <Item colorHover={color} opacity={opacity}>
        <a href="https://www.twitter.com/" aria-label="Icon Twitter">
          <Twitter />
        </a>
      </Item>
      <Item colorHover={color} opacity={opacity}>
        <a href="https://www.youtube.com/" aria-label="Icon YouTube">
          <YouTube />
        </a>
      </Item>
      <Item colorHover={color} opacity={opacity}>
        <a href="https://www.linkedin.com/" aria-label="Icon LinkedIn">
          <LinkedIn />
        </a>
      </Item>
    </List>
  );
}
