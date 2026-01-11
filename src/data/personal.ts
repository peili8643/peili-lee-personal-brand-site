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
  name: "Your Name",
  title: "Your Title",
  bio: "A brief introduction about yourself. This will appear on the home and about pages.",
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      platform: "twitter",
      url: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      platform: "email",
      url: "mailto:you@example.com",
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
