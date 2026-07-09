import styled from "styled-components";

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled.div`
  padding: 24px;
  border-radius: 18px;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);

    border-color: rgba(19, 173, 199, 0.35);

    box-shadow: 0 12px 30px rgba(19, 173, 199, 0.12);
  }
`;

export const ContactLabel = styled.h4`
  margin-bottom: 12px;

  font-size: 13px;

  font-weight: 700;

  text-transform: uppercase;

  letter-spacing: 0.08em;

  color: rgba(255, 255, 255, 0.45);
`;

export const ContactValue = styled.a`
  color: rgba(255, 255, 255, 0.88);

  font-size: 16px;

  line-height: 1.6;

  text-decoration: none;

  word-break: break-word;

  transition: color 0.25s ease;

  &:visited {
    color: rgba(255, 255, 255, 0.88);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;

  justify-content: center;

  gap: 18px;

  margin-top: 48px;

  flex-wrap: wrap;
`;

export const ContactButton = styled.a`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 210px;

  padding: 14px 28px;

  border-radius: 999px;

  text-decoration: none;

  font-weight: 600;

  color: white;

  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);

  transition:
    transform 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    opacity: 0.92;
  }
`;
