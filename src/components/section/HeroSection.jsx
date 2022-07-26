import React from 'react';
import styled from 'styled-components';
import ButtonHero from '../ButtonHero';

export const Section = styled.section`
  width: 100%;
  padding-top: ${props => props.pt || 0};
  padding-bottom: ${props => props.pb || 0};
  @media screen and (min-width: 768px) {
    padding-bottom: ${props => (props.pb ? '410px' : 0)};
    padding-top: ${props => (props.pb ? '350px' : 0)};
  }
  @media screen and (min-width: 1360px) {
    padding-bottom: ${props => (props.pb ? '282px' : 0)};
    padding-top: ${props => (props.pb ? ' 230px' : 0)};
  }
  @media screen and (min-width: 1920px) {
    padding-bottom: ${props => (props.pb ? '450px' : 0)};
    padding-top: ${props => (props.pb ? '450px' : 0)};
  }
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 52px;
  line-height: 1.27;
  text-align: center;

  color: ${({ theme }) => theme.colorHeroFont};

  @media screen and (min-width: 768px) {
    font-size: 55px;
  }
`;
const Text = styled.p`
  font-size: 22px;
  line-height: 1.67;
  margin-top: 20px;
  color: ${({ theme }) => theme.colorHeroFont};
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

export default function HeroSection() {
  return (
    <Section id="home" pb="96px" pt="40px">
      <Title>The Sky Is The Limit</Title>
      <Text>We provide world class financial assistance</Text>
      <ButtonHero
        type="button"
        height="45px"
        width="156px"
        hero
        text="Read More"
      />
    </Section>
  );
}
