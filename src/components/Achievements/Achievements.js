import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { constants } from "../../constants/constants";

import {
  AchievementCard,
  AchievementDescription,
  AchievementTitle,
  AchievementValue,
  AchievementsGrid,
} from "./AchievementsStyles";

const { achievements } = constants;

const Achievements = () => {
  return (
    <Section id="achievements">
      <SectionTitle>Career Highlights</SectionTitle>

      <SectionText>
        Selected engineering achievements demonstrating technical leadership,
        platform scalability, performance optimization, and measurable business
        impact.
      </SectionText>

      <AchievementsGrid>
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id}>
            <AchievementValue>{achievement.value}</AchievementValue>

            <AchievementTitle>{achievement.title}</AchievementTitle>

            <AchievementDescription>
              {achievement.description}
            </AchievementDescription>
          </AchievementCard>
        ))}
      </AchievementsGrid>

      <SectionDivider divider />
    </Section>
  );
};

export default Achievements;
