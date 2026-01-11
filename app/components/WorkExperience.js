export default function WorkExperience({ workHistory }) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Working History
      </h2>
      <div className="space-y-6">
        {workHistory.map((job, index) => (
          <div key={index} className="border-l-2 border-sky-300 pl-4 dark:border-sky-300">
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {job.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {job.company}
                </span>
                <span className="text-zinc-500 dark:text-zinc-500">•</span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  {job.period}
                </span>
              </div>
            </div>
            
            <p className="mb-3 text-sm italic text-zinc-600 dark:text-zinc-400">
              {job.description}
            </p>
            
            {job.project && (
              <p className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Project: {job.project}
              </p>
            )}
            
            {job.projects && (
              <div className="mb-3 space-y-3">
                {job.projects.map((project, idx) => (
                  <div key={idx}>
                    <p className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Project: {project.name}
                    </p>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                      {project.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx}>{resp}</li>
                      ))}
                    </ul>
                    <div className="mt-2">
                      <p className="mb-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                        Technologies:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="rounded bg-sky-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-sky-800 dark:text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {job.responsibilities && (
              <ul className="mb-3 ml-4 list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {job.responsibilities.map((resp, respIdx) => (
                  <li key={respIdx}>{resp}</li>
                ))}
              </ul>
            )}
            
            {job.technologies && (
              <div>
                <p className="mb-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-1">
                  {job.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-sky-700 dark:bg-sky-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
