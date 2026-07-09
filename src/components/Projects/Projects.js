import React from "react";

import {
  BlogCard,
  CardSectionTitle,
  DescriptionItem,
  DescriptionList,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  ProjectCategory,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { constants } from "../../constants/constants";

const { projects } = constants;

const FALLBACK_IMAGE =
  "https://placehold.co/640x400/1a1a2e/ffffff?text=Project";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Featured Work</SectionTitle>

    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
          />

          <TitleContent>
            <HeaderThree>{project.title}</HeaderThree>

            {project.category && (
              <ProjectCategory>{project.category}</ProjectCategory>
            )}

            <Hr />
          </TitleContent>

          <DescriptionList>
            {project.description?.map((bulletPoint) => (
              <DescriptionItem key={bulletPoint}>{bulletPoint}</DescriptionItem>
            ))}
          </DescriptionList>

          <CardSectionTitle>Technologies</CardSectionTitle>

          <TagList>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagList>

          {project.source && (
            <UtilityList>
              <ExternalLinks
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </ExternalLinks>
            </UtilityList>
          )}
        </BlogCard>
      ))}
    </GridContainer>

    <SectionDivider divider />
  </Section>
);

export default Projects;
