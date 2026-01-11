export type ProjectCategory = "project" | "hobby" | "activity";

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  image?: string;
  link?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Project Name",
    description: "A brief description of the project and what it does. Highlight key features or technologies used.",
    category: "project",
    link: "https://github.com/yourusername/project",
    tags: ["React", "TypeScript", "API"],
  },
  {
    title: "Another Project",
    description: "Description of another project you've worked on.",
    category: "project",
    link: "https://example.com",
    tags: ["Python", "Machine Learning"],
  },
];

export const hobbies: Project[] = [
  {
    title: "Hobby Name",
    description: "Description of your hobby and why you enjoy it.",
    category: "hobby",
    tags: ["Creative", "Relaxing"],
  },
  {
    title: "Another Hobby",
    description: "Description of another hobby or interest.",
    category: "hobby",
  },
];

export const activities: Project[] = [
  {
    title: "Activity Name",
    description: "Description of an activity you enjoy or participate in regularly.",
    category: "activity",
    tags: ["Outdoor", "Social"],
  },
  {
    title: "Another Activity",
    description: "Description of another favorite activity.",
    category: "activity",
  },
];

export const allItems = [...projects, ...hobbies, ...activities];

export const categoryLabels: Record<ProjectCategory, string> = {
  project: "Projects",
  hobby: "Hobbies",
  activity: "Activities",
};
