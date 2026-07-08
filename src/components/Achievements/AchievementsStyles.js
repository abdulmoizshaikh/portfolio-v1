import styled from "styled-components";

export const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const AchievementCard = styled.article`
  padding: 28px;
  border-radius: 20px;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);

    border-color: rgba(19, 173, 199, 0.35);

    box-shadow: 0 12px 30px rgba(19, 173, 199, 0.12);
  }
`;

export const AchievementValue = styled.h2`
  margin-bottom: 12px;

  font-size: 46px;

  font-weight: 800;

  line-height: 1;

  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AchievementTitle = styled.h4`
  margin-bottom: 12px;

  color: ${({ theme }) => theme.colors.white};

  font-size: 20px;

  font-weight: 700;
`;

export const AchievementDescription = styled.p`
  color: rgba(255, 255, 255, 0.75);

  font-size: 15px;

  line-height: 1.7;
`;
