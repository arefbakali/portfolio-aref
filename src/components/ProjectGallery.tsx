import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import type { Project } from '../types'
import { useLanguage } from '../context/LanguageContext'
import ProjectCover from './ProjectCover'

interface Props {
  project: Project
  index: number
  onIndexChange: (index: number) => void
}

type Slide = { type: 'video'; src: string } | { type: 'image'; src: string }

export default function ProjectGallery({ project, index, onIndexChange }: Props) {
  const { pick, t } = useLanguage()

  const slides: Slide[] = [
    ...(project.demoVideo ? [{ type: 'video', src: project.demoVideo } as const] : []),
    ...project.screenshots.map((src) => ({ type: 'image', src } as const)),
  ]
  const hasSlides = slides.length > 0
  const total = hasSlides ? slides.length : 1
  const active = slides[index]

  const goTo = (next: number) => onIndexChange((next + total) % total)

  return (
    <div className="bg-dark">
      <div className="relative flex h-[42vh] items-center justify-center sm:h-[52vh]">
        {hasSlides ? (
          <AnimatePresence mode="wait">
            {active.type === 'video' ? (
              <motion.video
                key={active.src}
                src={active.src}
                poster={project.cover ?? undefined}
                controls
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="max-h-full max-w-full"
              />
            ) : (
              <motion.img
                key={active.src}
                src={active.src}
                alt={`${pick(project.title)} — screenshot ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="max-h-full max-w-full object-contain"
              />
            )}
          </AnimatePresence>
        ) : (
          <ProjectCover project={project} className="h-full" />
        )}

        {hasSlides && slides.length > 1 && (
          <>
            <button
              onClick={() => goTo(index - 1)}
              aria-label={t.modal.prev}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-accent-solid sm:left-5"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => goTo(index + 1)}
              aria-label={t.modal.next}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-accent-solid sm:right-5"
            >
              <ChevronRight size={20} />
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 font-mono text-[11px] text-white">
              {index + 1} / {slides.length}
            </span>
          </>
        )}
      </div>

      {hasSlides && slides.length > 1 && (
        <div className="no-scrollbar flex gap-2 overflow-x-auto border-t border-white/10 bg-black/40 px-4 py-3">
          {slides.map((slide, i) => (
            <button
              key={slide.src + i}
              onClick={() => onIndexChange(i)}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-colors ${
                i === index ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              aria-label={slide.type === 'video' ? 'Demo video' : `Screenshot ${i + 1}`}
              aria-current={i === index}
            >
              {slide.type === 'video' ? (
                <>
                  {project.cover && <img src={project.cover} alt="" className="h-full w-full object-cover" />}
                  <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play size={16} className="fill-white text-white" />
                  </span>
                </>
              ) : (
                <img src={slide.src} alt="" className="h-full w-full object-cover" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
