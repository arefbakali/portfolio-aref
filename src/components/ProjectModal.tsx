import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, Lock, X } from 'lucide-react'
import type { Project } from '../types'
import { useLanguage } from '../context/LanguageContext'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import ProjectGallery from './ProjectGallery'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const { pick, t } = useLanguage()
  const [index, setIndex] = useState(0)
  const [showMap, setShowMap] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useLockBodyScroll(Boolean(project))

  useEffect(() => {
    setIndex(0)
    setShowMap(false)
  }, [project])

  useEffect(() => {
    if (!project) return
    closeRef.current?.focus()

    const shotsCount = Math.max(project.screenshots.length + (project.demoVideo ? 1 : 0), 1)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + shotsCount) % shotsCount)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % shotsCount)

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(5, 9, 16, 0.88)' }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={pick(project.title)}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative flex max-h-[92vh] w-full max-w-[1400px] flex-col overflow-hidden rounded-2xl bg-cream sm:w-[80vw]"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={t.modal.close}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-accent-solid"
            >
              <X size={17} />
            </button>

            <div className="no-scrollbar overflow-y-auto">
              <ProjectGallery project={project} index={index} onIndexChange={setIndex} />

              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{pick(project.category)}</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">{pick(project.title)}</h2>
                <p className="mt-3 max-w-2xl text-base text-muted">{pick(project.shortDescription)}</p>

                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink/80 sm:text-base">
                  {pick(project.description)}
                </p>

                {project.highlight && (
                  <p className="mt-4 inline-block rounded-lg border border-accent/30 bg-accent-solid/5 px-4 py-2 font-mono text-xs text-accent sm:text-sm">
                    {pick(project.highlight)}
                  </p>
                )}

                {(project.problem || project.solution) && (
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {project.problem && (
                      <div>
                        <h3 className="font-mono text-xs uppercase tracking-wider text-muted-2">{t.modal.problem}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/80">{pick(project.problem)}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div>
                        <h3 className="font-mono text-xs uppercase tracking-wider text-muted-2">{t.modal.solution}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/80">{pick(project.solution)}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-2">{t.modal.keyFeatures}</h3>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-ink/85">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-accent-solid" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-2">{t.modal.technologies}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.interactiveMap && (
                  <div className="mt-8">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-muted-2">{t.modal.interactiveMap}</h3>
                    {showMap ? (
                      <iframe
                        src={project.interactiveMap}
                        title={t.modal.interactiveMap}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                        className="mt-3 h-[420px] w-full rounded-xl border border-border bg-card sm:h-[520px]"
                      />
                    ) : (
                      <button
                        onClick={() => setShowMap(true)}
                        className="mt-3 rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        {t.modal.loadMap}
                      </button>
                    )}
                  </div>
                )}

                <div className="mt-9">
                  {project.repositoryType === 'public' && project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
                    >
                      <Github size={15} /> {t.projects.viewCode} <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-5 py-3 font-mono text-xs uppercase tracking-wide text-muted-2">
                      <Lock size={14} /> {t.projects.privateRepo}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
