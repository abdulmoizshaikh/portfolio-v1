import styled from "styled-components";

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 32px;
  width: 100%;
`;

export const ExperienceCard = styled.article`
  padding: 28px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition:
    transform .25s ease,
    box-shadow .25s ease,
    border-color .25s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: rgba(19, 173, 199, 0.4);
    box-shadow: 0 10px 30px rgba(19, 173, 199, 0.12);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 22px;
  }
`;

export const RoleTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const CompanyName = styled.h4`
  color: ${({ theme }) => theme.colors.primary1};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const Period = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-bottom: 20px;
`;

export const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const HighlightItem = styled.li`
  position: relative;
  padding-left: 22px;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 15px;
  line-height: 1.7;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary1};
    font-weight: bold;
  }
`;
