import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/profile'

export default function Hero() {
  const { t, pick } = useLanguage()

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center px-5 pt-28 pb-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-xs tracking-widest text-accent sm:text-sm"
        >
          {pick(profile.heroLabel)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
        >
          {pick(profile.heroStatementBefore)}{' '}
          <em className="font-display font-semibold not-italic text-accent">{pick(profile.heroStatementEmphasis)}</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-xl text-base text-muted sm:text-lg"
        >
          {pick(profile.heroIntro)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={scrollToProjects}
            className="rounded-full bg-accent-solid px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
          >
            {t.hero.viewProjects} ↗
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={14} /> {t.hero.github}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin size={14} /> {t.hero.linkedin}
          </a>
          <a
            href={profile.cvUrl}
            download
            className="flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={14} /> {t.hero.downloadCv}
          </a>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">{stat.value}</p>
            <p className="mt-1 font-mono text-[10px] tracking-wider text-muted sm:text-[11px]">{pick(stat.label)}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted sm:flex"
        aria-label={t.hero.scroll}
      >
        <span className="font-mono text-[10px] tracking-widest">{t.hero.scroll}</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  )
}
