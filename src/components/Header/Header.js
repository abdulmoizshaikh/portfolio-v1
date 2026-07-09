import Link from "next/link";
import React, { useState } from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";

import { constants } from "../../constants/constants";

import {
  Container,
  Inner,
  Logo,
  Nav,
  NavItem,
  ResumeButton,
  SocialIcons,
  SocialSection,
  MobileControls,
  MobileResumeButton,
  MenuToggle,
  MobileMenu,
  MobileNavItem,
  MobileSocialRow,
} from "./HeaderStyles";

const { contact, profile, navigation } = constants;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <Container>
      <Inner>
        <Logo>
          <Link href="/">
            <span>محمد {profile.shortName}</span>
          </Link>
        </Logo>

        <Nav>
          {navigation.map((item) => (
            <li key={`${item.title}-${item.href}`}>
              <NavItem href={item.href}>{item.title}</NavItem>
            </li>
          ))}
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
            Download Resume
          </ResumeButton>
        </SocialSection>

        <MobileControls>
          <MobileResumeButton href="/resume.pdf" download>
            Resume
          </MobileResumeButton>

          <MenuToggle onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </MenuToggle>
        </MobileControls>

        <MobileMenu open={isOpen}>
          {navigation.map((item) => (
            <MobileNavItem
              key={`mobile-${item.title}-${item.href}`}
              href={item.href}
              onClick={closeMenu}
            >
              {item.title}
            </MobileNavItem>
          ))}

          <MobileSocialRow>
            <SocialIcons
              href={contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={24} />
            </SocialIcons>

            <SocialIcons
              href={contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={24} />
            </SocialIcons>
          </MobileSocialRow>
        </MobileMenu>
      </Inner>
    </Container>
  );
};

export default Header;
