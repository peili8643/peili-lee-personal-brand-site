import { personalInfo } from "@/data/personal";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <SocialLinks links={personalInfo.socialLinks} />
        </div>
      </div>
    </footer>
  );
}
