export default function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
      <p>© {new Date().getFullYear()} - Built with Next.js and Tailwind CSS</p>
    </footer>
  );
}
