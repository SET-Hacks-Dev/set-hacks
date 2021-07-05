import {
  ArrowRight,
  Calendar,
  Download,
  Facebook,
  Instagram,
  MapPin,
} from "react-feather";
import { Link, TextChildren } from "../components";

import Star1 from "../public/img/t1.png";
import Star2 from "../public/img/t2.png";
import Star3 from "../public/img/t3.png";
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
    { label: "Stories", href: "#stories" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "FAQ", href: "#faq" },
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
  image: "/img/section-graphic/rocket.png",
};

export const ABOUT_1 = {
  heading: "👉 Kickstart your big idea at *SET.Hacks()*",
  text: "A virtual, *beginner-friendly* hackathon that brings high school students together to build future-ready solutions over 48 hours. Started by the SET Foundation in 2020, our mission is to pave the path for students who want to explore the tech space. Regardless of your experience or background, we want to see your ideas and help you bring them to life!",
  image: "/img/section-graphic/hexagon.png",
  link: {
    label: "View 2020 Devpost submissions →",
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
  image: "/img/section-graphic/spaceship.png",
  reverse: true,
  className: "p-5",
  dark: true,
};

export const STORIES = {
  heading: "📚 Join our community",
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
      headshot: "eshwara-2.png",
    },
    {
      name: "Jerry Cheng",
      school: "University of Waterloo",
      project: "Espere",
      link: "https://devpost.com/software/espere",
      quote:
        "SET.Hacks() was a really fun and rewarding experience! I got to learn new skills and use different tools while building my project, as well as participating in the many workshops they offer.",
      // TODO - get an image for jerry
      headshot: "jerry.png",
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

export const EXPLORE_TERMINAL = {
  heading: "💫 Explore Your Experience",
  commands: [
    {
      name: "ls",
      value: `./entertainment
      ./interactive
      ./fireside-chats
      `,
    },
    {
      name: "./entertainment",
      value:
        "Feeling tired and need a break from hacking? Join us in the evenings of August 13-14 for some fun activities including Minecraft, Drawphone, Midnight Ramen and many more! Bond with friends, make new ones, and enjoy!",
    },
    {
      name: "./interactive",
      value:
        "We all know how hard it is to meet new friends and mentors virtually. In the afternoon of August 13-14 we have a series of events planned to help you meet students from your dream universities and careers! We will be hosting resume roasts, mock interviews and networking opportunities tailored just for you.",
    },
    {
      name: "./fireside-chats",
      value:
        "Learn through others’ past experiences and regrets! You will have the opportunity to ask burning questions at an Ivy league panel, high school regrets panel to help you avoid them and industry professionals panel from your dream companies.",
    },
  ],
  link: { label: "View full schedule →", href: "#" },
};

export const TRACK = {
  heading: "🚊 Get on Track",
  text: [
    "Pre-hackathon | August 9-11",
    "Our six custom learning tracks, workshops and challenges help you truly understand major topics in tech, and prepare you to apply them to solve complex, interdisciplinary problems in the future.",
    "Each learning track has three, hour-long workshops, and one post-workshop do-it-yourself coding challenge.",
  ],
  tracks: [
    {
      id: 0,
      title: "Python",
      icon: "img/PythonIcon.svg",
      info: "We start off with the basics of Python, from syntax and data types, to variables, loops, and functions. We then dive into more complex operations with useful applications, such as data analysis using python libraries - ultimately enabling you to harness the power of Python to turn your ideas from imagination to reality.",
    },
    {
      id: 1,
      title: "Web Development",
      icon: "img/LaptopIcon.svg",
      info: "Our web development track introduces the fundamentals of HTML, CSS, and JavaScript, then combines them together to create a functional, interactive website. We then teach you how to incorporate more sophisticated frameworks such as React, Bootstrap, and Node.js to help you create dynamic, mobile-friendly websites with vastly expanded capabilities.",
    },
    {
      id: 2,
      title: "App Development",
      icon: "img/GearIcon.svg",
      info: "We will walk you through building iOS and Android apps using Flutter, a cross-platform app design tool. By the end of this track, you will go from beginner to having coded your first basic app.",
    },
    {
      id: 3,
      title: "Machine Learning",
      icon: "img/GearIcon.svg",
      info: "Our machine learning (ML) track breaks down the fundamentals of ML, covering the different types of ML, how neural networks really work, and their various architectures. Next, we present a comprehensive tutorial of Tensorflow and Keras that lets you create and apply diverse machine learning models to real-life datasets and problems.",
    },
    {
      id: 4,
      title: "Cloud Computing & APIs",
      icon: "img/GearIcon.svg",
      info: "We begin by briefly introducing how API frameworks and cloud computing architectures work, followed by an in-depth tutorial of how to use Microsoft Azure for cloud computing and storage. We finish off by teaching you how to use and apply popular APIs, as well as create your very own API.",
    },
    {
      id: 5,
      title: "Design",
      icon: "img/GearIcon.svg",
      info: "Making your applications clean and elegant is just as important as making them functional. Our design workshop teaches you all you need to know about designing appealing user interfaces that are captivating and strategies to create an engaging user experience.",
    },
  ],
  dark: true,
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
  image: "/img/section-graphic/sponsor.png",
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

export const PAST_SPONSORS = {
  header: "2020 Sponsors",
  gold: {
    label: "Gold",
    size: {
      height: "12vh",
      maxHeight: "85px",
    },
    sponsors: [
      {
        name: "Wolfram Language",
        link: "https://www.wolfram.com/language/",
        image: "img/sponsors/past/Wolfram.png",
      },
      {
        name: "EchoAr",
        link: "https://www.echoar.xyz/",
        image: "img/sponsors/past/echoAR.png",
      },
      {
        name: "1Password.com",
        link: "https://1password.com/",
        image: "img/sponsors/past/1Password.png",
      },
      {
        name: "Balsamiq",
        link: "https://balsamiq.com/",
        image: "img/sponsors/past/balsamiq.png",
      },
      {
        name: "Repl.It",
        link: "https://repl.it/",
        image: "img/sponsors/past/Repl.it.png",
      },
      {
        name: "BugSee",
        link: "https://www.bugsee.com/",
        image: "img/sponsors/past/bugsee.png",
      },
    ],
  },
  silver: {
    label: "Silver",
    size: {
      height: "10vh",
      maxHeight: "65px",
    },
    sponsors: [
      {
        name: "Linode",
        link: "https://www.linode.com/",
        image: "img/sponsors/past/Linode.png",
      },
      {
        name: "ToHacks 2020",
        link: "https://www.tohacks.ca/",
        image: "img/sponsors/past/tohacks.png",
      },
    ],
  },
  bronze: {
    label: "Bronze",
    size: {
      height: "5.5vh",
      maxHeight: "35px",
    },
    sponsors: [
      {
        name: "Digital Ocean",
        link: "https://www.digitalocean.com/",
        image: "img/sponsors/past/digitalocean.png",
      },
      {
        name: "EdgePrim",
        link: "https://edgeprim.com/",
        image: "img/sponsors/past/edgeprim.png",
      },
    ],
  },
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

export const STARS = {
  id: "bg-stars",
  tiers: [
    {
      count: 4,
      image: Star1,
      opacity: 0.5,
      strength: 300,
    },
    {
      count: 5,
      image: Star2,
      opacity: 0.4,
      strength: 200,
    },
    {
      count: 6,
      image: Star3,
      opacity: 0.3,
      strength: 100,
    }
  ]
}
