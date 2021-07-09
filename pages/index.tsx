import {
  ABOUT_1,
  ABOUT_2,
  CONTACT,
  EXPLORE_TERMINAL,
  FAQ,
  FOOTER,
  NAVIGATION,
  PAST_SPONSORS,
  SPONSORS,
  STARS,
  STATS,
  STORIES,
  TRACK,
} from "../constants";
import {
  About1,
  About2,
  Faq,
  Hero,
  PastSponsors,
  Section,
  Stars,
  Stories,
  Track,
} from "../sections";
import {
  Anchor,
  Footer,
  Navbar,
  Spacer,
  Stats,
  Terminal,
  Tilted,
} from "../components";

const Index = () => {
  return (
    <>
      <Navbar {...NAVIGATION} />
      <Hero />
      <Tilted>
        <Stars {...STARS}>
          <Anchor i="about" />
          <About1 {...ABOUT_1} />
          <Stats {...STATS} />
          <About2 {...ABOUT_2} />
          <Anchor i="track" />
          <Spacer sz={14} />
          <Track {...TRACK} />
          <Spacer sz={14} />
        </Stars>
        <Anchor i="t-hist" />
        <Spacer sz={8} />
        <Terminal {...EXPLORE_TERMINAL} />
        <Anchor i="stories" />
        <Spacer sz={14} />
        <Stories {...STORIES} />
        <Anchor i="sponsors" />
        <Spacer sz={14} />
        <Section {...SPONSORS} />
        <Spacer sz={8} />
        <PastSponsors {...PAST_SPONSORS} />
        <Spacer sz={8} />
        <Anchor i="faq" />
        <Spacer sz={14} />
        <Faq {...FAQ} />
        <Anchor i="contact" />
        <Spacer sz={14} />
        <Section {...CONTACT} />
      </Tilted>
      <Footer {...FOOTER} />
    </>
  );
};

export default Index;
