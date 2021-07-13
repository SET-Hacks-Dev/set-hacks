import {
  ArrowRight,
  Calendar,
  Download,
  Facebook,
  Instagram,
  MapPin,
} from "react-feather";
import { Link, Text, TextChildren } from "../components";

import Star1 from "../public/img/stars/t1.png";
import Star2 from "../public/img/stars/t2.png";
import Star3 from "../public/img/stars/t3.png";
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
    content: "~the future.~",
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
  heading: "👉 You don’t need to be a coding whiz to be ~a hacker.~",
  text: "SET.Hacks() is a beginner-focused, high school hackathon that empowers every student to start coding the future. With six guided learning tracks, 40+ mentors and university panels, we want to help kickstart students' journeys into tech.",
  post: (
    <TextChildren>
      Over three days of pre-hackathon workshops and 48 hours of hacking, we'll
      equip you with everything you need on your mission. Regardless of your
      experience or background, we want to see your ideas and help you bring
      them to life!
    </TextChildren>
  ),
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
  heading: "🚀 You can build solutions for the ~biggest problems of tomorrow.~",
  text: "The future is in your hands, and the possibilities are endless. From quirky apps to complex algorithms, we want you to build something impactful for years to come. Challenge prompts come out the day of the hackathon, where you’ll get the chance to work on a problem faced by someone from the future. ",
  post: (
    <TextChildren>
      We can’t wait to see what exciting new solutions you come up with!
    </TextChildren>
  ),
  image: "/img/section-graphic/spaceship.png",
  reverse: true,
  className: "p-5",
  dark: true,
};

export const STORIES = {
  heading: "📚 Join ~our community~",
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
  heading: "💫 Explore ~hacking weekend~",
  commands: [
    {
      name: "ls",
      value: `./build
      ./engage
      ./listen
      ./fun
      `,
    },
    {
      name: "./fun",
      value:
        "Tired and need a break from hacking? 😴 Join us in the evenings of August 13-14 for fun activities including Minecraft, Drawphone, Midnight Ramen and many more! You won’t regret it - new memories and friendships await :)",
    },
    {
      name: "./listen",
      value:
        "Learn how to jumpstart your career in tech through exclusive fireside chats with our special guest lineup! 👀 Ask your burning questions to Ivy league students, hear university students’ biggest high school regrets, and meet industry professionals from your dream companies.",
    },
    {
      name: "./engage",
      value:
        "We know meeting people virtually can be intimidating, but we’ve got you covered! From networking 🔗 to resume roasts 🔥 to beginner mock interviews sessions, you’ll have plenty of chances to interact with other students and professionals in the field.",
    },
    {
      name: "./build",
      value:
        "Ready to code the future? 🚀 Over the weekend, you’ll work with a team to take on the mission of building a cool project that tackles the challenges of tomorrow. Don’t be afraid to dream big and try new things - if you get stuck, you’ll have your teammates, your designated student guide, and a pool of specialized mentors to support you. 💜",
    },
  ],
  link: {
    label: "View full schedule →",
    href: "https://www.notion.so/sethacks/2021-Schedule-074c84aa1a184a84ba2b291311363540",
  },
};

export const TRACK = {
  heading: "🚊 Get ~on track~ to make your ideas a reality.",
  subheading: "Pre-hackathon | August 9-11",
  text: [
    "Our six learning tracks are customized to help you understand important topics in tech and learn how to apply them in solving complex, interdisciplinary problems. Prior to hacking weekend, you’ll have the chance to take a deep dive into one track of your choosing.",
    "Each learning track is composed of an hour-long workshop each day from Monday to Wednesday, followed by a take-home challenge after the workshop.",
  ],
  tracks: [
    {
      id: 0,
      title: "Python",
      icon: "img/tracks/python-track.png",
      info: "We start off with the basics of Python, from syntax and data types to variables, loops, and functions. We then dive into more complex operations with useful applications, such as analyzing a dataset using Python libraries. Ultimately, we want to help you harness the power of Python to code up anything you can dream of.",
    },
    {
      id: 1,
      title: "Web Dev",
      icon: "img/tracks/web-track.png",
      info: "Ever wondered how your favourite websites are built? Our web development track introduces the fundamentals of HTML, CSS, and JavaScript, then combines them together to create your first website. As a bonus, we’ll teach you how to incorporate more sophisticated and widely-used frameworks such as ReactJS, Bootstrap, and Node.js. We’ll equip you with the same tools used by companies like Facebook and Netflix so that you can start building beautiful, dynamic websites.",
    },
    {
      id: 2,
      title: "Mobile Dev",
      icon: "img/tracks/app-track.png",
      info: "If you’ve ever thought to yourself “why isn’t there an app for this?”, this is your chance to change that! In this track, we’ll get you started with the basics of mobile development and walk you through building your first iOS and Android app. Get ready for some very hands-on learning using Flutter, a popular cross-platform framework that powers apps such as Alibaba and eBay.",
    },
    {
      id: 3,
      title: "Machine Learning",
      icon: "img/tracks/ml-track.png",
      info: "Our machine learning (ML) track skips the intimidating mumbo-jumbo and breaks down the fundamentals. We’ll explain the different types of ML, how neural networks work, and their various architectures. Next, we’ll present a comprehensive tutorial of Tensorflow and Keras that lets you create and apply diverse machine learning models to real-life datasets and problems.",
    },
    {
      id: 4,
      title: "Cloud Computing & APIs",
      icon: "img/tracks/cloud-track.png",
      info: "In this track, we combine two powerful technologies and teach you how to leverage them. We begin by briefly introducing how API frameworks and cloud computing architectures work, followed by an in-depth tutorial of how to use Microsoft Azure for cloud computing and storage. We’ll end off by showing you how to use popular APIs in your code, as well as create your very own REST API.",
    },
    {
      id: 5,
      title: "Design",
      icon: "img/tracks/design-track.png",
      info: "We’ve all seen ugly apps before, but behind every successful product is a design that’s memorable and intuitive. Our workshops will cover the design principles behind product, graphic and UI/UX design that make apps like Instagram and TikTok stylish and easy to use. Finally, we’ll teach you how to use Figma, one of the world’s leading design tools. By the end of this track, you’ll be able to design your own apps from scratch!",
    },
  ],
  dark: true,
};

export const FAQ = {
  heading: "💡 Frequently asked ~questions~",
  left_bar: {
    heading: "",
    questions: [
      {
        q: "What is a hackathon?",
        a: "A hackathon is an innovation marathon where “hackers” work together to design and build projects. Throughout the event, you’ll also have a chance to meet other students, attend workshops, network with mentors and sponsors, and most importantly - learn new skills! Whether you’re a beginner or a seasoned hacker, SET.Hacks() is a great way to share your ideas, advance your career, and maybe even win some prizes 👀",
      },
      {
        q: "Who is eligible to attend?",
        a: "SET.Hacks() 2021 is open to all high school students from anywhere in the world! High school seniors who graduated in June 2021 are also welcome. We especially encourage beginners to join us!",
      },
      {
        q: "What if I’ve never coded before?",
        a: "Don’t worry, we’ll teach you! SET.Hacks() is designed to guide beginners through the whole process of building a project from start to finish. Even if you have no technical background, we’ll help you create something you can be proud of.",
      },
      {
        q: "Can I work on a project from before the hackathon?",
        a: "Since we’ll be providing custom challenge prompts and tracks, we strongly encourage you to explore new skills and ideas. We will not be accepting any projects started before the first day of workshops on August 9.",
      },
    ],
  },
  right_bar: {
    heading: "",
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
        q: "When can I sign up?",
        a: "Hacker applications will be released very soon! Keep an eye out on our social media or sign up for our mailing list to be notified first.",
      },
      {
        q: "I have another question!",
        a: (
          <>
            Message us at{" "}
            <Link href="mailto:hello@sethacks.ca">hello@sethacks.ca</Link> and
            we&apos;ll get back to you with an answer!
          </>
        ),
      },
    ],
  },
};

export const SPONSORS = {
  heading: "🙌 Support ~our mission~",
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
      Send us an email at{" "}
      <Link href="mailto:hello@sethacks.ca">hello@sethacks.ca</Link>
    </TextChildren>
  ),
};

export const PAST_SPONSORS = {
  header: "2020 Sponsors & Partners",
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
      count: 6,
      image: Star1,
      opacity: 0.1,
      strength: 400,
    },
    {
      count: 7,
      image: Star2,
      opacity: 0.2,
      strength: 200,
    },
    {
      count: 8,
      image: Star3,
      opacity: 0.6,
      strength: 50,
    },
  ],
};
