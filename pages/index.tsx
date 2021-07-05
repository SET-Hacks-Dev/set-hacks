import {
  ABOUT_1,
  ABOUT_2,
  CONTACT,
  EXPLORE_TERMINAL,
  FAQ,
  FOOTER,
  NAVIGATION,
  SPONSORS,
  STARS,
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

import {
  Faq,
  Hero,
  Section,
  Stars,
  Track,
  Stories,
  About1,
  About2,
  PastSponsors,
} from "../sections";

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
        </Stars>
        <Spacer sz={14} />
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
