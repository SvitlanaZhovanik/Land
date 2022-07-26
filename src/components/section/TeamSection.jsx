import React from 'react';
import styled from 'styled-components';
import { Section } from './HeroSection';
import { CenterText, CenterTitle, ImgBox, ImageWrapper } from './CasesSection';
import { Wrapper } from './CasesSection';
import { team } from 'assets/team';
import IconGroup from 'components/IconGroup';

const Img = styled.img`
  transform: scale(1);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
const TeamTitle = styled(CenterTitle)`
  font-size: 23px;
  line-height: 1.2;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    margin-top: 14px;
    font-size: 25px;
    line-height: 1.3;
  }
`;
const Card = styled.div`
  position: relative;
  margin-top: 20px;
  &:hover img,
  &:focus img {
    transform: scale(1.05);
    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.4);
  }
  &:hover div#box,
  &:focus div#box {
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
const ImgOutline = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  width: 100%;
  height: calc(100% - 80px);
  opacity: 0;
  transform: scale(1.05);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    min-width: 223px;
    height: calc(100% - 87px);
  }
  @media screen and (min-width: 1360px) {
    min-width: 421px;
  }
`;

export default function TeamSection() {
  return (
    <Section>
      <Wrapper>
        <CenterText size="18px">Who we are</CenterText>
        <CenterTitle>Our Professional Team</CenterTitle>
        <CenterText size="16px" mt="20px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </CenterText>
        <ImageWrapper>
          {team.map(item => {
            return (
              <Card key={item.id}>
                <ImgBox>
                  <source
                    srcSet={`${item.webp}, ${item.webp2x} 2x`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`${item.jpg}, ${item.jpg2x} 2x`}
                    type="image/jpg"
                  />
                  <Img src={item.jpg} alt={item.alt} />
                </ImgBox>
                <ImgOutline id="box">
                  <IconGroup opacity="0.8" />
                </ImgOutline>
                <TeamTitle>{item.name}</TeamTitle>
                <CenterText size="16px" mt="12px">
                  {item.profession}
                </CenterText>
              </Card>
            );
          })}
        </ImageWrapper>
      </Wrapper>
    </Section>
  );
}
