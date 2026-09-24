import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/profile'
import { education, certifications } from '../data/experience'

export default function About() {
  const { t, pick, lang } = useLanguage()

  const infoRows: { label: string; value: string }[] = [
    { label: t.about.currentPosition, value: pick(profile.currentPosition) },
    {
      label: t.about.education,
      value: `${pick(education[0].degree)} — ${education[0].school}`,
    },
    { label: t.about.specialization, value: pick(profile.specialization) },
    { label: t.about.languages, value: pick(profile.languages) },
    { label: t.about.interests, value: pick(profile.interests) },
  ]

  return (
    <section id="about" className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-accent">{t.about.label}</p>
        <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-5xl">{t.about.heading}</h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative self-start overflow-hidden rounded-2xl border border-border bg-card"
          >
            <img
              src={profile.portrait}
              alt={profile.name}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <div className="hidden aspect-[4/5] w-full flex-col items-center justify-center gap-2 bg-card text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-solid font-display text-xl font-bold text-white">
                {profile.initials}
              </span>
              <p className="px-6 font-mono text-[11px] uppercase tracking-wider text-muted">{profile.name}</p>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl text-base leading-relaxed text-ink/85 sm:text-lg"
            >
              {pick(profile.aboutText)}
            </motion.p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {infoRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-accent">{row.label}</p>
                  <p className="mt-1.5 whitespace-pre-line text-sm text-ink">{row.value}</p>
                </motion.div>
              ))}
            </div>

            {certifications.length > 0 && (
            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-wider text-accent">{t.about.certifications}</p>
              <ul className="mt-3 space-y-2">
                {certifications.map((cert) => (
                  <li key={cert.id} className="flex flex-wrap items-baseline gap-x-2 text-sm text-ink/85">
                    <span className="font-medium">{cert.provider}</span>
                    <span className="text-muted">— {cert.title}</span>
                    <span className="font-mono text-xs text-muted-2">({cert.year})</span>
                  </li>
                ))}
              </ul>
            </div>
            )}

            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-wider text-accent">{lang === 'en' ? 'EDUCATION TIMELINE' : 'PARCOURS ACADÉMIQUE'}</p>
              <ul className="mt-3 space-y-3">
                {education.map((item) => (
                  <li key={item.id} className="flex flex-col gap-0.5 border-l-2 border-border pl-4 sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="font-mono text-xs text-muted-2 sm:w-28 sm:shrink-0">{item.dates}</span>
                    <span className="text-sm text-ink">
                      {pick(item.degree)} <span className="text-muted">— {item.school}</span>
                      {item.description && <span className="mt-1 block text-xs leading-relaxed text-muted">{pick(item.description)}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
