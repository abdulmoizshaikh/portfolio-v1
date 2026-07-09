import React from "react";
import { DiNodejsSmall, DiReact } from "react-icons/di";
import { FaCloud, FaMobileAlt } from "react-icons/fa";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { constants } from "../../constants/constants";

import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const { technologies } = constants;

const icons = {
  mobile: <FaMobileAlt size="3rem" />,
  react: <DiReact size="3rem" />,
  node: <DiNodejsSmall size="3rem" />,
  cloud: <FaCloud size="3rem" />,
};

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />

    <SectionTitle>Technical Expertise</SectionTitle>

    <SectionText>
      I design and build scalable mobile, web, and backend platforms using
      modern technologies across the entire software development lifecycle—from
      architecture and implementation to deployment, monitoring, and production
      support.
    </SectionText>

    <List>
      {technologies.map(({ id, icon, title, items }) => (
        <ListItem key={id}>
          <picture>{icons[icon]}</picture>

          <ListContainer>
            <ListTitle>{title}</ListTitle>

            <ListParagraph>
              {items.map((item) => (
                <React.Fragment key={item}>
                  {item}
                  <br />
                </React.Fragment>
              ))}
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>

    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
