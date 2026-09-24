import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data/profile'

const SECTIONS = ['home', 'projects', 'about', 'stack', 'research', 'experience', 'contact']

export default function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection(SECTIONS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems: { id: string; label: string }[] = [
    { id: 'projects', label: t.nav.projects },
    { id: 'about', label: t.nav.about },
    { id: 'stack', label: t.nav.stack },
    { id: 'research', label: t.nav.research },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-cream/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5"
          aria-label="Go to homepage"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-solid font-display text-xs font-bold text-white">
            {profile.initials}
          </span>
          <span className="hidden flex-col leading-tight text-left sm:flex">
            <span className="font-display text-sm font-semibold text-ink">{profile.name}</span>
            <span className="font-mono text-[10px] tracking-wider text-muted">AI & DATA SCIENCE</span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative font-mono text-xs uppercase tracking-wider transition-colors ${
                active === item.id ? 'text-accent' : 'text-ink/80 hover:text-accent'
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-accent-solid" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center rounded-full border border-border p-0.5 font-mono text-[11px] sm:flex">
            {(['en', 'fr'] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                  lang === code ? 'bg-accent-solid text-white' : 'text-muted hover:text-ink'
                }`}
                aria-pressed={lang === code}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-accent hover:text-accent sm:flex"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden items-center gap-1.5 rounded-full bg-accent-solid px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.03] sm:flex"
          >
            {t.nav.contactCta}
            <span aria-hidden>↗</span>
          </button>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-cream px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`rounded-lg px-3 py-2.5 text-left font-mono text-xs uppercase tracking-wider ${
                  active === item.id ? 'bg-card text-accent' : 'text-ink'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center rounded-full border border-border p-0.5 font-mono text-[11px]">
              {(['en', 'fr'] as const).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-full px-2.5 py-1 uppercase ${lang === code ? 'bg-accent-solid text-white' : 'text-muted'}`}
                >
                  {code}
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="flex-1 rounded-full bg-accent-solid px-4 py-2 text-center font-mono text-xs font-semibold uppercase tracking-wide text-white"
            >
              {t.nav.contactCta}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
