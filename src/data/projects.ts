import type { Project } from '../types'

/**
 * Centralized project data. Add screenshots to /public/projects/<id>/
 * and update `cover` / `screenshots` accordingly.
 *
 * Projects marked `public` link to the GitHub profile as a placeholder —
 * replace `githubUrl` with the exact repository URL once it is known.
 */
const GITHUB = 'https://github.com/arefbakali'

export const projects: Project[] = [
  {
    id: 'posture-ai',
    title: {
      en: 'PostureAI — Real-Time Posture Assistant',
      fr: 'PostureAI — Assistant de posture en temps réel',
    },
    category: { en: 'Computer Vision', fr: 'Computer Vision' },
    categories: ['computer-vision', 'ai-ml'],
    year: '2026',
    shortDescription: {
      en: 'A local, privacy-first computer-vision assistant that tracks head, neck and shoulder posture in real time and alerts on bad habits.',
      fr: "Un assistant de vision par ordinateur 100 % local qui suit la posture tête/cou/épaules en temps réel et alerte en cas de mauvaises habitudes.",
    },
    description: {
      en: 'A real-time posture-correction assistant built with MediaPipe: it tracks head, neck and shoulder position, supports personalized calibration, raises smart alerts on poor posture, and shows a tracking dashboard — all processed 100% locally, with no data leaving the device.',
      fr: "Un assistant de correction posturale en temps réel construit avec MediaPipe : suivi de la position tête/cou/épaules, calibration personnalisée, alertes intelligentes en cas de mauvaise posture, et dashboard de suivi — le tout traité 100 % en local, sans donnée transmise à l'extérieur.",
    },
    problem: {
      en: 'Long hours at a desk lead to poor posture and neck/shoulder strain, and most posture-tracking tools require sending webcam video to the cloud.',
      fr: "De longues heures de travail assis dégradent la posture et fatiguent cou et épaules, et la plupart des outils de suivi postural nécessitent d'envoyer la vidéo webcam dans le cloud.",
    },
    solution: {
      en: 'Used MediaPipe to track head, neck and shoulder landmarks locally in real time, added a personalized calibration step per user, generated smart alerts when posture degrades, and built a dashboard to follow posture over a session — entirely on-device.',
      fr: "Utilisation de MediaPipe pour suivre localement et en temps réel les points clés tête/cou/épaules, ajout d'une calibration personnalisée par utilisateur, génération d'alertes intelligentes en cas de dégradation de la posture, et construction d'un dashboard de suivi sur une session — entièrement sur l'appareil.",
    },
    features: [
      'Real-time head/neck/shoulder tracking with MediaPipe',
      'Personalized calibration per user',
      'Smart alerts on posture degradation',
      'Session tracking dashboard',
      '100% local processing — no data leaves the device',
    ],
    technologies: ['Python', 'OpenCV', 'MediaPipe'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/PostureAI',
    demoVideo: '/projects/posture-ai/demo.mp4',
    cover: '/projects/posture-ai/cover.jpg',
    screenshots: ['/projects/posture-ai/screenshot-01.jpg', '/projects/posture-ai/screenshot-02.jpg'],
  },
  {
    id: 'math-plus-agent',
    title: {
      en: 'Pedagogical AI Agent — Math+ Program',
      fr: 'Agent IA pédagogique — Programme Math+',
    },
    category: { en: 'AI Agents / RAG', fr: 'Agents IA / RAG' },
    categories: ['ai-agents'],
    year: '2026',
    shortDescription: {
      en: 'Supporting mathematics students through a pedagogical platform built on AI and autonomous agents, enhanced with a RAG system.',
      fr: "Accompagnement d'étudiants en mathématiques via une plateforme pédagogique intégrant IA et agents autonomes, enrichie d'un système RAG.",
    },
    description: {
      en: 'Internship at Université Paris Dauphine-PSL (July – August 2026), within the Math+ program. I supported students in mathematics through a pedagogical platform integrating AI and autonomous agents, and integrated a RAG system to improve the relevance and personalization of the answers.',
      fr: "Stage à l'Université Paris Dauphine-PSL (juillet – août 2026), dans le cadre du programme Math+. Accompagnement d'étudiants en mathématiques via une plateforme pédagogique intégrant IA et agents autonomes ; intégration d'un système RAG pour améliorer la pertinence et la personnalisation des réponses.",
    },
    highlight: {
      en: 'Internship · Université Paris Dauphine-PSL · Jul – Aug 2026',
      fr: 'Stage · Université Paris Dauphine-PSL · Juil. – Août 2026',
    },
    features: [
      'Pedagogical platform integrating AI and autonomous agents',
      'Support for students in mathematics',
      'RAG system integrated to improve answer relevance',
      'Personalization of the answers to each student',
    ],
    technologies: ['AI Agents', 'RAG', 'Pedagogical AI'],
    repositoryType: 'private',
    cover: '/projects/math-plus-agent/login-platform.jpg',
    screenshots: [
      '/projects/math-plus-agent/login-platform.jpg',
      '/projects/math-plus-agent/login-assistant.jpg',
      '/projects/math-plus-agent/teacher-dashboard.jpg',
    ],
  },
  {
    id: 'kairos',
    title: {
      en: 'KAIROS — AI Personal Organization Agent',
      fr: "Agent IA d'organisation personnelle — KAIROS",
    },
    category: { en: 'AI Agents / LLM', fr: 'Agents IA / LLM' },
    categories: ['ai-agents'],
    year: '2026',
    shortDescription: {
      en: 'An intelligent personal organization agent designed to help users organize tasks, calendar events and commitments.',
      fr: "Un agent intelligent d'organisation personnelle conçu pour aider les utilisateurs à gérer tâches, événements et engagements.",
    },
    description: {
      en: 'A multi-tool conversational AI agent built during an internship at ARSII: it understands natural-language requests, extracts calendar events and resolves scheduling conflicts, orchestrated with LangGraph tool calling and served by an open-source LLM through vLLM.',
      fr: "Un agent IA conversationnel multi-outils développé lors d'un stage chez ARSII : il comprend les demandes en langage naturel, extrait les événements et résout les conflits d'agenda, orchestré avec le tool calling LangGraph et servi par un LLM open-source via vLLM.",
    },
    problem: {
      en: 'Keeping a calendar organized means constantly parsing intent from messages, spotting scheduling conflicts, and reconciling multiple tools — calendar and email — by hand.',
      fr: "Garder un agenda organisé demande d'interpréter en permanence l'intention des messages, de repérer les conflits de créneaux et de réconcilier plusieurs outils — agenda et email — manuellement.",
    },
    solution: {
      en: 'A conversational agent that understands intent, extracts events and detects scheduling conflicts via LangGraph tool calling, reaching 87% accuracy on 60 test cases. The LLM is served through vLLM (1.6s average latency) behind a swappable provider architecture, with a FastAPI backend, a React/TypeScript frontend, and direct Google Calendar/Gmail integration.',
      fr: "Un agent conversationnel qui comprend l'intention, extrait les événements et détecte les conflits de créneaux via le tool calling LangGraph, atteignant 87 % de précision sur 60 cas de test. Le LLM est servi via vLLM (latence moyenne 1,6 s) derrière une architecture de providers interchangeables, avec un backend FastAPI, un frontend React/TypeScript et une intégration directe Google Calendar/Gmail.",
    },
    highlight: {
      en: '87% accuracy on 60 test cases · 1.6s average LLM latency',
      fr: '87 % de précision sur 60 cas de test · latence LLM moyenne 1,6 s',
    },
    features: [
      'Intent understanding and structured event extraction from natural language',
      'Conflict and slot detection via LangGraph tool calling — 87% accuracy on 60 test cases',
      'Interchangeable open-source LLM providers served with vLLM (1.6s average latency)',
      'Google Calendar & Gmail integration',
      'React/TypeScript frontend with a FastAPI backend',
      'Conflict handling: nothing is created on overlap, the agent proposes another slot or lets you create it anyway',
      'Calendar import from a photo, screenshot or PDF — reviewed and confirmed before anything is added to Google Calendar',
      'Notification feed of what the agent did or could not do, plus e-mail reminders',
    ],
    technologies: ['React', 'TypeScript', 'FastAPI', 'LangGraph', 'Hugging Face', 'vLLM', 'Google Calendar API'],
    repositoryType: 'public',
    githubUrl: GITHUB, // TODO: replace with the exact KAIROS repository URL
    cover: '/projects/kairos/landing.jpg',
    screenshots: [
      '/projects/kairos/landing.jpg',
      '/projects/kairos/planning-chat.jpg',
      '/projects/kairos/conflict-detection.jpg',
      '/projects/kairos/notifications.jpg',
      '/projects/kairos/calendar-import.jpg',
      '/projects/kairos/import-review.jpg',
      '/projects/kairos/email-reminder.jpg',
      '/projects/kairos/dark-settings.jpg',
    ],
  },
  {
    id: 'breast-cancer',
    title: {
      en: 'AI Breast Cancer Prediction Platform',
      fr: 'Plateforme IA de prédiction du cancer du sein',
    },
    category: { en: 'AI / Machine Learning', fr: 'IA / Machine Learning' },
    categories: ['ai-ml', 'data'],
    year: '2026',
    shortDescription: {
      en: 'A Streamlit medical classification app comparing 6 ML models to screen for breast cancer from blood biomarkers.',
      fr: "Une application Streamlit de classification médicale comparant 6 modèles ML pour dépister le cancer du sein à partir de biomarqueurs sanguins.",
    },
    description: {
      en: 'An end-to-end MLOps pipeline — exploratory analysis, preprocessing, comparison of six classification models, experiment tracking, drift monitoring and containerization — deployed as an interactive Streamlit application for medical classification, built on the Coimbra Breast Cancer Dataset (116 patients, 9 biomarkers).',
      fr: "Un pipeline MLOps de bout en bout — analyse exploratoire, prétraitement, comparaison de six modèles de classification, tracking d'expériences, supervision du drift et conteneurisation — déployé en application Streamlit interactive de classification médicale, construit sur le Coimbra Breast Cancer Dataset (116 patients, 9 biomarqueurs).",
    },
    problem: {
      en: 'Breast cancer screening relies heavily on imaging, which can be limited by cost, access and clinical context. Could routine clinical and blood biomarker data support earlier, more accessible screening?',
      fr: "Le dépistage du cancer du sein repose largement sur l'imagerie, limitée par le coût, l'accès et le contexte clinique. Les biomarqueurs sanguins et cliniques de routine peuvent-ils permettre un dépistage plus précoce et plus accessible ?",
    },
    solution: {
      en: 'Trained and compared six classification models (Logistic Regression, Naive Bayes, Ridge, Lasso, KNN, MLP) on nine clinical/blood biomarkers (age, BMI, glucose, insulin, HOMA, leptin, adiponectin, resistin, MCP-1). The best model, KNN, was shipped behind a Streamlit interface, with MLflow experiment tracking, Evidently drift detection, Docker containerization and a CI/CD pipeline built around it.',
      fr: "Entraînement et comparaison de six modèles de classification (régression logistique, Naive Bayes, Ridge, Lasso, KNN, MLP) sur neuf biomarqueurs cliniques/sanguins (âge, IMC, glucose, insuline, HOMA, leptine, adiponectine, résistine, MCP-1). Le meilleur modèle, KNN, a été déployé derrière une interface Streamlit, avec tracking d'expériences MLflow, détection de drift Evidently, conteneurisation Docker et pipeline CI/CD construits autour.",
    },
    highlight: {
      en: 'KNN — 79.17% accuracy · 76.92% recall · 81.00% F1-score',
      fr: 'KNN — 79,17 % accuracy · 76,92 % recall · 81,00 % F1-score',
    },
    features: [
      'Interactive Streamlit app for manual biomarker input and instant prediction',
      'Six models compared: Logistic Regression, Naive Bayes, Ridge, Lasso, KNN, MLP',
      'Evaluation with confusion matrices and medical metrics (accuracy, recall, F1-score)',
      'MLflow experiment tracking of every training run',
      'Data-drift detection with Evidently',
      'Dockerized, with a CI/CD pipeline',
    ],
    technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy', 'MLflow', 'Evidently', 'Docker', 'CI/CD'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/breast-cancer-ml-prediction',
    cover: '/projects/breast-cancer/streamlit_app.png',
    screenshots: [
      '/projects/breast-cancer/streamlit_app.png',
      '/projects/breast-cancer/prediction_result.png',
      '/projects/breast-cancer/model_comparison.png',
      '/projects/breast-cancer/model_evaluation.png',
    ],
  },
  {
    id: 'drought-tunisia',
    title: {
      en: 'Drought Risk Prediction in Tunisia',
      fr: 'Prévision du risque de sécheresse en Tunisie',
    },
    category: { en: 'Machine Learning / Deep Learning', fr: 'Machine Learning / Deep Learning' },
    categories: ['ai-ml', 'data'],
    year: '2026',
    shortDescription: {
      en: 'Drought risk modeling in Tunisia from climatic, temporal and spatial indicators: tabular ML, a tuned LSTM, and an interactive risk map.',
      fr: 'Modélisation du risque de sécheresse en Tunisie à partir d’indicateurs climatiques, temporels et spatiaux : ML tabulaire, LSTM tuné et carte de risque interactive.',
    },
    description: {
      en: 'A drought-risk modeling pipeline for Tunisia (2,520 observations, Jan 2017 – Sep 2025): tabular models (Random Forest, XGBoost) enriched with KMeans clustering, an MLP, and a temporal LSTM, followed by a spatial risk map by governorate in the UTM 32N projection.',
      fr: "Un pipeline de modélisation du risque de sécheresse en Tunisie (2 520 observations, janv. 2017 – sept. 2025) : modèles tabulaires (Random Forest, XGBoost) enrichis par un clustering KMeans, un MLP, puis un LSTM temporel, suivis d'une carte de risque spatiale par gouvernorat en projection UTM 32N.",
    },
    problem: {
      en: 'Drought is a major environmental and agricultural challenge in regions exposed to climate variability. Can Machine Learning and Deep Learning models predict drought risk in Tunisia from climatic, temporal and spatial indicators?',
      fr: "La sécheresse est un enjeu environnemental et agricole majeur dans les régions exposées à la variabilité climatique. Le Machine Learning et le Deep Learning peuvent-ils prédire le risque de sécheresse en Tunisie à partir d'indicateurs climatiques, temporels et spatiaux ?",
    },
    solution: {
      en: 'Compared Random Forest and XGBoost baselines, enriched them with a KMeans cluster feature, trained tuned and non-tuned MLPs, then trained LSTM models on temporal sequences to forecast drought risk three months ahead — before mapping predicted risk levels by governorate.',
      fr: "Comparaison de baselines Random Forest et XGBoost, enrichies d'une variable de cluster KMeans, entraînement de MLP tunés et non tunés, puis de modèles LSTM sur séquences temporelles pour prévoir le risque de sécheresse à trois mois — avant cartographie des niveaux de risque prédits par gouvernorat.",
    },
    highlight: {
      en: 'Random Forest (tabular): R² 0.821 — Tuned LSTM (temporal): R² 0.953',
      fr: 'Random Forest (tabulaire) : R² 0,821 — LSTM tuné (temporel) : R² 0,953',
    },
    features: [
      'Random Forest and XGBoost baselines on 2,520 observations (2017–2025)',
      'KMeans cluster-feature enrichment (elbow method, silhouette score)',
      'Tuned and non-tuned MLP models',
      'LSTM temporal forecasting, 3 months ahead (tuned: R² = 0.953)',
      'Interactive drought-risk map by governorate (UTM 32N)',
    ],
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'TensorFlow/Keras', 'Pandas', 'Folium', 'Plotly'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/drought-risk-prediction-tunisia',
    cover: '/projects/drought-tunisia/drought_map.png',
    screenshots: [
      '/projects/drought-tunisia/drought_map.png',
      '/projects/drought-tunisia/model_comparison.png',
      '/projects/drought-tunisia/feature_importance.png',
      '/projects/drought-tunisia/lstm_predictions.png',
    ],
  },
  {
    id: 'kaggle-house-prices',
    title: {
      en: 'Kaggle Competition — House Prices Prediction',
      fr: 'Compétition Kaggle — House Prices Prediction',
    },
    category: { en: 'Regression', fr: 'Régression' },
    categories: ['ai-ml', 'data'],
    year: '2026',
    shortDescription: {
      en: 'An advanced regression pipeline for the Kaggle House Prices competition: feature engineering, stacking and blending, ranked 61st out of 5,235 (top 1.2%).',
      fr: "Un pipeline de régression avancé pour la compétition Kaggle House Prices : feature engineering, stacking et blending, classé 61e sur 5 235 (top 1,2 %).",
    },
    description: {
      en: 'An advanced regression pipeline for the Kaggle "House Prices - Advanced Regression Techniques" competition on the Ames Housing dataset: exploratory analysis, missing-value treatment, feature engineering, skewness correction (Box-Cox), and a weighted blend of nine models.',
      fr: 'Pipeline de régression avancé pour la compétition Kaggle « House Prices - Advanced Regression Techniques » sur le dataset Ames Housing : analyse exploratoire, traitement des valeurs manquantes, feature engineering, correction de l’asymétrie (Box-Cox) et blending pondéré de neuf modèles.',
    },
    problem: {
      en: 'House price prediction is a classic regression problem: estimating a property’s sale price from many numerical and categorical features (location, living area, quality, garage, basement, construction year).',
      fr: "La prédiction du prix des maisons est un problème de régression classique : estimer le prix de vente d'un bien à partir de nombreuses variables numériques et catégorielles (localisation, surface habitable, qualité, garage, sous-sol, année de construction).",
    },
    solution: {
      en: 'Engineered features (TotalSF, Total_Bathrooms, YrBltAndRemod, and more), corrected skewed variables with Box-Cox, then combined Ridge, Lasso, ElasticNet, SVR, Gradient Boosting, XGBoost, LightGBM, CatBoost and a StackingCVRegressor into a final weighted blend.',
      fr: "Création de variables dérivées (TotalSF, Total_Bathrooms, YrBltAndRemod, etc.), correction de l'asymétrie des variables avec Box-Cox, puis combinaison de Ridge, Lasso, ElasticNet, SVR, Gradient Boosting, XGBoost, LightGBM, CatBoost et un StackingCVRegressor en un blend pondéré final.",
    },
    highlight: {
      en: 'Rank 61 / 5,235 (top 1.2%) — Kaggle score 0.11481',
      fr: 'Classement 61e / 5 235 (top 1,2 %) — score Kaggle 0,11481',
    },
    features: [
      'Full EDA: missing values, outliers, correlation, statistical tests',
      'Feature engineering: TotalSF, Total_Bathrooms, YrBltAndRemod, and more',
      'Box-Cox skewness correction on numerical features',
      'Nine models combined: Ridge, Lasso, ElasticNet, SVR, Gradient Boosting, XGBoost, LightGBM, CatBoost, StackingCVRegressor',
      'Final weighted blending strategy for the Kaggle submission',
    ],
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'MLxtend'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/kaggle-house-prices-prediction',
    cover: '/projects/kaggle-house-prices/kaggle_score.png',
    screenshots: [
      '/projects/kaggle-house-prices/kaggle_score.png',
      '/projects/kaggle-house-prices/saleprice_distribution.png',
      '/projects/kaggle-house-prices/correlation_heatmap.png',
      '/projects/kaggle-house-prices/model_architecture.jpg',
    ],
  },
  {
    id: 'fake-news-bayes',
    title: {
      en: 'Fake News Detection using Bayesian Networks',
      fr: 'Détection de fake news par réseau bayésien',
    },
    category: { en: 'Bayesian Networks', fr: 'Réseaux bayésiens' },
    categories: ['ai-ml'],
    year: '2026',
    shortDescription: {
      en: 'A multiply-connected Bayesian network (9 variables, 13 arcs) that estimates the probability of fake news from uncertain signals.',
      fr: 'Un réseau bayésien multiply-connected (9 variables, 13 arcs) qui estime la probabilité de fake news à partir de signaux incertains.',
    },
    description: {
      en: 'A probabilistic model for fake news detection using a multiply-connected Bayesian network: source credibility, bot activity, emotional content, virality and fact-checking status are combined through causal reasoning and junction-tree inference to estimate the probability that content is fake.',
      fr: "Un modèle probabiliste de détection de fake news à l'aide d'un réseau bayésien multiply-connected : crédibilité de la source, activité de bots, charge émotionnelle, viralité et statut de vérification sont combinés via un raisonnement causal et une inférence par arbre de jonction pour estimer la probabilité qu'un contenu soit faux.",
    },
    highlight: {
      en: 'P(FakeNews) rises from 53.4% (prior) to 91.9% under a coordinated-disinformation scenario',
      fr: 'P(FakeNews) passe de 53,4 % (a priori) à 91,9 % en scénario de désinformation coordonnée',
    },
    features: [
      'Bayesian network: 9 variables, 13 causal arcs, multiply-connected structure',
      'Built with pyAgrum, inference via LazyPropagation',
      'Coordinated-disinformation scenario: bot activity + virality + low credibility → P(FakeNews) = 0.919',
      'Contradictory-evidence scenario tested (credible source + high bot activity) → P(FakeNews) = 0.392',
      'Prior vs posterior probability analysis under evidence',
    ],
    technologies: ['Python', 'pyAgrum', 'NumPy', 'Pandas'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/fake-news-bayesian-network',
    cover: '/projects/fake-news-bayes/bayesian_network_dag.png',
    screenshots: [
      '/projects/fake-news-bayes/bayesian_network_dag.png',
      '/projects/fake-news-bayes/evidence_impact.png',
      '/projects/fake-news-bayes/scenario_comparison.png',
    ],
  },
  {
    id: 'credit-card-fraud',
    title: {
      en: 'Credit Card Fraud Loss Data Mining',
      fr: 'Détection de fraude bancaire par carte de crédit',
    },
    category: { en: 'Data Mining', fr: 'Data Mining' },
    categories: ['ai-ml', 'data'],
    year: '2026',
    shortDescription: {
      en: 'A full data mining workflow on credit card fraud losses: regression, SMOTE-balanced classification, clustering and SHAP/LIME interpretability.',
      fr: 'Un workflow de data mining complet sur les pertes de fraude bancaire : régression, classification équilibrée par SMOTE, clustering et interprétabilité SHAP/LIME.',
    },
    description: {
      en: 'A complete Data Mining workflow on 1,140 credit card fraud cases (13 columns) to understand, predict and interpret fraud-related financial losses: statistical testing, Ridge regression, PCA, KMeans risk-profile clustering, SMOTE-balanced binary classification, and SHAP/LIME interpretability.',
      fr: "Un workflow complet de Data Mining sur 1 140 cas de fraude bancaire (13 colonnes) pour comprendre, prédire et interpréter les pertes financières liées à la fraude : tests statistiques, régression Ridge, ACP, clustering KMeans par profil de risque, classification binaire équilibrée par SMOTE et interprétabilité SHAP/LIME.",
    },
    problem: {
      en: 'Beyond detecting whether a transaction is fraudulent, estimating the potential financial loss matters for prioritizing alerts and managing risk exposure. Can Data Mining techniques predict and interpret credit card fraud losses?',
      fr: "Au-delà de détecter si une transaction est frauduleuse, estimer la perte financière potentielle est essentiel pour prioriser les alertes et gérer l'exposition au risque. Les techniques de data mining peuvent-elles prédire et interpréter les pertes de fraude bancaire ?",
    },
    solution: {
      en: 'Identified exposure_index as the main driver of fraud_amount through correlation and statistical tests, trained a Ridge regression (test R² 0.7654), segmented risk profiles with KMeans, then binarized the target at the 80th percentile and applied SMOTE to raise recall on high-loss fraud from 0.87 to 0.96 — explained globally with SHAP and locally with LIME.',
      fr: "Identification d'exposure_index comme principal facteur de fraud_amount via tests statistiques et corrélations, entraînement d'une régression Ridge (R² test 0,7654), segmentation des profils de risque par KMeans, puis binarisation de la cible au 80e percentile et application de SMOTE pour faire passer le recall des fraudes à forte perte de 0,87 à 0,96 — expliqué globalement avec SHAP et localement avec LIME.",
    },
    highlight: {
      en: 'Ridge regression test R² 0.7654 · SMOTE recall on high-loss fraud: 0.87 → 0.96 · ROC-AUC 0.97',
      fr: 'Régression Ridge R² test 0,7654 · SMOTE recall fraude à forte perte : 0,87 → 0,96 · ROC-AUC 0,97',
    },
    features: [
      'Statistical testing: Pearson/Spearman/Kendall, Cramér’s V, ANOVA, mutual information',
      'Ridge regression on fraud_amount — test R² 0.7654, limited overfitting',
      'KMeans clustering — identified a high-risk cluster (avg. exposure ≈ 63.4, avg. fraud ≈ 33,402 €)',
      'Binary classification at the 80th percentile with SMOTE — recall 0.87 → 0.96 on high-loss fraud',
      'Global interpretability with SHAP, local explanations with LIME',
    ],
    technologies: ['Python', 'Scikit-learn', 'SMOTE', 'KMeans', 'SHAP', 'LIME', 'SciPy'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/credit-card-fraud-loss-data-mining',
    cover: '/projects/credit-card-fraud/shap_summary.png',
    screenshots: [
      '/projects/credit-card-fraud/target_distribution.png',
      '/projects/credit-card-fraud/correlation_analysis.png',
      '/projects/credit-card-fraud/regression_results.png',
      '/projects/credit-card-fraud/clustering_profiles.png',
      '/projects/credit-card-fraud/smote_classification.png',
      '/projects/credit-card-fraud/shap_summary.png',
      '/projects/credit-card-fraud/lime_explanation.png',
    ],
  },
  {
    id: 'seam-carving',
    title: {
      en: 'Seam Carving — Content-Aware Image Resizing',
      fr: 'Seam Carving — Redimensionnement d’images content-aware',
    },
    category: { en: 'Computer Vision / Graph Algorithms', fr: 'Computer Vision / Algorithmique des graphes' },
    categories: ['computer-vision'],
    year: '2026',
    shortDescription: {
      en: 'A content-aware image resizing algorithm that removes low-energy seams instead of cropping or scaling, with an interactive Streamlit app.',
      fr: "Un algorithme de redimensionnement content-aware qui supprime les seams de plus faible énergie plutôt que de recadrer, avec une application Streamlit interactive.",
    },
    description: {
      en: 'An implementation of the Seam Carving algorithm for content-aware image resizing in Python (NumPy, Pillow), packaged behind an interactive Streamlit app that lets users upload an image, visualize energy maps, display seams and compare before/after results.',
      fr: "Une implémentation de l'algorithme Seam Carving pour le redimensionnement d'images content-aware en Python (NumPy, Pillow), packagée dans une application Streamlit interactive permettant d'importer une image, de visualiser les cartes d'énergie, d'afficher les seams et de comparer les résultats avant/après.",
    },
    highlight: {
      en: 'The image is modeled as a Directed Acyclic Graph — the optimal seam is its shortest path',
      fr: "L'image est modélisée comme un graphe orienté acyclique (DAG) — le seam optimal en est le plus court chemin",
    },
    problem: {
      en: 'Standard resizing methods scale the entire image uniformly and can distort important objects, while cropping may remove relevant visual regions.',
      fr: "Les méthodes de redimensionnement classiques mettent à l'échelle l'image entière de façon uniforme et peuvent déformer les objets importants, tandis que le recadrage peut supprimer des zones visuelles pertinentes.",
    },
    solution: {
      en: 'Modeled the image as a Directed Acyclic Graph (each pixel is a node, each edge weighted by the energy of the destination pixel) and used dynamic programming to find the minimum cumulative-energy seam — the shortest path through the graph — removing it and repeating until the target size is reached.',
      fr: "Modélisation de l'image en graphe orienté acyclique (chaque pixel est un nœud, chaque arête pondérée par l'énergie du pixel de destination) et utilisation de la programmation dynamique pour trouver le seam d'énergie cumulée minimale — le plus court chemin dans le graphe — supprimé puis répété jusqu'à la taille cible.",
    },
    features: [
      'Upload an image through a Streamlit interface',
      'Energy map computation based on image gradients',
      'Vertical and horizontal seam detection and removal',
      'Seam visualization on the original image',
      'Before/after comparison of the resized result',
      'Visual animation of the resizing process',
    ],
    technologies: ['Python', 'NumPy', 'Pillow', 'Streamlit'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/seam-carving-image-resizing',
    demoVideo: '/projects/seam-carving/result-preview.mp4',
    cover: '/projects/seam-carving/vertical-seam.jpg',
    screenshots: [
      '/projects/seam-carving/app-interface.jpg',
      '/projects/seam-carving/original-example.png',
      '/projects/seam-carving/vertical-seam.jpg',
      '/projects/seam-carving/horizontal-seam.jpg',
      '/projects/seam-carving/energy-map-1.jpg',
      '/projects/seam-carving/energy-map-2.jpg',
    ],
  },
  {
    id: 'digital-behaviors',
    title: {
      en: 'Digital and Cultural Behavior Analysis',
      fr: 'Analyse des comportements numériques et culturels',
    },
    category: { en: 'Data Analysis', fr: 'Analyse de données' },
    categories: ['data'],
    year: '2025',
    shortDescription: {
      en: 'A multivariate analysis of survey data (PCA, MCA, hierarchical clustering) identifying four digital-behavior profiles.',
      fr: "Une analyse multivariée d'un questionnaire (ACP, ACM, classification hiérarchique) identifiant quatre profils de comportement numérique.",
    },
    description: {
      en: 'A multivariate analysis of digital and cultural behaviors from a 112-respondent survey: PCA on 15 digital-usage variables, MCA on categorical preferences, and Ward hierarchical clustering to identify homogeneous behavioral profiles.',
      fr: "Une analyse multivariée des comportements numériques et culturels à partir d'un questionnaire de 112 répondants : ACP sur 15 variables d'usage numérique, ACM sur les préférences catégorielles, et classification hiérarchique de Ward pour identifier des profils comportementaux homogènes.",
    },
    problem: {
      en: 'Digital usage and cultural practices vary strongly between individuals. What are the main dimensions structuring these behaviors, and can homogeneous profiles be identified?',
      fr: "L'usage numérique et les pratiques culturelles varient fortement d'un individu à l'autre. Quelles sont les dimensions principales qui structurent ces comportements, et peut-on identifier des profils homogènes ?",
    },
    solution: {
      en: 'Ran a PCA on the digital-usage block (2 axes explaining ~50% of variance: usage intensity, and trust/critical perception of technology), an MCA on categorical preferences, then a Ward hierarchical clustering on the factorial coordinates, retaining 4 clusters.',
      fr: "Réalisation d'une ACP sur le bloc d'usage numérique (2 axes expliquant ~50 % de la variance : intensité d'usage, et confiance/perception critique de la technologie), d'une ACM sur les préférences catégorielles, puis d'une classification hiérarchique de Ward sur les coordonnées factorielles, avec 4 clusters retenus.",
    },
    highlight: {
      en: '4 behavioral profiles identified, from intensive digital users to more critical/distant ones',
      fr: '4 profils comportementaux identifiés, des usagers numériques intensifs aux profils plus critiques/distants',
    },
    features: [
      'Survey data cleaning (Google Forms, 112 respondents)',
      'PCA on 15 digital-usage variables — 2 axes, ~50% explained variance',
      'MCA on categorical preferences (social media, streaming, sport, reading habits)',
      'Ward hierarchical clustering — 4 behavioral profiles identified',
    ],
    technologies: ['R', 'FactoMineR', 'factoextra', 'ggplot2', 'dplyr'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/digital-cultural-behavior-analysis',
    cover: '/projects/digital-behaviors/clustering_results.png',
    screenshots: [
      '/projects/digital-behaviors/descriptive_statistics.png',
      '/projects/digital-behaviors/correlation_matrix.png',
      '/projects/digital-behaviors/pca_variables_map.png',
      '/projects/digital-behaviors/mca_variables_map.png',
      '/projects/digital-behaviors/clustering_results.png',
    ],
  },
  {
    id: 'football-predictor',
    title: {
      en: 'Football Performance Predictor',
      fr: 'Football Performance Predictor',
    },
    category: { en: 'Machine Learning', fr: 'Machine Learning' },
    categories: ['ai-ml', 'data'],
    year: '2025',
    shortDescription: {
      en: 'Position-specific ML models predicting football player performance, from web scraping to an interactive Streamlit app.',
      fr: 'Des modèles ML par poste prédisant la performance des joueurs de football, du web scraping à une application Streamlit interactive.',
    },
    description: {
      en: 'A Machine Learning pipeline and Streamlit application predicting football player performance by position (forwards, midfielders, defenders): custom scraping, cleaning, position-specific feature engineering, and separate trained models per position and target metric.',
      fr: "Un pipeline de Machine Learning et une application Streamlit prédisant la performance de joueurs de football par poste (attaquants, milieux, défenseurs) : scraping sur mesure, nettoyage, feature engineering par poste, et modèles entraînés séparément pour chaque poste et chaque métrique cible.",
    },
    problem: {
      en: 'Football clubs, analysts and scouts increasingly rely on data to evaluate player profiles. Can Machine Learning models predict key performance indicators from historical player statistics?',
      fr: "Clubs, analystes et recruteurs s'appuient de plus en plus sur la donnée pour évaluer les profils de joueurs. Le Machine Learning peut-il prédire des indicateurs de performance clés à partir de statistiques historiques ?",
    },
    solution: {
      en: 'Scraped and cleaned multi-season player statistics, engineered position-specific features and targets (e.g. Gls-xG and Ast/90 for forwards, PrgP/90 for midfielders, Tkl/90 for defenders), trained separate models per position, and deployed them behind a Streamlit app with both existing-player and manual new-player prediction modes.',
      fr: "Scraping et nettoyage de statistiques joueurs multi-saisons, feature engineering et cibles spécifiques par poste (ex. Gls-xG et Ast/90 pour les attaquants, PrgP/90 pour les milieux, Tkl/90 pour les défenseurs), entraînement de modèles séparés par poste, déployés dans une application Streamlit avec des modes de prédiction pour joueur existant et pour nouveau joueur saisi manuellement.",
    },
    features: [
      'Custom scraping pipeline for multi-season player statistics',
      'Position-specific feature engineering (forwards, midfielders, defenders)',
      'Separate trained models per position and target metric',
      'Existing-player mode: real vs. predicted value and prediction error',
      'New-player mode: manual stat entry for custom predictions',
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Joblib'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/football-performance-predictor',
    cover: '/projects/football-predictor/app_interface.png',
    screenshots: [
      '/projects/football-predictor/app_interface.png',
      '/projects/football-predictor/existing_player_prediction.png',
      '/projects/football-predictor/new_player_prediction.png',
      '/projects/football-predictor/pipeline_overview.png',
    ],
  },
  {
    id: 'primia',
    title: {
      en: 'PRIMIA — AI Platform for Credit Insurance',
      fr: "PRIMIA — Plateforme IA pour l'assurance-crédit",
    },
    category: { en: 'InsurTech · Hackathon', fr: 'InsurTech · Hackathon' },
    categories: ['hackathon', 'ai-ml'],
    year: '2025',
    shortDescription: {
      en: 'A SaaS platform automating credit-insurance quote generation: AI extraction from PDF reports, risk scoring and dynamic premium pricing.',
      fr: "Une plateforme SaaS automatisant la génération de devis d'assurance-crédit : extraction IA depuis des rapports PDF, scoring de risque et tarification dynamique des primes.",
    },
    description: {
      en: 'PRIMIA is an AI-powered SaaS platform for credit insurance companies: it extracts credit information from uploaded financial reports, computes a company risk factor, optimizes the insurance premium with a Gradient Boosting model, and generates a structured quote — built during the "Hack for Smart Insurance with AI" hackathon (Dauphine Tunis & EY).',
      fr: "PRIMIA est une plateforme SaaS propulsée par l'IA pour les compagnies d'assurance-crédit : elle extrait les informations de crédit depuis des rapports financiers importés, calcule un facteur de risque de l'entreprise, optimise la prime d'assurance avec un modèle Gradient Boosting, et génère un devis structuré — développée lors du hackathon « Hack for Smart Insurance with AI » (Dauphine Tunis & EY).",
    },
    problem: {
      en: 'Credit insurance pricing is often based on static internal rules and manual analysis, which can lead to underpricing, overpricing or delayed decisions.',
      fr: "La tarification de l'assurance-crédit repose souvent sur des règles internes statiques et une analyse manuelle, ce qui peut mener à une sous-tarification, une sur-tarification ou des décisions retardées.",
    },
    solution: {
      en: 'Built a 4-stage pipeline: PDF text extraction and AI-based credit-information extraction, a weighted risk factor combining credit amount, interest rate, duration, sector and claims history, premium/commission optimization with a Gradient Boosting model, and structured quote generation stored via Supabase.',
      fr: "Construction d'un pipeline en 4 étapes : extraction de texte PDF et extraction IA des informations de crédit, un facteur de risque pondéré combinant montant du crédit, taux d'intérêt, durée, secteur et historique de sinistres, optimisation de la prime/commission avec un modèle Gradient Boosting, et génération d'un devis structuré stocké via Supabase.",
    },
    highlight: {
      en: 'Responsible AI role: pipeline design, risk scoring and premium-optimization logic',
      fr: 'Rôle Responsible AI : conception du pipeline, scoring de risque et logique d’optimisation de la prime',
    },
    features: [
      'Financial report PDF upload and AI-based credit-information extraction',
      'Weighted risk-factor calculation (credit amount, interest rate, duration, sector, claims history)',
      'Premium/commission optimization with a Gradient Boosting model',
      'Structured quote generation with history dashboard',
      'User authentication and insurer-facing workflow (React/TypeScript, Node/Express, Supabase)',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'Scikit-learn', 'Gemini', 'Supabase'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/primia-credit-insurance-ai-platform',
    demoVideo: '/projects/primia/primia-demo.mp4',
    cover: '/projects/primia/cover.jpg',
    screenshots: ['/projects/primia/screenshot-01.jpg'],
  },
  {
    id: 'breastfriend',
    title: {
      en: 'BreastFriend — AI Assistant in Oncology',
      fr: 'BreastFriend — Assistant IA en oncologie',
    },
    category: { en: 'Generative AI / RAG · Hackathon', fr: 'IA générative / RAG · Hackathon' },
    categories: ['hackathon', 'ai-agents', 'computer-vision'],
    year: '2024',
    shortDescription: {
      en: 'Project built during the “Hack For Good With Gen AI” hackathon (Business Impact Prize): a RAG medical chatbot, computer-vision wig recommendation and patient–doctor follow-up.',
      fr: 'Projet réalisé lors du hackathon « Hack For Good With Gen AI » (Prix Business Impact) : chatbot médical RAG, recommandation de perruques par vision par ordinateur et suivi patiente–médecin.',
    },
    description: {
      en: 'BreastFriend is a web application born at the “Hack For Good With Gen AI” hackathon, where it won the Business Impact Prize. It supports women before, during and after breast cancer and connects them with their doctor, combining a React interface, a Flask backend, a RAG assistant (embeddings, Qdrant vector database, reranker, local or API LLM) and a real-time virtual wig try-on running in the browser.',
      fr: "BreastFriend est une application web née lors du hackathon « Hack For Good With Gen AI », où elle a reçu le Prix Business Impact. Elle accompagne les femmes avant, pendant et après un cancer du sein et fait le lien avec leur médecin, en combinant une interface React, un backend Flask, une assistante RAG (embeddings, base vectorielle Qdrant, reranker, LLM local ou API) et un essayage virtuel de perruques en temps réel dans le navigateur.",
    },
    problem: {
      en: 'Women facing breast cancer need reliable information, support with the side effects of treatment (such as hair loss) and a simple link with their doctor — while doctors need to prioritize which patients to look at first.',
      fr: "Les femmes confrontées au cancer du sein ont besoin d'informations fiables, d'un soutien face aux effets des traitements (comme la perte de cheveux) et d'un lien simple avec leur médecin — tandis que les médecins doivent prioriser les patientes à examiner en premier.",
    },
    solution: {
      en: 'A patient space (guided self-exam, RAG-generated check-in questionnaire, AI assistant, wig recommendation and virtual try-on) and a doctor space (dashboard, reports with triage levels, calendar, real-time notifications, messaging and a knowledge base that feeds the RAG). Validated documents are the only source of medical information: the assistant cites them, detects emergencies, never diagnoses, and answers “information not found” instead of inventing.',
      fr: "Un espace patiente (autopalpation guidée, questionnaire de check-in généré par RAG, assistante IA, recommandation et essayage virtuel de perruques) et un espace médecin (tableau de bord, comptes rendus avec niveaux de triage, agenda, notifications en temps réel, messagerie et base de connaissances alimentant le RAG). Les documents validés sont la seule source d'information médicale : l'assistante les cite, détecte les urgences, ne pose jamais de diagnostic et répond « information introuvable » plutôt que d'inventer.",
    },
    highlight: {
      en: 'Business Impact Prize — Hack For Good With Gen AI hackathon',
      fr: 'Prix Business Impact — hackathon Hack For Good With Gen AI',
    },
    features: [
      'RAG assistant with hybrid retrieval (vectors + BM25, rank fusion, reranking), cited sources and streaming answers',
      'Emergency detection (e.g. fever during chemotherapy → urgent alert), no invented answers when information is missing',
      'Wig recommendation by computer vision (face shape, skin tone, undertone) and real-time virtual try-on with MediaPipe, processed in the browser',
      'Guided self-exam and check-in questionnaire with explainable triage, structured reports and PDF export',
      'Doctor space: dashboard, calendar, messaging, notes and real-time updates (Server-Sent Events)',
      'Knowledge base management: PDF/Markdown/text upload, OCR for scanned PDFs, background indexing',
    ],
    technologies: ['Python', 'Flask', 'React', 'RAG', 'Qdrant', 'OpenCV', 'MediaPipe', 'Docker'],
    repositoryType: 'public',
    githubUrl: 'https://github.com/arefbakali/BreastFriend',
    cover: '/projects/breastfriend/patient-home.jpg',
    screenshots: [
      '/projects/breastfriend/patient-home.jpg',
      '/projects/breastfriend/chatbot-rag.jpg',
      '/projects/breastfriend/wig-recommendation.jpg',
      '/projects/breastfriend/self-exam.jpg',
      '/projects/breastfriend/doctor-dashboard.jpg',
      '/projects/breastfriend/doctor-patient-detail.jpg',
    ],
  },
]

export const projectFilters: { id: 'all' | Project['categories'][number]; label: { en: string; fr: string } }[] = [
  { id: 'all', label: { en: 'ALL', fr: 'TOUS' } },
  { id: 'ai-ml', label: { en: 'AI / ML', fr: 'IA / ML' } },
  { id: 'ai-agents', label: { en: 'AI AGENTS', fr: 'AGENTS IA' } },
  { id: 'computer-vision', label: { en: 'COMPUTER VISION', fr: 'COMPUTER VISION' } },
  { id: 'data', label: { en: 'DATA', fr: 'DATA' } },
  { id: 'hackathon', label: { en: 'HACKATHONS', fr: 'HACKATHONS' } },
]
