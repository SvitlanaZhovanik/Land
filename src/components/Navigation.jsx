import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const StyledLink = styled(Link)`
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
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
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
  @media screen and (min-width: 768px) {
    margin: 0 32px;
    & li:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <ul>
        <li>
          <StyledLink
            duration={800}
            spy={true}
            smooth={true}
            offset={-70}
            to="home"
          >
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            duration={800}
            spy={true}
            smooth={true}
            offset={-70}
            to="about"
          >
            About
          </StyledLink>
        </li>
        <li>
          <StyledLink
            duration={800}
            spy={true}
            smooth={true}
            offset={-70}
            to="cases"
          >
            Cases
          </StyledLink>
        </li>
        <li>
          <StyledLink
            duration={800}
            spy={true}
            smooth={true}
            offset={-70}
            to="blog"
          >
            Blog
          </StyledLink>
        </li>
        <li>
          <StyledLink
            duration={800}
            spy={true}
            smooth={true}
            offset={-70}
            to="contact"
          >
            Contact
          </StyledLink>
        </li>
      </ul>
    </Nav>
  );
}
