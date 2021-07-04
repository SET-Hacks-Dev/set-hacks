import {
  ABOUT_1,
  ABOUT_2,
  CONTACT,
  EXPLORE_TERMINAL,
  FAQ,
  FOOTER,
  NAVIGATION,
  SPONSORS,
  STATS,
  STORIES,
  TRACK,
  PAST_SPONSORS,
} from "../constants";
import {
  Anchor,
  Footer,
  Navbar,
  Spacer,
  Stats,
  Terminal,
  Tilted,
} from "../components";
import { Faq, Hero, Section, Track, Stories, PastSponsors } from "../sections";

const Index = () => {
  return (
    <>
      <Navbar {...NAVIGATION} />
      <Hero />
      <Tilted>
        <Anchor i="about" />
        <Section {...ABOUT_1} />
        <Stats {...STATS} />
        <Section {...ABOUT_2} />
        <Anchor i="track" />
        <Spacer sz={14} />
        <Track {...TRACK} />
        <Spacer sz={14} />
        <Anchor i="t-hist" />
        <Spacer sz={8} />
        <Terminal {...EXPLORE_TERMINAL} />
        <Spacer sz={14} />
        <Anchor i="stories" />
        <Stories {...STORIES} />
        <Spacer sz={4} />
        <Anchor i="sponsors" />
        <Section {...SPONSORS} />
        <Spacer sz={4} />
        <PastSponsors {...PAST_SPONSORS} />
        <Spacer sz={14} />
        <Anchor i="faq" />
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
