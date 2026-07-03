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
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
`;

export const MetricsContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 32px;
  flex-wrap: wrap;
`;

export const MetricItem = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 28px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
    opacity: 0.8;
  }
`;
