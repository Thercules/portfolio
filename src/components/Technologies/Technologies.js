import React from 'react';
import { DiFirebase, DiSafari, DiReact, DiZend, DiCoda } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Here I will talk about the languages ​​that I use the most and that currently make up my development stack.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js; Angular; Bootstrap; JSF and ReactNative
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java; Spring; C/C++; .NET; JavaScript <br />
            PostgreSQL; MySQL; Oracle
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UX/UI Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma; Illustrator and Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    <ListItem>
        <picture>
          <DiSafari size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Agile Metodologies</ListTitle>
          <ListParagraph>
            Experience with <br />
            TDD, SCRUM, XP and Kanban.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCoda size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Levels: <br />
            Portuguese Native, English B1, Spanish B1, German A2. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      </List>
      <br></br>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
