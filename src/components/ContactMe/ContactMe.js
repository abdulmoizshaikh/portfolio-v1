import React from 'react';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { LinkItem, LinkColumn, LinkList, LinkTitle } from './ContactMeStyles';

const ContactMe = () => {
  return (
    <Section id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <SectionText>
        DISCUSS A PROJECT OR JUST WANT TO SAY HI MY INBOX IS OPEN FOR ALL
      </SectionText>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+92-304-5464742">+92-304-5464742</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:muhammadmoizshaikh@gmail.com">
            muhammadmoizshaikh@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SectionDivider />
    </Section>
  );
};

export default ContactMe;
