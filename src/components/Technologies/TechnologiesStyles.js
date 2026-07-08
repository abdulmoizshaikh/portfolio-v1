import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 32px 0;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.white};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 22px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 17px;
  line-height: 34px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 28px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 280px;

  svg {
    margin-bottom: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
    max-width: 100%;

    svg {
      margin-bottom: 0;
      margin-top: 4px;
    }
  }
`;
