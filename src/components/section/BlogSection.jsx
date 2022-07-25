import React from 'react';
import { Section } from './HeroSection';
import { Title, Text, ImgBox, TextWrapper } from './AboutSection';
import Button from 'components/Button';
import Blog from 'assets/images/home/blog.jpg';
import Blog2x from 'assets/images/home/blog@2x.jpg';
import BlogWebp from 'assets/images/home/blog.webp';
import BlogWebp2x from 'assets/images/home/blog@2x.webp';

export default function BlogSection() {
  return (
    <Section id="blog">
      <ImgBox>
        <source srcSet={`${BlogWebp}, ${BlogWebp2x} 2x`} type="image/webp" />
        <source srcSet={`${Blog}, ${Blog2x} 2x`} type="image/jpg" />
        <img src={Blog} alt="a tablet, a book and a cup on table" />
      </ImgBox>
      <TextWrapper color="colorBlueBackground">
        <Text size="18px">April 16 2020</Text>
        <Title>Blog Post One</Title>
        <Text size="16px" mt="24px">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Text>
        <Button
          type="button"
          width="184px"
          height="47px"
          color="colorBlueBackground"
          text="Read Our Blog"
        />
      </TextWrapper>
    </Section>
  );
}
