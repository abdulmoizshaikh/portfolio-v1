import React from "react";

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

import { constants } from "../../constants/constants";

import {
  FooterContainer,
  FooterTop,
  Brand,
  Name,
  Title,
  FooterLinks,
  FooterLink,
  SocialLinks,
  SocialIcon,
  FooterBottom,
} from "./FooterStyles";

const { profile, navigation, contact, footer } = constants;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Brand>
          <Name>{profile.name}</Name>

          <Title>
            {profile.title} • {profile.subtitle}
          </Title>
        </Brand>

        <FooterLinks>
          {navigation.map((item) => (
            <FooterLink key={`${item.title}-${item.href}`} href={item.href}>
              {item.title}
            </FooterLink>
          ))}
        </FooterLinks>

        <SocialLinks>
          <SocialIcon
            href={contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={26} />
          </SocialIcon>

          <SocialIcon
            href={contact.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={26} />
          </SocialIcon>

          <SocialIcon href={`mailto:${contact.email}`}>
            <AiOutlineMail size={26} />
          </SocialIcon>
        </SocialLinks>
      </FooterTop>

      <FooterBottom>
        <p>{footer.copyright}</p>

        <span>{footer.builtWith}</span>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
