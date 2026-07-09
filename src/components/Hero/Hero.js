import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { constants } from "../../constants/constants";
import {
  LeftSection,
  ButtonGroup,
  MetricsContainer,
  MetricItem,
  HeroTag,
} from "./HeroStyles";

const { hero, profile } = constants;

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = `${profile.name.replace(/\s+/g, "_")}_Resume.pdf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <HeroTag>👋 Hi, I'm {profile.name}</HeroTag>
        <SectionTitle main>
          {profile.title}
          <br />
          {profile.subtitle}
        </SectionTitle>
        <SectionText style={{ maxWidth: "720px" }}>
          {hero.description}
        </SectionText>
        <MetricsContainer>
          {hero.metrics.map((metric) => (
            <MetricItem key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </MetricItem>
          ))}
        </MetricsContainer>
        <ButtonGroup>
          <Button onClick={scrollToProjects}>View My Work</Button>
          {/* <Button alt onClick={downloadResume}>
            Download Resume
          </Button> */}
        </ButtonGroup>
      </LeftSection>
    </Section>
  );
};

export default Hero;
