import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { constants } from "../../constants/constants";

import {
  ContactGrid,
  ContactCard,
  ContactLabel,
  ContactValue,
  ButtonGroup,
  ContactButton,
} from "./ContactMeStyles";

const { contact } = constants;

const ContactMe = () => {
  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = "/resume.pdf";
    link.download = "Muhammad_Moiz_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="contact">
      <SectionTitle>{contact.title}</SectionTitle>

      <SectionText>{contact.description}</SectionText>

      <ContactGrid>
        <ContactCard>
          <ContactLabel>Email</ContactLabel>

          <ContactValue href={`mailto:${contact.email}`}>
            {contact.email}
          </ContactValue>
        </ContactCard>

        <ContactCard>
          <ContactLabel>Phone</ContactLabel>

          <ContactValue href={`tel:${contact.phoneHref}`}>
            {contact.phone}
          </ContactValue>
        </ContactCard>

        <ContactCard>
          <ContactLabel>Location</ContactLabel>

          <ContactValue as="span" style={{ cursor: "default" }}>
            {contact.location}
          </ContactValue>
        </ContactCard>

        <ContactCard>
          <ContactLabel>LinkedIn</ContactLabel>

          <ContactValue
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.linkedinText}
          </ContactValue>
        </ContactCard>

        <ContactCard>
          <ContactLabel>GitHub</ContactLabel>

          <ContactValue
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.githubText}
          </ContactValue>
        </ContactCard>

        <ContactCard>
          <ContactLabel>Availability</ContactLabel>

          <ContactValue as="span" style={{ cursor: "default" }}>
            {contact.availability}
          </ContactValue>
        </ContactCard>
      </ContactGrid>

      <ButtonGroup>
        <ContactButton href="/resume.pdf" download onClick={downloadResume}>
          Download Resume
        </ContactButton>

        <ContactButton href={`mailto:${contact.email}`}>Email Me</ContactButton>
      </ButtonGroup>

      <SectionDivider divider />
    </Section>
  );
};

export default ContactMe;
