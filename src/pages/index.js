// import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import ContactMe from '../components/ContactMe/ContactMe';
import { Layout } from '../layout/Layout';
import { Container, Section } from '../styles/GlobalComponents';
import { useRouter } from 'next/router';
import ScrollToTopButton from '../components/TopButton/Top';

const Home = () => {
  const router = useRouter();
  // const onClickLearnMore = () => router.push('/#about');
  const onClickLearnMore = () => router.push('/#contact');

  return (
    <Layout>
      <Container>
        <Section grid>
          <Hero handleClick={onClickLearnMore} />
          <BgAnimation />
        </Section>
      </Container>
      <Projects />
      <Technologies />
      <Timeline />
      <ContactMe />
      {/* <Acomplishments /> */}
      <ScrollToTopButton />
    </Layout>
  );
};

export default Home;
