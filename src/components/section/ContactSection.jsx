import React from 'react';
import styled from 'styled-components';
import { ImgBox, Container } from './AboutSection';
import { Section } from './HeroSection';
import Contact from 'assets/images/home/contact.jpg';
import Contact2x from 'assets/images/home/contact@2x.jpg';
import ContactWebp from 'assets/images/home/contact.webp';
import ContactWebp2x from 'assets/images/home/contact@2x.webp';
import ContactForm from 'components/ContactForm';

const Title = styled.h2`
  font-weight: 300;
  font-size: 38px;
  line-height: 1.2;
`;
const Wrapper = styled.div`
  padding: 40px 20px;
  background-color: ${props =>
    ({ theme }) =>
      theme[props.color]};
  @media screen and (min-width: 768px) {
    padding: 40px 30px;
    width: 100%;
  }
`;

export default function ContactSection() {
  return (
    <Section id="contact">
      <Container>
        <ImgBox height="354px">
          <source
            srcSet={`${ContactWebp}, ${ContactWebp2x} 2x`}
            type="image/webp"
          />
          <source srcSet={`${Contact}, ${Contact2x} 2x`} type="image/jpg" />
          <img src={Contact} alt="the man is working at the table" />
        </ImgBox>
        <Wrapper color="colorFormBackground">
          <Title>Request Callback</Title>
          <ContactForm />
        </Wrapper>
      </Container>
    </Section>
  );
}
