export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  highlights?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Accomplishment {
  title: string;
  date: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "Company Name",
    role: "Your Role",
    location: "City, State",
    startDate: "Jan 2023",
    endDate: "Present",
    bullets: [
      "Accomplishment or responsibility #1",
      "Accomplishment or responsibility #2",
      "Accomplishment or responsibility #3",
    ],
  },
  {
    company: "Previous Company",
    role: "Previous Role",
    location: "City, State",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    bullets: [
      "Accomplishment or responsibility #1",
      "Accomplishment or responsibility #2",
    ],
  },
];

export const education: Education[] = [
  {
    school: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2017",
    endDate: "2021",
    gpa: "3.8",
    highlights: ["Relevant coursework", "Dean's List"],
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS"],
  },
];

export const accomplishments: Accomplishment[] = [
  {
    title: "Award or Accomplishment",
    date: "2023",
    description: "Brief description of the accomplishment and its significance.",
  },
  {
    title: "Another Achievement",
    date: "2022",
    description: "Brief description of another notable achievement.",
  },
];
