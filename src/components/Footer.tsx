import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/profile'

export default function Footer() {
  const { t, pick } = useLanguage()
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-border px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-2xl font-medium text-ink sm:text-3xl">{pick(profile.footerTagline)}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">{profile.name} · {t.footer.role}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-accent hover:text-accent"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>© {year} {profile.name}. {t.footer.rights}</p>
          <button onClick={scrollTop} className="flex items-center gap-1.5 transition-colors hover:text-accent">
            {t.footer.backToTop} <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
