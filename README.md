# Aref Bak Ali — AI, Data Science & Agentic AI Portfolio

Personal portfolio built to showcase my projects, experience, skills, education, awards and work in **Artificial Intelligence, Data Science, Machine Learning, Agentic AI, RAG, Computer Vision and MLOps**.

The website is bilingual (**English / French**) and includes **dark and light themes**, interactive project filtering, project galleries, videos, a downloadable CV and responsive animations.

## Live Portfolio

🌐 **Live website:** https://portfolio-aref.vercel.app/

## About Me

I'm **Aref Bak Ali**, a Master's 2 student in **Artificial Intelligence, Data Science & Agentic AI at Université Paris Dauphine-PSL**.

I work on end-to-end AI systems involving Machine Learning, Deep Learning, LLMs, AI agents, RAG, Computer Vision and MLOps, with a focus on building solutions that are useful, robust and deployable.

## Portfolio Highlights

- 13 featured AI / Data Science projects
- Machine Learning, Deep Learning and Computer Vision projects
- Agentic AI and RAG applications
- MLOps and deployment-oriented projects
- Professional experience and internships
- Education and technical skills
- Awards, hackathons and leadership activities
- Kaggle competition work
- English / French language switch
- Dark / light theme switch
- Responsive design
- Project filters, galleries and video previews
- Downloadable CV

## Featured Projects

### PostureAI — Real-Time Posture Assistant

Privacy-first computer-vision assistant that tracks head, neck and shoulder posture in real time using **Python, OpenCV and MediaPipe**.

### Pedagogical AI Agent — Math+ Program

AI educational assistant using **AI Agents, RAG and pedagogical AI** to support mathematics students.

### KAIROS — AI Personal Organization Agent

Conversational multi-tool agent for planning, calendar interaction and conflict detection using **React, TypeScript, FastAPI, LangGraph, Hugging Face, vLLM and Google Calendar API**.

### AI Breast Cancer Prediction Platform

Machine-learning platform with **Scikit-learn, Streamlit, MLflow, Evidently, Docker and CI/CD**.

### Drought Risk Prediction in Tunisia

Data Science and Deep Learning project using **XGBoost, TensorFlow/Keras, geospatial visualization and time-series modeling**.

### Kaggle — House Prices Prediction

Regression project using **XGBoost, LightGBM, CatBoost and ensemble learning**.

### Fake News Detection using Bayesian Networks

Probabilistic AI project built with **pyAgrum, NumPy and Pandas**.

### Credit Card Fraud Loss Data Mining

Fraud-analysis pipeline using **SMOTE, clustering, SHAP and LIME**.

### Seam Carving — Content-Aware Image Resizing

Computer-vision / image-processing application using **Python, NumPy, Pillow and Streamlit**.

### Digital and Cultural Behavior Analysis

Statistical analysis project using **R, FactoMineR, factoextra and ggplot2**.

### Football Performance Predictor

Machine-learning application using **Python, Pandas, Scikit-learn and Streamlit**.

### PRIMIA — AI Platform for Credit Insurance

Full-stack AI platform combining **React, TypeScript, Node.js, Express, Python, Scikit-learn, Gemini and Supabase**.

### BreastFriend — AI Assistant in Oncology

AI healthcare prototype combining **RAG, NLP, Computer Vision, Flask and React.js**.

## Tech Stack

### Portfolio Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

### AI & Data Science

- Python
- R
- Scikit-learn
- Pandas
- NumPy
- PyTorch
- TensorFlow / Keras
- XGBoost
- Hugging Face Transformers
- OpenCV
- MediaPipe
- SHAP
- LIME
- pyAgrum

### Agentic AI & RAG

- LangGraph
- LangChain
- RAG
- vLLM
- AI Agents

### Backend & Databases

- FastAPI
- Flask
- Django
- Node.js / Express
- PostgreSQL
- MySQL
- SQLite
- Supabase

### MLOps & DevOps

- MLflow
- Evidently
- Docker
- Git / GitHub
- GitHub Actions
- Google Cloud / Vertex AI

## Website Sections

The portfolio is organized around the following sections:

```text
Hero
  ↓
Technology Marquee
  ↓
Projects
  ↓
About
  ↓
Skills
  ↓
Awards / Competitions / Leadership
  ↓
Experience & Education
  ↓
Contact
```

## Project Structure

```text
portfolio-aref/
│
├── public/
│   ├── awards/
│   ├── cv/
│   │   └── Aref_Bak_Ali_CV.pdf
│   ├── images/
│   │   └── portrait.png
│   ├── projects/
│   │   ├── breast-cancer/
│   │   ├── breastfriend/
│   │   ├── credit-card-fraud/
│   │   ├── digital-behaviors/
│   │   ├── drought-tunisia/
│   │   ├── fake-news-bayes/
│   │   ├── football-predictor/
│   │   ├── kaggle-house-prices/
│   │   ├── kairos/
│   │   ├── math-plus-agent/
│   │   ├── posture-ai/
│   │   ├── primia/
│   │   └── seam-carving/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   │   ├── experience.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── research.ts
│   │   └── skills.ts
│   ├── hooks/
│   ├── locales/
│   │   ├── en.ts
│   │   └── fr.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/arefbakali/portfolio-aref.git
cd portfolio-aref
```

> If you choose another GitHub repository name, replace `portfolio-aref` in the command above.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The development server is normally available at:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the production version into `dist/`.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs Oxlint.

## Editing Portfolio Content

Most portfolio content is centralized in `src/data/` and `src/locales/`.

| Content | File |
| --- | --- |
| Profile, contact, CV, hero and statistics | `src/data/profile.ts` |
| Projects and project media | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Experience and education | `src/data/experience.ts` |
| Awards, competitions and leadership | `src/data/research.ts` |
| English UI text | `src/locales/en.ts` |
| French UI text | `src/locales/fr.ts` |
| Theme and global styling | `src/index.css` |

Project images and videos are stored under:

```text
public/projects/<project-id>/
```

## Deployment with Vercel

A simple deployment workflow is:

```text
VS Code
   ↓
Git / GitHub
   ↓
Vercel
   ↓
Public portfolio URL
```

After the GitHub repository is connected to Vercel, pushes to the production branch can automatically trigger a new deployment.

### Vercel settings

For this Vite project, Vercel should normally detect the configuration automatically:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Updating the Portfolio

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Important Git Notes

Do **not** commit:

```text
node_modules/
dist/
.env
.env.*
.vscode/
*.zip
```

`node_modules/` is generated by `npm install` and should never be pushed to GitHub.

## Contact

- **GitHub:** https://github.com/arefbakali
- **LinkedIn:** https://www.linkedin.com/in/aref-bak-ali/
- **Email:** aref.bak-ali@dauphine.eu
- **Portfolio:** https://portfolio-aref.vercel.app/

## Author

**Aref Bak Ali**  
AI, Data Science & Agentic AI Student  
Université Paris Dauphine-PSL
