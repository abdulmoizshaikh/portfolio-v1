import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 32px;
  align-items: stretch;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const BlogCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;

  overflow: hidden;

  border-radius: 16px;

  background: ${({ theme }) => theme.colors.background1};

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28);
  }

  &:hover ${Img} {
    transform: scale(1.04);
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  padding: 0 24px;
`;

export const HeaderThree = styled.h3`
  color: ${({ theme }) => theme.colors.primary1};
  font-size: 2rem;
  font-weight: 700;
  padding-top: 24px;
  margin-bottom: 8px;
`;

export const ProjectCategory = styled.p`
  font-size: 14px;

  font-weight: 600;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.primary1};

  opacity: 0.85;

  margin-bottom: 12px;
`;

export const Hr = styled.hr`
  width: 60px;
  height: 3px;
  border: 0;
  margin: 18px auto;
  background: ${({ theme }) => theme.colors.primary1};
`;

export const DescriptionList = styled.ul`
  flex: 1;

  list-style: none;

  margin: 0;

  padding: 0 28px;
`;

export const DescriptionItem = styled.li`
  position: relative;

  padding-left: 20px;

  margin-bottom: 12px;

  font-size: 15px;

  line-height: 1.7;

  color: rgba(255, 255, 255, 0.82);

  &::before {
    content: "✓";

    position: absolute;

    left: 0;

    color: ${({ theme }) => theme.colors.primary1};

    font-weight: bold;
  }
`;

export const CardSectionTitle = styled.h4`
  text-align: center;

  margin-top: 8px;

  margin-bottom: 8px;

  font-size: 16px;

  font-weight: 600;

  color: ${({ theme }) => theme.colors.white};
`;

export const TagList = styled.ul`
  display: flex;

  justify-content: center;

  flex-wrap: wrap;

  gap: 10px;

  list-style: none;

  padding: 20px 24px;
`;

export const Tag = styled.li`
  padding: 8px 14px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.08);

  color: ${({ theme }) => theme.colors.primary1};

  font-size: 14px;

  font-weight: 600;
`;

export const UtilityList = styled.div`
  display: flex;

  justify-content: center;

  padding: 0 24px 28px;
`;

export const ExternalLinks = styled.a`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 180px;

  padding: 12px 24px;

  border-radius: 999px;

  text-decoration: none;

  color: white;

  font-weight: 600;

  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }
`;
