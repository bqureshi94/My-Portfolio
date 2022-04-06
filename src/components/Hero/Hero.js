import React from 'react';

import { Section, SectionStart, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
    <SectionStart>
        Hi, my name is
      </SectionStart>
      <SectionTitle main center>
        Bilal Qureshi. <br/>
        I build things for<br/>the web.
      </SectionTitle>
      <SectionText>
        I'm soon to be a software engineer specializing in building (and occasionally designing)
        exceptional digital experiences. 
      </SectionText>
      <Button onClick={() => window.location = '#'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;