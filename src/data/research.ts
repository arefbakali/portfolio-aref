import type { ResearchItem } from '../types'

/**
 * Awards, competitions and leadership — recognition from the CV that sits
 * alongside the project case studies. (Rendered by the "Awards" section.)
 */
export const research: ResearchItem[] = [
  {
    id: 'business-impact',
    kind: { en: 'HACKATHON', fr: 'HACKATHON' },
    badge: { en: 'Winner · Business Impact Prize', fr: 'Lauréat · Prix Business Impact' },
    title: { en: 'Hack for Good with Gen AI', fr: 'Hack for Good with Gen AI' },
    description: {
      en: 'Won the Business Impact Prize at the Dauphine Tunis Gen AI hackathon (December 22, 2024, 1,500 TND) with BreastFriend, an AI assistant in oncology: RAG medical chatbot, computer-vision wig recommendation and patient–doctor follow-up.',
      fr: "Lauréat du Prix Business Impact au hackathon Gen AI de Dauphine Tunis (22 décembre 2024, 1 500 TND) avec BreastFriend, un assistant IA en oncologie : chatbot médical RAG, recommandation de perruques par vision par ordinateur et suivi patient-médecin.",
    },
    technologies: ['RAG', 'NLP', 'Computer Vision', 'React.js', 'Flask'],
    images: ['/awards/business-impact/team-cheque.jpg', '/awards/business-impact/winner-cheque.jpg', '/awards/business-impact/pitch.jpg'],
  },
  {
    id: 'skill-me',
    kind: { en: 'HACKATHON', fr: 'HACKATHON' },
    badge: { en: 'Hack for Care and Culture with AI', fr: 'Hack for Care and Culture with AI' },
    title: { en: 'Skill Me — Educational AI Platform for Children', fr: 'Skill Me — Plateforme IA éducative pour enfants' },
    description: {
      en: 'A personalized recommendation application that helps children discover their interests (sports, arts, sciences) based on their answers and behavior, built during the “Hack for Care and Culture with AI” hackathon (April 2024).',
      fr: "Application de recommandation personnalisée aidant les enfants à découvrir leurs centres d'intérêt (sports, arts, sciences) selon leurs réponses et comportements, réalisée lors du hackathon « Hack for Care and Culture with AI » (avril 2024).",
    },
    technologies: ['Python', 'Scikit-learn', 'NLP', 'Streamlit', 'React.js'],
    images: ['/awards/skill-me/pitch.jpg'],
  },
  {
    id: 'kaggle-house-prices',
    kind: { en: 'KAGGLE', fr: 'KAGGLE' },
    badge: { en: '61st / 5,235 · Top 1.2%', fr: '61e / 5 235 · Top 1,2 %' },
    title: { en: 'House Prices Prediction', fr: 'Prédiction des prix immobiliers' },
    description: {
      en: 'Regression pipeline for the Kaggle House Prices competition, ranked 61st out of 5,235 with a score of 0.11481 (May 2026).',
      fr: 'Pipeline de régression pour la compétition Kaggle House Prices, classé 61e sur 5 235 avec un score de 0,11481 (mai 2026).',
    },
    technologies: ['Python', 'Scikit-learn', 'Random Forest', 'XGBoost'],
    images: [
      '/projects/kaggle-house-prices/kaggle_score.png',
      '/projects/kaggle-house-prices/saleprice_distribution.png',
      '/projects/kaggle-house-prices/correlation_heatmap.png',
      '/projects/kaggle-house-prices/model_architecture.jpg',
    ],
    imageAspect: 'contain',
  },
  {
    id: 'fonds-e5t',
    kind: { en: 'AWARD', fr: 'PRIX' },
    badge: { en: '1st prize · 2024', fr: '1er prix · 2024' },
    title: { en: 'Ocean Wash — Fonds E5t', fr: 'Ocean Wash — Fonds E5t' },
    description: {
      en: 'A marine-litter collection robot built for an environmental association — 1st prize of the Fonds E5t 2024 (1,700 DT), presented at the Université de printemps 2024 (May 2024) through the short film “L’éveil des profondeurs”.',
      fr: "Un robot de collecte des déchets marins conçu pour une association environnementale — 1er prix du Fonds E5t 2024 (1 700 DT), présenté à l'Université de printemps 2024 (mai 2024) à travers le court métrage « L'éveil des profondeurs ».",
    },
    technologies: ['Sustainability', 'Robotics'],
    images: ['/awards/fonds-e5t/cheque.jpg'],
  },
  {
    id: 'mediterranee-screening',
    kind: { en: 'EVENT', fr: 'ÉVÉNEMENT' },
    badge: { en: 'Short film screening · 4 May 2024', fr: 'Projection · 4 mai 2024' },
    title: { en: 'Méditerranée : L’éveil des profondeurs', fr: 'Méditerranée : L’éveil des profondeurs' },
    description: {
      en: 'Public screening of the short film “Méditerranée : L’éveil des profondeurs” on Saturday 4 May 2024 at 9am, during the 6th Université de printemps, organized with E5t (Think Tank e5t 100 Leaders pour la Planète) for World Environment Day. A film I made with fellow Dauphine students Skander Trigui, Yassine Lenda, Omar Belhaj and Mohamed Rayen Ayat.',
      fr: "Projection publique du court métrage « Méditerranée : L'éveil des profondeurs » le samedi 4 mai 2024 à 9h, lors de la 6ᵉ Université de printemps, organisée avec E5t (Think Tank e5t 100 Leaders pour la Planète) à l'occasion de la Journée mondiale de l'environnement. Un film que j'ai réalisé avec mes camarades de Dauphine Skander Trigui, Yassine Lenda, Omar Belhaj et Mohamed Rayen Ayat.",
    },
    technologies: ['Short film', 'Environment', 'E5t'],
    images: ['/awards/mediterranee/team-photo.jpg', '/awards/mediterranee/poster.jpg'],
    imageAspect: 'portrait',
  },
  {
    id: 'universite-printemps',
    kind: { en: 'AWARD', fr: 'PRIX' },
    badge: { en: '3rd Innovation Prize', fr: '3e Prix d’Innovation' },
    title: { en: 'Université de printemps 2023', fr: 'Université de printemps 2023' },
    description: {
      en: '3rd Innovation Prize at the Université de printemps 2023 (March 2023). Theme: climate change in Africa.',
      fr: "3e Prix d'Innovation à l'Université de printemps 2023 (mars 2023). Thème : changement climatique en Afrique.",
    },
    technologies: ['Innovation', 'Climate change'],
    images: ['/awards/universite-printemps/prize-ceremony.jpg'],
  },
  {
    id: 'itlab',
    kind: { en: 'LEADERSHIP', fr: 'LEADERSHIP' },
    badge: { en: 'Vice-president', fr: 'Vice-président' },
    title: { en: 'ITLAB Club, Tunisia', fr: 'Club ITLAB, Tunisie' },
    description: {
      en: 'Vice-president since September 2025, after serving as AI Coordinator from October 2023 to May 2025.',
      fr: "Vice-président depuis septembre 2025, après avoir été Coordinateur Intelligence Artificielle d'octobre 2023 à mai 2025.",
    },
    technologies: ['Leadership', 'Artificial Intelligence'],
  },
  {
    id: 'itlab-events',
    kind: { en: 'ORGANIZATION', fr: 'ORGANISATION' },
    title: { en: 'Hackathon & Capture The Flag', fr: 'Hackathon & Capture The Flag' },
    description: {
      en: 'Member of the organizing committee of the “Hack for Good with Gen AI” hackathon (December 2024) and of the ITLAB Capture The Flag events (October 17, 2024, February 20, 2025 and October 8, 2025).',
      fr: "Membre du comité d'organisation du hackathon « Hack for Good with Gen AI » (décembre 2024) et des événements Capture The Flag d'ITLAB (17 octobre 2024, 20 février 2025 et 8 octobre 2025).",
    },
    technologies: ['Hackathon', 'Capture The Flag'],
    images: [
      '/awards/itlab-events/team.jpg',
      '/awards/itlab-events/ctf-2024-10.jpg',
      '/awards/itlab-events/ctf-2025-02.jpg',
      '/awards/itlab-events/ctf-2025-10.jpg',
    ],
    imageAspect: 'portrait',
  },
]
