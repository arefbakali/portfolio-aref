import { motion } from 'framer-motion'
import { Github, Lock } from 'lucide-react'
import type { Project } from '../types'
import { useLanguage } from '../context/LanguageContext'
import ProjectCover from './ProjectCover'

interface Props {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  const { pick, t } = useLanguage()

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onOpen(project)
      }}
      aria-label={pick(project.title)}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.cover ? (
          <img
            src={project.cover}
            alt={pick(project.title)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.05]">
            <ProjectCover project={project} />
          </div>
        )}
        {project.year && (
          <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white backdrop-blur-sm">
            {project.year}
          </span>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{pick(project.category)}</p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">{pick(project.title)}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{pick(project.shortDescription)}</p>

        <div className="mt-5">
          {project.repositoryType === 'public' && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={13} /> {t.projects.code}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-muted-2">
              <Lock size={12} /> {t.projects.privateRepo}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
