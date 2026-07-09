import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;

  width: 100%;

  backdrop-filter: blur(18px);
  background: rgba(15, 22, 36, 0.82);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Inner = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  padding: 20px 48px;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 16px 40px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 14px 20px;
  }
`;

export const Logo = styled.div`
  font-size: 26px;
  font-weight: 800;
  white-space: nowrap;
  flex-shrink: 0;

  a {
    display: flex;
    align-items: baseline;
    gap: 6px;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  span {
    background: linear-gradient(270deg, #13adc7, #6978d1, #945dd6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 22px;
  }
`;

// Desktop navigation — hidden on tablet/mobile in favor of the slide-down menu
export const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
`;

export const NavItem = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

// Desktop-only cluster: social icons + resume button
export const SocialSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
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
  white-space: nowrap;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }
`;

// Mobile-only cluster: compact resume button + hamburger toggle
export const MobileControls = styled.div`
  display: none;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
  }
`;

export const MobileResumeButton = styled(ResumeButton)`
  padding: 8px 16px;
  font-size: 14px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 7px 14px;
    font-size: 13px;
  }
`;

export const MenuToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  color: white;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  &:focus {
    outline: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    gap: 4px;

    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    padding: 12px 40px 24px;

    background: rgba(15, 22, 36, 0.98);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 12px 20px 20px;
  }
`;

export const MobileNavItem = styled.a`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 500;
  font-size: 17px;
  padding: 12px 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const MobileSocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 16px;
`;
