import React from 'react';
import styled from 'styled-components';
import { Section } from './HeroSection';
import { Title, Text } from './AboutSection';
import { gallery } from 'assets/gallery';

export const CenterTitle = styled(Title)`
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colorFont};
  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;
export const CenterText = styled(Text)`
  text-align: center;
  color: ${({ theme }) => theme.colorFont};
  @media screen and (min-width: 768px) {
    margin-top: calc(${props => props.mt} + 4px);
  }
`;

export const ImgBox = styled.picture`
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  & img {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  padding: 40px 20px;
  background-color: ${props =>
    ({ theme }) =>
      theme[props.color]};

  @media screen and (min-width: 768px) {
    padding: 40px 32px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 20px;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 18px;
    margin-top: 24px;
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
      <Wrapper>
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
      </Wrapper>
    </Section>
  );
}
