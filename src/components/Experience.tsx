import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { experience } from '../data/experience'

export default function Experience() {
  const { t, pick } = useLanguage()

  return (
    <section id="experience" className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-accent">{t.experience.label}</p>
        <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-5xl">{t.experience.heading}</h2>

        <div className="mt-14 space-y-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="grid gap-2 border-l-2 border-border pl-6 sm:grid-cols-[160px_1fr] sm:gap-8 sm:pl-0 sm:border-l-0"
            >
              <div className="flex items-start gap-2 sm:block">
                <p className="font-mono text-xs text-muted-2">{pick(item.dates)}</p>
                {item.current && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-solid" /> {t.experience.present}
                  </span>
                )}
              </div>

              <div className="border-l-2 border-border pl-6 sm:pl-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{pick(item.role)}</h3>
                  <span className="font-mono text-xs uppercase tracking-wide text-muted-2">{item.company}</span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80">{pick(item.description)}</p>

                {item.achievements && (
                  <ul className="mt-3 space-y-1.5">
                    {item.achievements.map((a) => (
                      <li key={a.en} className="flex items-start gap-2 text-sm text-accent">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-solid" />
                        {pick(a)}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[10px] text-ink/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
