import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, My name <br />
          is Thiago Hercules
        </SectionTitle>
        <SectionText>
        This portfolio was developed based on the Javascript Mastery project. Made for study purposes and for Javascript practice; ReactJs and Next.Js
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;