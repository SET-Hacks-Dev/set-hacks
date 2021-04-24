import { Hero, Section, MailingList, Faq } from "../sections";
import {
  NAVIGATION,
  ABOUT_1,
  STATS,
  ABOUT_2,
  FAQ,
  SPONSORS,
  CONTACT,
} from "../constants";
import { Navbar, Anchor, Stats, Spacer } from "../components";

const Base = () => {
  return (
    <>
      <Navbar {...NAVIGATION} />
      <Hero />
      <Anchor i="about" />
      <Section {...ABOUT_1} />
      <Stats {...STATS} />
      <Section {...ABOUT_2} post={<MailingList />} />
      <Anchor i="faq" />
      <Faq {...FAQ} />
      <Anchor i="sponsors" />
      <Section {...SPONSORS} />
      <Anchor i="contact" />
      <Spacer sz={14} />
      <Section {...CONTACT} />
      <Spacer sz={22.5} />
    </>
  );
};

export default Base;
