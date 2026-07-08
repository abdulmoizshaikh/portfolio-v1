import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Experience from "../components/Experience/Experience";
import ContactMe from "../components/ContactMe/ContactMe";
import ScrollToTopButton from "../components/TopButton/Top";
import { Layout } from "../layout/Layout";
import { Container, Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
      </Container>

      <Technologies />

      <Projects />

      <Experience />

      {/* Enable after Contact section redesign */}
      {/* <Achievements /> */}

      <ContactMe />

      <ScrollToTopButton />
    </Layout>
  );
};

export default Home;
