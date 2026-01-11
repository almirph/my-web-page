export default function Summary({ summary }) {
  return (
    <section className="mb-8">
      {/* <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Summary
      </h2> */}
      <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
        {summary}
      </p>
    </section>
  );
}
