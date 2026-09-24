import { Brain, Camera, Lock, Sparkles, Database, Trophy } from 'lucide-react'
import type { Project } from '../types'
import { useLanguage } from '../context/LanguageContext'

const ICONS: Record<Project['categories'][number], typeof Brain> = {
  'ai-ml': Brain,
  'computer-vision': Camera,
  'ai-agents': Sparkles,
  data: Database,
  hackathon: Trophy,
}

interface Props {
  project: Project
  className?: string
}

/** A designed placeholder cover for projects awaiting a real screenshot. */
export default function ProjectCover({ project, className = '' }: Props) {
  const { pick } = useLanguage()
  const Icon = ICONS[project.categories[0]] ?? Brain

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-dark ${className}`}
    >
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
        <defs>
          <pattern id={`grid-${project.id}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="var(--color-accent-solid)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
      </svg>
      <div
        className="absolute h-40 w-40 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-accent-solid), transparent 70%)' }}
      />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-white/5">
        {project.repositoryType === 'private' ? (
          <Lock size={22} className="text-accent" />
        ) : (
          <Icon size={22} className="text-accent" />
        )}
      </div>
      <p className="relative mt-4 max-w-[80%] text-center font-display text-sm font-medium text-white/90">
        {pick(project.title)}
      </p>
      <p className="relative mt-1.5 font-mono text-[10px] uppercase tracking-widest text-white/35">
        {pick(project.category)}
      </p>
    </div>
  )
}
