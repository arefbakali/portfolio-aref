export type Lang = 'en' | 'fr'

export interface LocalizedText {
  en: string
  fr: string
}

export type ProjectCategory =
  | 'ai-ml'
  | 'computer-vision'
  | 'ai-agents'
  | 'data'
  | 'hackathon'

export interface Project {
  id: string
  title: LocalizedText
  category: LocalizedText
  categories: ProjectCategory[]
  year?: string
  shortDescription: LocalizedText
  description: LocalizedText
  problem?: LocalizedText
  solution?: LocalizedText
  features: string[]
  highlight?: LocalizedText
  technologies: string[]
  repositoryType: 'public' | 'private'
  githubUrl?: string
  interactiveMap?: string
  demoVideo?: string
  cover: string | null
  screenshots: string[]
}

export interface SkillGroup {
  code: string
  title: LocalizedText
  skills: string[]
}

export interface ExperienceItem {
  id: string
  dates: LocalizedText
  role: LocalizedText
  company: string
  description: LocalizedText
  achievements?: LocalizedText[]
  technologies: string[]
  current?: boolean
}

export interface EducationItem {
  id: string
  dates: string
  degree: LocalizedText
  school: string
  description?: LocalizedText
}

export interface CertificationItem {
  id: string
  provider: string
  title: string
  year: string
}

export interface ResearchItem {
  id: string
  kind: LocalizedText
  badge?: LocalizedText
  title: LocalizedText
  description: LocalizedText
  technologies: string[]
  githubUrl?: string
  /** Optional photos, shown at the top of the card (see public/awards/<id>/). */
  images?: string[]
  /** 'portrait' shows tall images (posters) uncropped; 'contain' shows charts/screenshots uncropped in a landscape box. Default: landscape crop. */
  imageAspect?: 'landscape' | 'portrait' | 'contain'
}
