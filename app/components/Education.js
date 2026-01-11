export default function Education({ education }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Educational History
      </h2>
      <div className="border-l-2 border-sky-300 pl-4 dark:border-zinc-700">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          {education.institution}
        </h3>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          {education.degree}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {education.period}
        </p>
      </div>
    </section>
  );
}
