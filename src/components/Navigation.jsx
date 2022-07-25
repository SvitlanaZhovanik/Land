import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  display: inline-block;
  height: 30px;
  color: ${({ theme }) => theme.colorSecondFont};
  font-size: 16px;
  padding-bottom: 3px;
  line-height: 1.6;
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:hover,
  &:focus,
  &:active {
    border-bottom: 2px solid ${({ theme }) => theme.colorAccentFont};
  }
`;
const Nav = styled.nav`
  margin: 12px 22px;
`;

export default function Navigation() {
  return (
    <Nav>
      <Link href="#home">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#cases">Cases</Link>
      <Link href="#blog">Blog</Link>
      <Link href="#contact">Contact</Link>
    </Nav>
  );
}
