import {
  
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Development",
    icon: web,
  },
  {
    title: "Search Engine Optimization",
    icon: mobile,
  },
  {
    title: "Design",
    icon: backend,
  },
  {
    title: "Sales",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Content Writer",
    company_name: "Inovi-Solution",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGWpqoPQUDsrMJ_FJKUZNbGUt95_EWIYGAZiQl6M-_NAqv9mxJY1v702VPJ1-HPM4LKE&usqp=CAU",
    iconBg: "#383E56",
    date: "May 2022 - June 2022",
    points: [
      "Shaped SEO-rich Website Content.",
      "Structured blog & articles and served as Copywrite.",
      "Addressed & edited books as ghostwriter.",
      "Banners / Posters Creator.",
    ],
  },
  {
    title: "Web-Developer",
    company_name: "Inovi-Solution",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGWpqoPQUDsrMJ_FJKUZNbGUt95_EWIYGAZiQl6M-_NAqv9mxJY1v702VPJ1-HPM4LKE&usqp=CAU",
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Sep 2022",
    points: [
      "Custom Frontend Development.",
      "CMS - Development",
      "LINUX operator.",
      "WordPress Developer.",
      "MERN Stack Developer.",
      "Core Angular Js.",
      "Wix & Shopify (Custom Liquids)",
    ],
  },
  {
    title: "SEO Analyst / SMM",
    company_name: "Freelance - Upwork",
    icon: "https://w7.pngwing.com/pngs/80/704/png-transparent-upwork-hd-logo-thumbnail.png",
    iconBg: "#383E56",
    date: "Oct 2022",
    points: [
      "SEO Analysis.",
      "SEO Audit.",
      "Social Media Management.",
      "Keywords Ranking.",
      "Product Hunting.",
      "Ads Management.",
      "On-Site SEO.",
    ],
  },
  {
    title: "Team Lead Management",
    company_name: "Inovi-Solution",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGWpqoPQUDsrMJ_FJKUZNbGUt95_EWIYGAZiQl6M-_NAqv9mxJY1v702VPJ1-HPM4LKE&usqp=CAU",
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Apr 2023",
    points: [
      "Cold Calling Skills.",
      "UpSales Skills.",
      "Upwork Bidding.",
      "Business Development.",
      "Leads Generation.",
      "E-mail Marketing.",
      "Team Management.",
      "CRM Management.",
    ],
  },
  {
    title: "Software Engineer/Application Developer",
    company_name: "Axon-Solution",
    icon: "data:image/jpeg;base64,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",
    iconBg: "#383E56",
    date: "Aug 2023 - june 2024",
    points: [
      "Flutter Development.",
      "Dart Programming Language.",
      "Web Api Development.",
      ".Net6 Core.",
      "Asp.Net.",
      "Razor Pages.",
      "Widget-based Development.",
      "UI/UX Design.",
      "State Management.",
      "Debugging and Testing.",
      "Continuous Learning.",
      "Problem Solving.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "ZRG International",
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQG067TNukPR_Q/company-logo_200_200/company-logo_200_200/0/1716265612346/zrg_international_pvt_ltd_logo?e=2147483647&v=beta&t=2pJaBChTav5Mqn-Tq1P2rZUI81iXUj2n33kCOpBOoM4",
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Nov 2024",
    points: [
      ".NET framework.",
      "Master Pages.",
      "Web Api Management.",
      "Vb.Net.",
      "Backend Functions.",
      "WebForms.",
      "SQL Database Management.",
      "Banking Softwares.",
      "ADO.NET.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zentry",
    description:
      "I developed a Zentry Clone using React.js, replicating the core functionalities and design of the original Zentry platform. This project showcases my expertise in frontend development, UI/UX design, and API integration while demonstrating how real-life activities can be transformed into an engaging gamified experience.",
    tags: [
      {
        name: "Mern",
        color: "pink-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Puttpursuit",
    description:
      "The website puttpursuit.com is experiencing moderate SEO growth, with a positive trend in average rankings and some keywords gaining positions. However, some keywords have also dropped in ranking, requiring further optimization efforts. The goal should be to increase the number of keywords in the top 10 and top 3 positions while improving the overall SEO strategy.",
    tags: [
      {
        name: "SEO",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Ecoorigin",
    description:
      "The website ecoorigin.co.uk is showing strong SEO growth, with many keywords improving in ranking. However, there are no keywords in the top 10 or top 3, which means further optimization is needed to push rankings into more competitive positions. The focus should be on enhancing on-page SEO, backlinks, and content strategy to achieve better search visibility.",
    tags: [
      {
        name: "SEO",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit,
    // source_code_link: "https://github.com/",
  },
];

// constants.js



export { services, technologies, experiences, testimonials, projects };
