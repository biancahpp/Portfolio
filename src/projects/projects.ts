import jobs from '../resources/jobs.png';
import countries from '../resources/countries.png';
import toDo from '../resources/to_do.png';
import ipTracker from '../resources/ip_tracker.png';
import { ProjectI } from '../interfaces/project';

export const projects: ProjectI[] = [
  {
    image: jobs,
    title: "Jobs",
    tags: [
      "react",
      "typescript",
      "HTML",
      "SASS",
      "API",
      "Redux",
      "Fullstack",
      "MongoDB",
      "NodeJS",
      "Responsive"    
    ],
    description: "Fully responsive, full-stack application that allows you to add jobs, see all available jobs, filter and delete jobs",
    demoUrl: "https://youthful-spence-b0dbe0.netlify.app",
    codeUrl: "https://github.com/biancahpp/JobClient"
  },
  {
    image: ipTracker,
    title: "Ip Tracker",
    tags: [
      "react",
      "javascript",
      "HTML",
      "SASS",
      "API",
      "Responsive"    
    ],
    description: "With this responsive application the user can enter an IP address that he wants to know the information of. It was made using Geo Ipify API.",
    demoUrl: "https://eloquent-engelbart-326571.netlify.app/",
    codeUrl: "https://github.com/biancahpp/IP-tracker"
  },
  {
    image: toDo,
    title: "Todo",
    tags: [
      "react",
      "javascript",
      "HTML",
      "CSS",
      "Responsive"    
    ],
    description: "With this responsive application the user can create a to-do list. Add a to-do to the list, mark/unmark the item as done, filter as all, completed, active and remove all of the completed items. The user can also toggle between light and dark mode",
    demoUrl: "https://affectionate-khorana-2a1719.netlify.app/",
    codeUrl: "https://github.com/biancahpp/todo"
  },
  {
    image: countries,
    title: "Countries",
    tags: [
      "react",
      "typescript",
      "HTML",
      "SASS",
      "Responsive",
      "API"   
    ],
    description: "With this responsive application the user can search for specific countries by filtering by name or by region. The user can also toggle between light and dark mode",
    demoUrl: "https://cranky-neumann-408af6.netlify.app/",
    codeUrl: "https://github.com/biancahpp/countriess"
  }
]