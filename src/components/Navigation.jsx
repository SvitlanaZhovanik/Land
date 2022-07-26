import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  display: inline-block;
  height: 30px;
  color: ${({ theme }) => theme.colorSecondFont};
  font-size: 16px;
  padding-bottom: 3px;
  line-height: 1.6;

  &:hover,
  &:focus,
  &:active {
    border-bottom: 2px solid ${({ theme }) => theme.colorAccentFont};
  }
`;
const Nav = styled.nav`
  margin: 12px 22px;
  & ul {
    display: flex;
    justify-content: center;
  }
  & li:not(:last-child) {
    margin-right: 12px;
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <ul>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#cases">Cases</Link>
        </li>
        <li>
          <Link href="#blog">Blog</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  );
}
