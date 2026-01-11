export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  socialLinks: SocialLink[];
}

export const personalInfo: PersonalInfo = {
  name: "Peili Lee",
  title: "Product Strategy & Growth Architect",
  bio: "Hi - Here to share the different things I have my hands in!",
  socialLinks: [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/peili-lee/",
      label: "LinkedIn",
    },
    {
      platform: "email",
      url: "mailto:peili123@gmail.com",
      label: "Email",
    },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
];
