import React from 'react';
import styled from 'styled-components';
import { Section } from './HeroSection';
import People from 'assets/images/home/people.jpg';
import PeopleWebp from 'assets/images/home/people.webp';
import People2x from 'assets/images/home/people@2x.jpg';
import PeopleWebp2x from 'assets/images/home/people@2x.webp';
import Button from '../components/Button';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const ImgBox = styled.picture`
  & img {
    width: 100vw;
  }
  @media screen and (min-width: 768px) {
    & img {
      width: 368px;
      height: ${props => props.height || '589px'};
      object-fit: cover;
    }
  }
  @media screen and (min-width: 1360px) {
    & img {
      width: 670px;
      height: 460px;
    }
  }
`;
export const TextWrapper = styled.div`
  padding: 40px 20px;
  background-color: ${props =>
    ({ theme }) =>
      theme[props.color]};
  @media screen and (min-width: 768px) {
    padding: 40px 32px;
    padding-right: 73px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 20px;
    padding-right: 64px;
  }
`;

export const Text = styled.p`
  margin-top: ${props => props.mt || 0};
  font-size: ${props => props.size};
  line-height: 1.6;
  color: ${({ theme }) => theme.colorSecondFont};
  @media screen and (min-width: 768px) {
    font-size: calc(${props => props.size} + 2px);
  }
`;

export const Title = styled.h2`
  margin-top: 8px;
  font-weight: 300;
  font-size: 38px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colorSecondFont};
`;

export default function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <ImgBox>
          <source
            srcSet={`${PeopleWebp}, ${PeopleWebp2x} 2x`}
            type="image/webp"
          />
          <source srcSet={`${People}, ${People2x} 2x`} type="image/jpg" />
          <img src={People} alt="team of professionals" />
        </ImgBox>
        <TextWrapper color="colorGreenBackground">
          <Text size="18px">What you are looking for</Text>
          <Title>We provide bespoke solutions</Title>
          <Text size="16px" mt="24px">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </Text>
          <Button
            type="button"
            width="158px"
            height="47"
            color="colorGreenBackground"
            text="Read More"
          />
        </TextWrapper>
      </Container>
    </Section>
  );
}
