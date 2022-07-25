import React from 'react';
import styled from 'styled-components';
import ButtonHero from '../ButtonHero';

export const Section = styled.section`
  width: 100%;
  padding-bottom: ${props => props.pb || 0};
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 52px;
  line-height: 1.27;
  text-align: center;
  margin-top: 40px;

  color: ${({ theme }) => theme.colorHeroFont};
`;
const Text = styled.p`
  font-size: 22px;
  line-height: 1.67;
  margin-top: 20px;
  color: ${({ theme }) => theme.colorHeroFont};
  text-align: center;
`;

export default function HeroSection() {
  return (
    <Section id="home" pb="94px">
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
