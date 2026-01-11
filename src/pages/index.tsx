import Link from "next/link";
import { personalInfo } from "@/data/personal";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          {personalInfo.name}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6">
          {personalInfo.title}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          {personalInfo.bio}
        </p>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Link
            href="/about"
            className="group p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <h2 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              About
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn more about me
            </p>
          </Link>

          <Link
            href="/resume"
            className="group p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <h2 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Resume
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Experience & skills
            </p>
          </Link>

          <Link
            href="/projects"
            className="group p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <h2 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Projects
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Work & interests
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
