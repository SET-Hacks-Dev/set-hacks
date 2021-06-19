import {
  ABOUT_1,
  ABOUT_2,
  CONTACT,
  FAQ,
  FOOTER,
  NAVIGATION,
  SPONSORS,
  STATS,
} from "../constants";
import { Anchor, Footer, Navbar, Spacer, Stats } from "../components";
import { Faq, Hero, MailingList, Section } from "../sections";

const Index = () => {
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
      <Footer {...FOOTER} />
    </>
  );
};

export default Index;
