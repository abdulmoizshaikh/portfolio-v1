import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { constants } from "../../constants/constants";

import {
  ExperienceGrid,
  ExperienceCard,
  CompanyName,
  RoleTitle,
  Period,
  HighlightList,
  HighlightItem,
} from "./ExperienceStyles";

const { experience } = constants;

const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle>Professional Experience</SectionTitle>

      <ExperienceGrid>
        {experience.map((job) => (
          <ExperienceCard key={job.id}>
            <RoleTitle>{job.role}</RoleTitle>

            <CompanyName>{job.company}</CompanyName>

            <Period>{job.period}</Period>

            <HighlightList>
              {job.highlights.map((item) => (
                <HighlightItem key={`${job.company}-${item}`}>
                  {item}
                </HighlightItem>
              ))}
            </HighlightList>
          </ExperienceCard>
        ))}
      </ExperienceGrid>

      <SectionDivider divider />
    </Section>
  );
};

export default Experience;
