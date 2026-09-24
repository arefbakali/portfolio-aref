import { Search } from 'lucide-react'
import { projectFilters } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

interface Props {
  active: string
  onChange: (id: string) => void
  search: string
  onSearchChange: (value: string) => void
}

export default function ProjectFilter({ active, onChange, search, onSearchChange }: Props) {
  const { lang, t } = useLanguage()

  return (
    <div className="mb-10 flex flex-col gap-5">
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Project filters">
        {projectFilters.map((filter) => (
          <button
            key={filter.id}
            role="tab"
            aria-selected={active === filter.id}
            onClick={() => onChange(filter.id)}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
              active === filter.id
                ? 'border-accent bg-accent-solid text-white'
                : 'border-border text-ink hover:border-accent hover:text-accent'
            }`}
          >
            {filter.label[lang]}
          </button>
        ))}
      </div>

      <div className="relative max-w-sm">
        <Search size={15} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.projects.searchPlaceholder}
          className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-muted focus:border-accent"
        />
      </div>
    </div>
  )
}
