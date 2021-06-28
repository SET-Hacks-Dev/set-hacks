import {
  ArrowRight,
  Calendar,
  Download,
  Facebook,
  Instagram,
  MapPin,
} from "react-feather";
import { Link, TextChildren } from "../components";

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
    { icon: Calendar, label: "August 13-15", accent: true },
  ],
  socialMedia: [
    { icon: Facebook, url: "https://www.facebook.com/pg/setnational/posts/" },
    { icon: Instagram, url: "https://www.instagram.com/set.ottawa/" },
    { icon: Devpost, url: "https://set-hacks.devpost.com" },
  ],
  image: "/img/rocket.png",
};

export const ABOUT_1 = {
  heading: "👉 Kickstart your big idea at *SET.Hacks()*",
  text: "A virtual, *beginner-friendly* hackathon that brings high school students together to build future-ready solutions over 48 hours. Started by the SET Foundation in 2020, our mission is to pave the path for students who want to explore the tech space. Regardless of your experience or background, we want to see your ideas and help you bring them to life!",
  link: {
    label: "View 2020 Devpost submissions",
    href: "https://set-hacks.devpost.com/",
  },
  dark: true,
};

export const STATS = {
  stats: [
    { label: "hackers", value: "250+" },
    { label: "first-time hackers", value: "70%" },
    { label: "projects", value: "50+" },
    { label: "in prizes", value: "$16k" },
  ],
  caption: "Statistics from SET.Hacks() 2020",
};

export const ABOUT_2 = {
  heading: "🚀 Code the Future",
  text: "We’ve all wondered what the future will look like. This is your chance to build it through code. Stay tuned as we release the details of this year’s challenge!",
  image: "/img/graphic2.png",
  reverse: true,
  className: "p-5",
  dark: true,
};

export const STORIES = {
  heading: "🎤 Hear from 2020 hackers",
  stories: [
    {
      name: "Sharon Peng",
      school: "Western University",
      project: "Style Sustainably",
      link: "https://devpost.com/software/style-sustainably",
      quote:
        "SET.Hacks() was my very first hackathon! Being in high school and having little to no programming experience, the hackathon was a great opportunity to learn and build my first simple project.  Although taking on a new challenge can be scary, I loved the encouraging and welcoming community that SET.Hacks() fostered.",
      headshot: "sharon.png",
    },
    {
      name: "Eshwara Chock",
      school: "Grade 12",
      project: "Supplant",
      link: "https://devpost.com/software/supplant",
      quote:
        "As my first hackathon experience, SET.Hacks() was amazing! In spite of being online, the SET team organized the hackathon exceptionally well and made it as easy as possible for my peers and I to compete as first time hackers. Overall, SET.Hacks() gave me the unique opportunity to explore a plethora of STEM opportunities and meet many new like-minded individuals.",
      headshot: "eshwara.png",
    },
    {
      name: "Jerry Cheng",
      school: "University of Waterloo",
      project: "Espere",
      link: "https://devpost.com/software/espere",
      quote:
        "SET.Hacks() was a really fun and rewarding experience! I got to learn new skills and use different tools while building my project, as well as participating in the many workshops they offer.",
      // TODO - get an image for jerry
      headshot: "placeholder.png",
    },
    {
      name: "Vansh Sethi",
      school: "Grade 11",
      project: "Supplant",
      link: "https://devpost.com/software/supplant",
      quote:
        "SET.Hacks() was an amazing experience to work with others and learn new technical skills. The addition of resources provided by the SET team allowed myself to work with technologies I hadn't used before. They gave great mentorship during the competition and helped with any issues I had during it. Thank you for the great experience.",
      headshot: "vansh.png",
    },
  ],
};

export const FAQ = {
  heading: "💡 Frequently Asked Questions",
  left_bar: {
    heading: "About",
    questions: [
      {
        q: "What is a hackathon?",
        a: "A hackathon is an innovation marathon where “hackers” work together to design and build projects. Throughout the event, you’ll also have a chance to meet other students, attend workshops, network with mentors and sponsors, and most importantly - learn new skills! Whether you’re a beginner or an expert, SET.Hacks() is a great way to share your ideas, get a head start on your career, and maybe even win some prizes 👀",
      },
      {
        q: "Who is eligible to attend?",
        a: "SET.Hacks() 2021 is open to all high school students from anywhere in the world! High school seniors graduated in June 2021 are also welcome. We especially encourage beginners to join us!",
      },
      {
        q: "What if I’ve never coded before?",
        a: "Don’t worry, we’ll teach you! SET.Hacks() is designed to guide beginners through the whole process of building a project from start to finish. Even if you have zero technical background, we’ll help you create something you can be proud of. Get ready to learn from mentors, workshops, and hands-on building - we promise that you'll walk away from this weekend having gained lots of new skills!",
      },
    ],
  },
  right_bar: {
    heading: "More",
    questions: [
      {
        q: "Do I need a team to participate?",
        a: "You can apply either as an individual or a team of up to 4 people. If you would like to a team but don’t have one yet, we’ll match you up with one before the event.",
      },
      {
        q: "How much does it cost?",
        a: "Nothing! If your application is accepted, the event is completely free to attend.",
      },
      {
        q: "Wait, I still have a question!",
        a: (
          <>
            Message us at{" "}
            <Link href="mailto:hello@sethacks.ca">hello@sethacks.ca</Link> and
            we&apos;ll get back to you!
          </>
        ),
      },
    ],
  },
};

export const SPONSORS = {
  heading: "🙌 Sponsors",
  text: "A big thank you to all the organizations who make this event possible! It’s people like you that inspire us to keep going. Stay tuned as we announce our 2021 sponsors!",
  post: (
    <TextChildren>
      <span style={{ fontWeight: 500 }}>Want to support student hackers?</span>{" "}
      Send us an email at{" "}
      <Link href="mailto:sponsor@sethacks.ca">sponsor@sethacks.ca</Link>.
    </TextChildren>
  ),
  maxWidth: "700px",
  button: {
    leftIcon: Download,
    label: "Sponsorship Package",
    isLink: true,
    target: "/doc/SET.Hacks()_Sponsorship_Package.pdf",
  },
  image: "/img/graphic3.png",
};
export const CONTACT = {
  heading: "📧 Still have a question?",
  className: "d-flex align-items-left flex-column",
  post: (
    <TextChildren>
      Send us an email{" "}
      <Link href="mailto:hello@sethacks.ca">hello@sethacks.ca</Link>
    </TextChildren>
  ),
};

export const FOOTER = {
  messages: [
    {
      title: "SET.Hacks() is an initiative by the SET Foundation.",
      text: "Learn more about the SET Foundation and our other events.",
      button: {
        label: "Learn more",
        rightIcon: ArrowRight,
        isLink: true,
        target: "https://setfoundation.ca",
      },
    },
  ],
  social: [
    { icon: Facebook, url: "https://www.facebook.com/pg/setnational/posts/" },
    { icon: Instagram, url: "https://www.instagram.com/set.ottawa/" },
  ],
  groups: [
    {
      heading: "Foundation",
      links: [
        { label: "Initiatives", href: "/#initiatives" },
        { label: "About Us", href: "/#about" },
        { label: "Our Team", href: "/#team" },
      ],
    },
    {
      heading: "Conference",
      links: [
        { label: "About SET", href: "/conference#about" },
        { label: "Why Attend", href: "/conference#why" },
        { label: "Schedule", href: "/conference#schedule" },
        { label: "Past", href: "/conference#past" },
      ],
    },
    {
      heading: "UP",
      links: [
        { label: "About SET.UP", href: "/up#about" },
        { label: "Speakers", href: "/up#speakers" },
        { label: "Schedule", href: "/up#schedule" },
        { label: "Register", href: "/up#register" },
      ],
    },
  ],
};
