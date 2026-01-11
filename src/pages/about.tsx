import { personalInfo } from "@/data/personal";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {personalInfo.bio}
        </p>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Add your background story here. Talk about where you&apos;re from, your
              journey, and what drives you. This section helps visitors connect
              with you on a personal level.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Describe your professional focus and expertise here. What problems
              do you solve? What are you passionate about in your work?
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Beyond Work</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Share a bit about your life outside of work. What do you enjoy
              doing in your free time? This helps visitors see you as a
              well-rounded person.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
