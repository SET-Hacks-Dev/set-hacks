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
import { Faq, Hero, MailingList, Section, Track, Stories } from "../sections";

const Index = () => {
  return (
    <>
      <Navbar {...NAVIGATION} />
      <Hero />
      <Tilted>
        <Anchor i="about" />
        <Section {...ABOUT_1} />
        <Section {...ABOUT_2} />
        <Stats {...STATS} />
        <Anchor i="track" />
        <Track {...TRACK} />
        <Spacer sz={14} />
        <Anchor i="t-hist" />
        <Spacer sz={8} />
        <Terminal {...EXPLORE_TERMINAL} />
        <Spacer sz={14} />
        <Stories {...STORIES} />
        <Spacer sz={14} />
        <Anchor i="faq" />
        <Faq {...FAQ} />
        <Spacer sz={4} />
        <Anchor i="sponsors" />
        <Section {...SPONSORS} />
        <Anchor i="contact" />
        <Spacer sz={14} />
        <Section {...CONTACT} />
      </Tilted>
      <Footer {...FOOTER} />
    </>
  );
};

export default Index;
