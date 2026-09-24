import type { LocalizedText } from '../types'

/**
 * Central profile data. Edit this file to update personal information
 * across the entire site.
 */
export const profile = {
  name: 'Aref Bak Ali',
  initials: 'AB',
  title: {
    en: 'AI, Data Science & Agentic AI Student',
    fr: 'Étudiant en IA, Data Science & IA Agentique',
  } satisfies LocalizedText,

  heroLabel: {
    en: '— AI · DATA SCIENCE · AGENTIC AI STUDENT',
    fr: '— IA · DATA SCIENCE · ÉTUDIANT EN IA AGENTIQUE',
  } satisfies LocalizedText,

  // The emphasized word is rendered separately by the Hero component.
  heroStatementBefore: {
    en: 'I build predictive AI systems that are useful, robust and',
    fr: 'Je conçois des systèmes prédictifs utiles, robustes et',
  } satisfies LocalizedText,
  heroStatementEmphasis: {
    en: 'deployable.',
    fr: 'déployables.',
  } satisfies LocalizedText,

  heroIntro: {
    en: "I'm Aref, a Master's 2 student in Artificial Intelligence, Data Science & Agentic AI at Université Paris Dauphine-PSL. I work on Machine Learning, Deep Learning, LLMs, AI agents, RAG, Computer Vision and MLOps — building end-to-end AI solutions.",
    fr: "Je m'appelle Aref, étudiant en M2 Intelligence Artificielle, Data Science et IA Agentique à l'Université Paris Dauphine-PSL. Je travaille sur le Machine Learning, le Deep Learning, les LLM, les agents IA, le RAG, la Computer Vision et le MLOps — la conception de solutions IA de bout en bout.",
  } satisfies LocalizedText,

  aboutText: {
    en: "I'm a Master's 2 student in Artificial Intelligence, Data Science & Agentic AI at Université Paris Dauphine-PSL, with hands-on experience in Machine Learning, Deep Learning, LLMs, AI agents, RAG, Computer Vision and MLOps, building end-to-end AI solutions. I'm the winner of the Business Impact Prize at the Dauphine Tunis Gen AI hackathon. I'm looking for a 6-month PFE internship starting February 15, 2027 in Artificial Intelligence, Data Science, Machine Learning or Agentic AI.",
    fr: "Étudiant en M2 Intelligence Artificielle, Data Science et IA Agentique à l'Université Paris Dauphine-PSL, avec une expérience pratique en Machine Learning, Deep Learning, LLM, agents IA, RAG, Computer Vision et MLOps, et le développement de solutions IA end-to-end. Lauréat du Prix Business Impact au hackathon Gen AI de Dauphine Tunis. Je recherche un stage PFE de 6 mois à partir du 15 février 2027 en Intelligence Artificielle, Data Science, Machine Learning ou IA Agentique.",
  } satisfies LocalizedText,

  currentPosition: {
    en: 'M2 student · Seeking a 6-month PFE internship (from Feb 2027)',
    fr: 'Étudiant en M2 · Recherche un stage PFE de 6 mois (à partir de fév. 2027)',
  } satisfies LocalizedText,

  specialization: {
    en: 'Predictive modeling\nProbabilistic inference\nAgentic AI',
    fr: 'Modélisation prédictive\nInférence probabiliste\nIA agentique',
  } satisfies LocalizedText,

  languages: {
    en: 'Arabic — Native\nFrench — Advanced (C1, TCF)\nEnglish — Upper-intermediate (B2)\nGerman — Elementary (A2)',
    fr: 'Arabe — Natif\nFrançais — Avancé (C1, TCF)\nAnglais — Intermédiaire avancé (B2)\nAllemand — Élémentaire (A2)',
  } satisfies LocalizedText,

  interests: {
    en: 'AI hackathons\nITLAB club (Vice-president)\nJudo (former Tunisian national team)',
    fr: 'Hackathons IA\nClub ITLAB (Vice-président)\nJudo (ancien joueur de l’équipe nationale de Tunisie)',
  } satisfies LocalizedText,

  email: 'aref.bak-ali@dauphine.eu',
  github: 'https://github.com/arefbakali',
  githubHandle: 'arefbakali',
  linkedin: 'https://www.linkedin.com/in/aref-bak-ali/',
  linkedinHandle: '/in/aref-bak-ali',
  cvUrl: '/cv/Aref_Bak_Ali_CV.pdf',
  portrait: '/images/portrait.png',

  stats: [
    {
      value: '4',
      label: { en: 'INTERNSHIPS', fr: 'STAGES' } satisfies LocalizedText,
    },
    {
      value: '13',
      label: { en: 'FEATURED PROJECTS', fr: 'PROJETS PRÉSENTÉS' } satisfies LocalizedText,
    },
    {
      value: '61st',
      label: { en: 'KAGGLE · TOP 1.2% OF 5,235', fr: 'KAGGLE · TOP 1,2 % SUR 5 235' } satisfies LocalizedText,
    },
    {
      value: 'M2',
      label: { en: 'PARIS DAUPHINE-PSL · AI & DATA SCIENCE', fr: 'PARIS DAUPHINE-PSL · IA & DATA SCIENCE' } satisfies LocalizedText,
    },
  ],

  techMarquee: [
    'PYTHON',
    'PYTORCH',
    'TENSORFLOW / KERAS',
    'LANGGRAPH',
    'RAG',
    'HUGGING FACE',
    'VLLM',
    'SCIKIT-LEARN',
    'XGBOOST',
    'FASTAPI',
    'REACT.JS',
    'MLFLOW',
    'DOCKER',
    'CI/CD',
    'STREAMLIT',
    'GIT',
  ],

  footerTagline: {
    en: 'Building predictive AI systems that are robust and deployable.',
    fr: 'Concevoir des systèmes IA prédictifs robustes et déployables.',
  } satisfies LocalizedText,

  contactStatement: {
    en: "Let's build something intelligent.",
    fr: "Construisons quelque chose d'intelligent.",
  } satisfies LocalizedText,
}
