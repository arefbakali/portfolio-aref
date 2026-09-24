import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    code: 'LNG',
    title: { en: 'Programming Languages', fr: 'Langages' },
    skills: ['Python', 'R', 'Java', 'JavaScript', 'C', 'MATLAB', 'SQL'],
  },
  {
    code: 'AI',
    title: { en: 'AI & Data Science', fr: 'IA & Data Science' },
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'LLM',
      'Generative AI',
      'Regression',
      'Classification',
      'Clustering',
      'Bayesian Networks',
    ],
  },
  {
    code: 'GEN',
    title: { en: 'Agentic AI & RAG', fr: 'IA agentique & RAG' },
    skills: ['LangGraph', 'LangChain', 'RAG', 'vLLM', 'AI Agents'],
  },
  {
    code: 'LIB',
    title: { en: 'AI / Data Libraries', fr: 'Librairies IA / Data' },
    skills: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'TensorFlow/Keras',
      'PyTorch',
      'Hugging Face Transformers',
      'XGBoost',
      'OpenCV',
      'MediaPipe',
      'pyAgrum',
      'SHAP',
      'LIME',
      'Geopandas',
    ],
  },
  {
    code: 'OPS',
    title: { en: 'MLOps & DevOps', fr: 'MLOps & DevOps' },
    skills: ['MLflow', 'Evidently', 'CI/CD (GitHub Actions)', 'Docker', 'Git', 'Google Cloud (Vertex AI)'],
  },
  {
    code: 'WEB',
    title: { en: 'Web & Databases', fr: 'Web & Bases de données' },
    skills: ['FastAPI', 'Flask', 'Django', 'React.js', 'MySQL', 'PostgreSQL'],
  },
  {
    code: 'TL',
    title: { en: 'Tools', fr: 'Outils' },
    skills: ['Streamlit', 'Jupyter Notebook', 'VS Code'],
  },
]
