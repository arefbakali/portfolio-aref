import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { research } from '../data/research'

function CardImages({ images, alt, mode }: { images: string[]; alt: string; mode?: 'landscape' | 'portrait' | 'contain' }) {
  const portrait = mode === 'portrait'
  const fit = mode === 'portrait' || mode === 'contain' ? 'object-contain' : 'object-cover'
  const [active, setActive] = useState(0)
  return (
    <div className="-mx-5 -mt-5 mb-4 overflow-hidden rounded-t-2xl">
      <div className={`w-full bg-dark ${portrait ? 'aspect-[4/5]' : 'aspect-[16/10]'}`}>
        <img src={images[active]} alt={alt} loading="lazy" className={`h-full w-full ${fit}`} />
      </div>
      {images.length > 1 && (
        <div className="no-scrollbar flex gap-1.5 overflow-x-auto bg-black/40 p-2">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`${alt} ${i + 1}`}
              aria-current={i === active}
              className={`h-10 w-14 shrink-0 overflow-hidden rounded border-2 transition-colors ${
                i === active ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Research() {
  const { t, pick } = useLanguage()

  return (
    <section id="research" className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-accent">{t.research.label}</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
          {t.research.heading}
        </h2>
        <p className="mt-5 max-w-2xl text-sm text-muted sm:text-base">{t.research.subheading}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {research.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-5"
            >
              {item.images && item.images.length > 0 && <CardImages images={item.images} alt={pick(item.title)} mode={item.imageAspect} />}
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-2">{pick(item.kind)}</span>
                {item.badge && (
                  <span className="rounded-full bg-accent-solid/10 px-2.5 py-1 font-mono text-[10px] text-accent">
                    {pick(item.badge)}
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-base font-semibold text-ink">{pick(item.title)}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{pick(item.description)}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-ink/70">
                    {tech}
                  </span>
                ))}
              </div>
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <Github size={13} /> {t.projects.code}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
