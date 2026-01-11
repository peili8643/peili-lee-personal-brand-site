import { useState } from "react";
import {
  projects,
  hobbies,
  activities,
  categoryLabels,
  ProjectCategory,
} from "@/data/projects";

type FilterCategory = ProjectCategory | "all";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const allItems = [...projects, ...hobbies, ...activities];

  const filteredItems =
    activeFilter === "all"
      ? allItems
      : allItems.filter((item) => item.category === activeFilter);

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "All" },
    { key: "project", label: categoryLabels.project },
    { key: "hobby", label: categoryLabels.hobby },
    { key: "activity", label: categoryLabels.activity },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">
        Projects & Interests
      </h1>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === filter.key
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Items grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                {categoryLabels[item.category]}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {item.description}
            </p>
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
