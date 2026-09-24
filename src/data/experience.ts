import type { CertificationItem, EducationItem, ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    id: 'arsii',
    dates: { en: 'Jul 2026 – Sep 2026', fr: 'Juil. 2026 – Sept. 2026' },
    role: { en: 'AI Intern — Calendar Conversational Agent', fr: 'Stagiaire IA — Agent conversationnel d’agenda' },
    company: 'ARSII',
    description: {
      en: 'Designed and deployed KAIROS, a multi-tool conversational agent (LangGraph, tool calling): event extraction and conflict detection reaching 87% accuracy on 60 test cases; open-source LLM served via vLLM (1.6s average latency), FastAPI backend, React/TypeScript frontend, Google Calendar/Gmail integration.',
      fr: "Conception et déploiement de KAIROS, un agent conversationnel multi-outils (LangGraph, tool calling) : extraction d'événements et détection de conflits avec 87 % de précision sur 60 cas de test ; LLM open-source servi via vLLM (latence moyenne 1,6 s), backend FastAPI, frontend React/TypeScript, intégration Google Calendar/Gmail.",
    },
    technologies: ['LangGraph', 'vLLM', 'FastAPI', 'React', 'TypeScript', 'Google Calendar API'],
    current: true,
  },
  {
    id: 'math-plus',
    dates: { en: 'Jul 2026 – Sep 2026', fr: 'Juil. 2026 – Sept. 2026' },
    role: { en: 'Intern — Pedagogical AI Agent (Math+ Program)', fr: 'Stagiaire — Agent IA pédagogique (Programme Math+)' },
    company: 'Université Paris Dauphine-PSL',
    description: {
      en: 'Developed AI and autonomous-agent features (Gemini, Google Cloud/Vertex AI) for a platform supporting mathematics students, and integrated a RAG system to improve the relevance and personalization of the answers.',
      fr: "Développement de fonctionnalités d'IA et d'agents autonomes (Gemini, Google Cloud/Vertex AI) pour une plateforme d'accompagnement d'étudiants en mathématiques ; intégration d'un système RAG pour améliorer la pertinence et la personnalisation des réponses.",
    },
    technologies: ['Gemini', 'Google Cloud / Vertex AI', 'AI Agents', 'RAG'],
    current: true,
  },
  {
    id: 'grow-up',
    dates: { en: 'Jun 2024 – Jul 2024', fr: 'Juin 2024 – Juil. 2024' },
    role: { en: 'Mobile Application Development Intern', fr: "Stagiaire en développement d'applications mobiles" },
    company: 'Grow Up Technologies',
    description: {
      en: 'Developed the Comptazone mobile application.',
      fr: "Développement de l'application mobile Comptazone.",
    },
    technologies: ['Mobile Development'],
  },
  {
    id: 'compt-info',
    dates: { en: 'Jun 2023 – Jul 2023', fr: 'Juin 2023 – Juil. 2023' },
    role: { en: 'Web Development Intern', fr: 'Stagiaire en développement web' },
    company: 'STE COMPT-INFO SERVICES',
    description: {
      en: 'Designed and developed a website for an accounting firm.',
      fr: 'Conception et développement d’un site web pour un bureau de comptabilité.',
    },
    technologies: ['Web Development'],
  },
]

export const education: EducationItem[] = [
  {
    id: 'dauphine-master',
    dates: 'Sep 2025 – Present',
    degree: {
      en: 'Master — Artificial Intelligence, Data Science & Agentic AI',
      fr: 'Master — Intelligence Artificielle, Data Science et IA Agentique',
    },
    school: 'Université Paris Dauphine-PSL',
    description: {
      en: 'Courses: Optimization, Statistical Learning, AI, Monte Carlo, Linear Models, Graph Theory, Time Series, Databases.',
      fr: 'Cours : Optimisation, Apprentissage Statistique, IA, Monte Carlo, Modèles Linéaires, Théorie des Graphes, Séries Temporelles, Bases de Données.',
    },
  },
  {
    id: 'dauphine-licence',
    dates: 'Sep 2022 – May 2025',
    degree: {
      en: 'Bachelor — Applied Mathematics',
      fr: 'Licence — Mathématiques Appliquées',
    },
    school: 'Université Paris Dauphine-PSL',
    description: {
      en: 'Courses: Python, Java, C, Statistics, Probability, Analysis, Algebra, Economics.',
      fr: 'Cours : Python, Java, C, Statistique, Probabilité, Analyse, Algèbre, Économie.',
    },
  },
  {
    id: 'bac',
    dates: '2021 – 2022',
    degree: {
      en: 'Baccalauréat — Technical Sciences, highest honors',
      fr: 'Baccalauréat — Sciences Techniques, mention Très Bien',
    },
    school: 'Lycée Aboulkacem Chebbi, La Chebba',
  },
]

// No certifications listed on the CV — the About section hides this block when empty.
export const certifications: CertificationItem[] = []
