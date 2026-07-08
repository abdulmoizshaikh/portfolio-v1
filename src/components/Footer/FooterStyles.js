import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 64px 0 32px;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;
  flex-wrap: wrap;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
`;

export const Title = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  line-height: 1.6;
`;

export const FooterLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialIcon = styled.a`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: white;

  background: rgba(255, 255, 255, 0.06);

  transition: 0.25s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary1};
    transform: translateY(-3px);
  }
`;

export const FooterBottom = styled.div`
  margin-top: 48px;
  padding-top: 24px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  color: rgba(255, 255, 255, 0.55);

  font-size: 14px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
  }
`;
