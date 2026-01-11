import {
  experiences,
  education,
  skills,
  accomplishments,
} from "@/data/resume";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Resume</h1>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-semibold text-lg">{exp.role}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {exp.company} &bull; {exp.location}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-semibold text-lg">{edu.school}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {edu.degree} in {edu.field}
                {edu.gpa && <span> &bull; GPA: {edu.gpa}</span>}
              </p>
              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
                  {edu.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="font-medium mb-2">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accomplishments */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
          Accomplishments
        </h2>
        <div className="space-y-6">
          {accomplishments.map((acc, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-semibold">{acc.title}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {acc.date}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {acc.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
