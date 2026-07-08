import Link from "next/link";
import React from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { constants } from "../../constants/constants";

import {
  Container,
  Logo,
  Nav,
  NavItem,
  ResumeButton,
  SocialIcons,
  SocialSection,
} from "./HeaderStyles";

const { contact, profile } = constants;

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link href="/">
          <span>محمد {profile.shortName}</span>
        </Link>
      </Logo>

      <Nav>
        <li>
          <NavItem href="#projects">Projects</NavItem>
        </li>

        <li>
          <NavItem href="#experience">Experience</NavItem>
        </li>

        <li>
          <NavItem href="#tech">Skills</NavItem>
        </li>

        <li>
          <NavItem href="#achievements">Achievements</NavItem>
        </li>

        <li>
          <NavItem href="#contact">Contact</NavItem>
        </li>
      </Nav>

      <SocialSection>
        <SocialIcons
          href={contact.github.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={26} />
        </SocialIcons>

        <SocialIcons
          href={contact.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={26} />
        </SocialIcons>

        <ResumeButton href="/resume.pdf" download>
          Resume
        </ResumeButton>
      </SocialSection>
    </Container>
  );
};

export default Header;
