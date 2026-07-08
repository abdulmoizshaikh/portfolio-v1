import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0;

  backdrop-filter: blur(18px);

  background: rgba(15, 22, 36, 0.82);

  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    gap: 24px;
  }
`;

export const Logo = styled.div`
  font-size: 30px;

  font-weight: 800;

  a {
    color: ${({ theme }) => theme.colors.white};

    text-decoration: none;
  }

  span {
    background: linear-gradient(270deg, #13adc7, #6978d1, #945dd6);

    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
  }
`;

export const Nav = styled.ul`
  display: flex;

  gap: 32px;

  list-style: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-wrap: wrap;

    justify-content: center;

    gap: 18px;
  }
`;

export const NavItem = styled.a`
  color: rgba(255, 255, 255, 0.8);

  text-decoration: none;

  font-weight: 500;

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const SocialSection = styled.div`
  display: flex;

  align-items: center;

  gap: 16px;
`;

export const SocialIcons = styled.a`
  display: flex;

  align-items: center;

  justify-content: center;

  color: white;

  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};

    transform: translateY(-2px);
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  padding: 10px 22px;

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
