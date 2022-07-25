import React from 'react';
import styled from 'styled-components';
import { ImgBox } from './AboutSection';
import { Section } from './HeroSection';
import { TextWrapper } from './AboutSection';
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

export default function ContactSection() {
  return (
    <Section id="contact">
      <ImgBox>
        <source
          srcSet={`${ContactWebp}, ${ContactWebp2x} 2x`}
          type="image/webp"
        />
        <source srcSet={`${Contact}, ${Contact2x} 2x`} type="image/jpg" />
        <img src={Contact} alt="the man is working at the table" />
      </ImgBox>
      <TextWrapper color="colorFormBackground">
        <Title>Request Callback</Title>
        <ContactForm />
      </TextWrapper>
    </Section>
  );
}
