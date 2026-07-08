import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const HeroTag = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: wrap;
  button {
    min-width: 210px;
  }
`;

export const MetricsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 28px;
  flex-wrap: wrap;
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 20px;
  }
`;

export const MetricItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  strong {
    font-size: 32px;
    font-weight: 800;
  }
  span {
    font-size: 14px;
    opacity: 0.8;
  }
`;
