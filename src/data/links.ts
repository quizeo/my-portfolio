import facebook from "../assets/footer/facebook.png";
import linkedin from "../assets/footer/linkedin.png";
import github from "../assets/footer/github.png";
import email from "../assets/footer/email.png";

export const links = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "About Me", path: "/about" },
  { id: 3, text: "Projects", path: "/projects" },
  { id: 4, text: "Let's Connect", path: "/contact" },
];

export const socialMediaLinks = [
  {
    id: 1,
    text: "facebook",
    path: "https://www.facebook.com/johnlloyde.quizeo123",
    icon: facebook,
  },
  {
    id: 2,
    text: "LinkedIn",
    path: "https://www.linkedin.com/in/john-lloyd-quizeo-a316852b3/",
    icon: linkedin,
  },
  { id: 3, text: "Github", path: "https://github.com/quizeo", icon: github },
];

export const socialMessage = [
  {
    id: 1,
    text: "facebook",
    path: "https://www.facebook.com/johnlloyde.quizeo123",
    name: "John Lloyd Quizeo",
    message: "Message via Facebook",
    icon: facebook,
  },
  {
    id: 2,
    text: "LinkedIn",
    path: "https://www.linkedin.com/in/john-lloyd-quizeo-a316852b3/",
    name: "John Lloyd Quizeo",
    message: "Connect on LinkedIn",
    icon: linkedin,
  },
  {
    id: 3,
    text: "Email",
    path: "mailto:johnkiezquizeo@gmail.com",
    name: "johnkiezquizeo@gmail.com",
    message: "Contact via Email",
    icon: email,
  },
];
