export default function Languages({ languages }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Languages
      </h2>
      <div className="space-y-2">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {lang.name}:
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
