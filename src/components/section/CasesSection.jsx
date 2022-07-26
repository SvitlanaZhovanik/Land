import React from 'react';
import styled from 'styled-components';
import { Section } from './HeroSection';
import { Title, Text, TextWrapper } from './AboutSection';
import { gallery } from 'assets/gallery';

export const CenterTitle = styled(Title)`
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colorFont};
`;
export const CenterText = styled(Text)`
  text-align: center;
  color: ${({ theme }) => theme.colorFont};
`;

export const ImgBox = styled.picture`
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  & img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    & img {
      min-width: 223px;
    }
  }
  @media screen and (min-width: 1360px) {
    & img {
      min-width: 421px;
    }
  }
`;
export const ImageWrapper = styled.div`
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 18px;
  }
  @media screen and (min-width: 1360px) {
    grid-gap: 21px;
  }
`;
const Link = styled.a`
  &:hover picture,
  &:focus picture {
    opacity: 0.5;
  }
`;

export default function CasesSection() {
  return (
    <Section id="cases">
      <TextWrapper>
        <CenterText size="18px">This is what we do</CenterText>
        <CenterTitle>Business Cases</CenterTitle>
        <CenterText size="16px" mt="20px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </CenterText>
        <ImageWrapper>
          {gallery.map(item => {
            return (
              <Link href={item.jpg} key={item.id} data-lightbox="gallery">
                <ImgBox>
                  <source
                    srcSet={`${item.webp}, ${item.webp2x} 2x`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`${item.jpg}, ${item.jpg2x} 2x`}
                    type="image/jpg"
                  />
                  <img src={item.jpg} alt={item.name} />
                </ImgBox>
              </Link>
            );
          })}
        </ImageWrapper>
      </TextWrapper>
    </Section>
  );
}
