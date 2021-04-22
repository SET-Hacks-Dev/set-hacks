import { Calendar, Download, Facebook, Instagram, MapPin } from "react-feather";

import graphic1 from "../static/img/graphic1.png";
import graphic2 from "../static/img/graphic2.png";
import sponsorPackage from "../static/doc/SET.Hacks()_Sponsorship_Package.pdf";
import { theme } from "../theme";

const Devpost = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="0 0 64 64"
    width={size}
  >
    <path
      d="m48.7 4.8h-33.4l-15.3 27.2 15.7 27.2h33.1l15.2-27.2z"
      fill={theme.colors.brand[400]}
    />
    <path
      d="m32.2 16.9h-10.8v30.3h10.8c8.2 0 14.9-6.8 14.9-15.1s-6.6-15.2-14.9-15.2zm-.2 24.2h-4.5v-18.2h4.5c5 0 9.1 4.1 9.1 9.1s-4.1 9.1-9.1 9.1z"
      fill="#fff"
    />
  </svg>
);

export const NAVIGATION = {
  brand: "SET*.Hacks()*",
  links: [
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Contact", href: "#contact" },
  ],
  actionButton: { label: "Apply now", target: "" },
};

export const HOME = {
  lead: {
    actions: ["🎨 Design", 1000, "🌎 Change", 1000, "💻 Code", 1000],
    content: "the future.",
  },
  chips: [
    { icon: MapPin, label: "Virtual" },
    { icon: Calendar, label: "August 2021", accent: true },
  ],
  socialMedia: [
    { icon: Facebook, url: "https://www.facebook.com/pg/setnational/posts/" },
    { icon: Instagram, url: "https://www.instagram.com/setfoundation/" },
    { icon: Devpost, url: "https://set-hacks.devpost.com" },
  ],
  image: graphic1,
};

export const ABOUT_1 = {
  heading: "👉 What is *SET.Hacks()*?",
  text:
    "A fully-online, people-focused, 24-hour hackathon that brings people together to solve the world’s biggest problems. With the COVID-19 pandemic disrupting many internships, post-secondary studies, and many student-oriented STEM opportunities, our hackathon aims to give you the power to create even during a time of crisis.",
  link: { label: "View SET.Hacks() 2020", href: "https://sethacks.ca" },
};

export const STATS = {
  a: { label: "hours", value: "24" },
  b: { label: "first-time hackers", value: "70%" },
  c: { label: "hackers", value: "250+" },
  d: { label: "projects", value: "50+" },
};

export const ABOUT_2 = {
  heading: "🚀 Code the Future",
  text:
    "In 2016, the *United Nations* created the *Sustainable Development Goals (SDGs)* as a blueprint to create a sustainable future by 2030. Accomplishing the goals within the scope of a decade requires various political, economic, and social will. In addition, it also requires the insights and contributions of multiple individuals and companies in STEM. During this hackathon, we challenge you – as intelligent innovators and future leaders in STEM – to *create a product that will help nations accomplish one or more of the SDGs.*",
  image: graphic2,
};

export const FAQ = {
  heading: "💡 Frequently Asked Questions",
  left_bar: {
    heading: "About",
    questions: [
      {
        q: "What is a hackathon?",
        a:
          "A hackathon is an invention marathon where you can work with people around the globe to build a project!",
      },
      {
        q: "How much does it cost?",
        a: "SET Hacks is completely free for all participants.",
      },
      {
        q: "Is there a maximum team size?",
        a: "Yep! Keep your teams to a maximum of 4 people please!",
      },
      {
        q: "What if I don’t have a team?",
        a:
          "We will have some online team building sessions, so it doesn’t matter if you’ve not got a team!",
      },
      {
        q: "How do I work with my team?",
        a:
          "We strongly suggest that you make a group chat with your team members!",
      },
    ],
  },
  right_bar: {
    heading: "About",
    questions: [
      {
        q: "Do I need to know how to code?",
        a:
          "Nope! If you already know how to code, that's great! If not however, this is the perfect time to learn. We will be hosting beginner workshops for you, and we will have experienced mentors to help you with your hacks!",
      },
      {
        q: "Can I work on my hack before the hackathon?",
        a:
          "No. In interest of fairness, all hacks must be created at the event.",
      },
      {
        q: "Is there stuff to do besides hacking?",
        a:
          "We’ll have online workshops, games and other fun activities to keep you busy!",
      },
      {
        q: "What do I need for the hackathon?",
        a:
          "The only things you need are a laptop, solid internet connection, and any other materials you may require for creating your hack!",
      },
      {
        q: "Can I volunteer as a mentor or judge?",
        a:
          "Yes! SET Hacks wouldn't be possible without our volunteers. We will open mentors and judges sign ups soon, so keep an eye open for those!",
      },
    ],
  },
};

export const SPONSORS = {
  heading: "🙌 Sponsors",
  text:
    "Stay tuned as we announce our 2021 sponsors! Accomplishing the goals within the scope of a decade requires various political, economic, and social will. In addition, it also requires the insights and contributions of multiple individuals and companies in STEM.",
  post: (
    <>
      Want to join us on our journey? Send us an email at{" "}
      <a href="mailto:sponsor@sethacks.ca">sponsor@sethacks.ca</a>.
    </>
  ),
  maxWidth: "75%",
  button: {
    leftIcon: Download,
    label: "Sponsorship Package",
    target: sponsorPackage,
  },
};

export const CONTACT = {
  heading: "📧 Still have a question?",
  post: (
    <>
      Send us an email <a href="mailto:hello@sethacks.ca">hello@sethacks.ca</a>
    </>
  ),
};
