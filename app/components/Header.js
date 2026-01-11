export default function Header({ name, contact }) {
  return (
    <header className="mb-8 border-b border-zinc-200 pb-6 dark:border-zinc-800">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        {contact.email && (
          <a 
            href={`mailto:${contact.email}`}
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            {contact.email}
          </a>
        )}
        {contact.linkedin && (
          <a 
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
        )}
        {contact.github && (
          <a 
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
        )}
        {contact.location && (
          <span>{contact.location}</span>
        )}
      </div>
    </header>
  );
}
