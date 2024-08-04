import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  RomanOrderedList,
  ListItem,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { constants } from '../../constants/constants';

const { projects } = constants;

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title="true">{p.title}</HeaderThree>
              <Hr />
            </TitleContent>

            {/* <CardInfo className="card-info">
              {p.description}
            </CardInfo> */}

            <RomanOrderedList>
              {p.description &&
                p.description.map((buttlePoint, idx) => (
                  <ListItem key={idx}>• {buttlePoint}</ListItem>
                ))}
            </RomanOrderedList>

            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>

            <UtilityList>
              {/* <ExternalLinks href={p.visit}>Code</ExternalLinks> */}
              <ExternalLinks href={p.source} target="_blank">
                Source
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <SectionDivider divider />
  </Section>
);

export default Projects;
