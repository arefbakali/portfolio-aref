import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'
import type { Project } from '../types'
import ProjectFilter from './ProjectFilter'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const { t, pick } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === 'all' || p.categories.includes(filter as Project['categories'][number])
      const matchesSearch =
        search.trim() === '' ||
        pick(p.title).toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((tech) => tech.toLowerCase().includes(search.toLowerCase()))
      return matchesFilter && matchesSearch
    })
  }, [filter, search, pick])

  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-widest text-accent"
        >
          {t.projects.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl"
        >
          {t.projects.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 max-w-2xl text-sm text-muted sm:text-base"
        >
          {t.projects.subheading}
        </motion.p>

        <div className="mt-12">
          <ProjectFilter active={filter} onChange={setFilter} search={search} onSearchChange={setSearch} />

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={setSelected} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-sm text-muted">{t.projects.noResults}</p>
          )}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
