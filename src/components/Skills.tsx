import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { skillGroups } from '../data/skills'

export default function Skills() {
  const { t, pick } = useLanguage()

  return (
    <section id="stack" className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-accent">{t.stack.label}</p>
        <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-5xl">{t.stack.heading}</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.code}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-solid font-mono text-[11px] font-semibold text-white">
                {group.code}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{pick(group.title)}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border bg-cream px-2.5 py-1 font-mono text-[11px] text-ink/80">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
