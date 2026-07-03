import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  LeftSection,
  ButtonGroup,
  MetricsContainer,
  MetricItem,
  HeroTag,
} from "./HeroStyles";

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <HeroTag>Hi, I'm Muhammad Moiz 👋</HeroTag>

        <SectionTitle main>Senior Software Engineer</SectionTitle>

        <SectionText>
          Specializing in React, React Native, Next.js, and TypeScript. I build
          scalable web and mobile products, modernize legacy systems, and
          deliver reliable software that drives business growth.
        </SectionText>

        <MetricsContainer>
          <MetricItem>
            <strong>7+</strong>
            <span>Years Experience</span>
          </MetricItem>

          <MetricItem>
            <strong>15K+</strong>
            <span>Active Users</span>
          </MetricItem>

          <MetricItem>
            <strong>100K+</strong>
            <span>Downloads</span>
          </MetricItem>

          <MetricItem>
            <strong>20+</strong>
            <span>Projects</span>
          </MetricItem>
        </MetricsContainer>

        <ButtonGroup>
          <Button onClick={scrollToProjects}>View My Work</Button>

          <Button alt onClick={downloadResume}>
            Download Resume
          </Button>
        </ButtonGroup>
      </LeftSection>
    </Section>
  );
};

export default Hero;
