import React from 'react'
import { AboutSection, AboutInfo, InfoTitle, Span, InfoDir, InfoDesc, Anchor } from './style.js'

const About = () => {
  return (
    <AboutSection>
      <div class="container">
        <AboutInfo>
          <InfoTitle><Span>This is</Span> Me</InfoTitle>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta maxime non nemo deserunt quos, rerum magnam minima adipisci porro cum, <Anchor>voluptatem </Anchor> libero deleniti!</InfoDesc>
          <InfoDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta maxime non nemo deserunt quos, rerum magnam minima adipisci porro cum, voluptatem repellendus libero deleniti!</InfoDesc>
        </AboutInfo> 
      </div>
    </AboutSection>
  )
}

export default About