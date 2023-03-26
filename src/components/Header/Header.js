import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { constants } from '../../constants/constants';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const { socialLinks } = constants;
const Header = () => (
  <Container>
    {/* <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: 'white' }}
      >
        <DiCssdeck size="3rem" /> <span>Portfolio</span>
      </Link>
    </Div1> */}
    <Div2>
      <li>
        {/* <Link href="#projects"> */}
        <NavLink href="#projects">Projects</NavLink>
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="#tech"> */}
        <NavLink href="#tech">Technologies</NavLink>
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="#about"> */}
        <NavLink href="#about">About</NavLink>
        {/* </Link> */}
      </li>
    </Div2>
    <Div3>
      <SocialIcons href={socialLinks.githubProfileUrl} target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={socialLinks.linkedInProfileUrl} target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
