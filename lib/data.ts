export const profile = {
  name: "Benedict Rejones",
  fullName: "W. Benedict Rejones",
  role: "AI/ML Developer & Freelance Software Engineer",
  tagline:
    "I design and ship ML models, AI agents, and web applications — for companies hiring full-time and clients hiring project-by-project.",
  location: "Coimbatore, India",
  email: "benedictrejones3101@gmail.com",
  linkedin: "https://www.linkedin.com/in/W-benedict-rejones/",
  github: "https://github.com/benedictrejones31",
  leetcode: "https://leetcode.com/u/benedictrejones/",
  status: {
    fresher: "Fresher · Class of 2026",
    availability: "Available for full-time roles & freelance projects",
  },
  summary:
    "I'm a fresher (2022–2026) actively looking for full-time opportunities in AI/ML and software development, while also taking on freelance work. I build across the stack — training and deploying machine learning models, building AI agents and AI-powered applications, developing modern websites for clients, and automating workflows with intelligent software. Across seven self-driven projects I've taken ideas from raw data to deployed, user-facing systems using Python, PyTorch/TensorFlow, Flask/FastAPI, and modern web tooling.",
};

export const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web apps for clients — from marketing sites to full-stack applications with Flask/React front ends.",
    tags: ["React", "Next.js", "Flask", "HTML/CSS/JS"],
  },
  {
    title: "ML Model Development & Deployment",
    description:
      "Training, fine-tuning, and deploying machine learning models — from computer vision classifiers to tabular prediction systems — as real, usable APIs and apps.",
    tags: ["PyTorch", "TensorFlow", "Scikit-learn", "FastAPI"],
  },
  {
    title: "AI Agents & AI-Powered Apps",
    description:
      "Building retrieval-augmented and agentic applications on top of LLMs — grounded, traceable systems rather than black-box demos.",
    tags: ["LangChain", "RAG", "FAISS", "LLMs"],
  },
  {
    title: "Automation & Intelligent Software",
    description:
      "Automating repetitive workflows and building intelligent tools that plug into existing processes, backed by solid CI/CD and cloud deployment.",
    tags: ["Docker", "Jenkins", "Terraform", "Azure"],
  },
];

export const modelCard = {
  taskType: "AI/ML Development · Web Development · Freelance Engineering",
  primaryDomain: "Applied Machine Learning · AI Agents · Full-Stack Deployment",
  trainingData: "7 shipped projects, 200+ LeetCode problems, 3 hackathons",
  intendedUse:
    "Building AI/ML systems, AI-powered applications, and modern websites — for teams hiring full-time and clients hiring on a project basis.",
  limitations:
    "Fresher (Class of 2026) — actively seeking a first full-time role, and open to freelance engagements in the meantime.",
  metrics: [
    { label: "Best model ROC-AUC", value: "0.97" },
    { label: "Best model accuracy", value: "99.2%" },
    { label: "LeetCode problems solved", value: "200+" },
    { label: "Shipped end-to-end projects", value: "7" },
  ],
};

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  bullets: string[];
  tools: string[];
  metric: { label: string; value: string };
  githubUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "pan-card-detector",
    title: "PAN Card Authenticity Detection System",
    category: "Applied ML · Document Verification",
    summary:
      "A multi-modal AI system that flags forged PAN cards by combining a fine-tuned image classifier with rule-based OCR, format, and QR verification — deployed as a real API, not a notebook demo.",
    bullets: [
      "Combined a fine-tuned ResNet-50 image classifier with rule-based validation — OCR text checks, PAN format verification, and QR code authentication — for multi-modal forgery detection.",
      "Designed a data augmentation pipeline simulating real-world forgery artifacts (blur, color tampering, JPEG compression, perspective distortion) to generate training data without collecting illegal fake documents.",
      "Handled severe class imbalance with weighted loss and sampler techniques, reaching a 0.97 ROC-AUC score.",
      "Deployed the model as a REST API with FastAPI, paired with a responsive web UI for end-to-end verification.",
    ],
    tools: ["Python", "PyTorch", "ResNet-50", "FastAPI", "EasyOCR", "OpenCV", "Albumentations", "Scikit-learn"],
    metric: { label: "ROC-AUC", value: "0.97" },
    githubUrl: "https://github.com/benedictrejones31/pan-card-detector",
    featured: true,
  },
  {
    id: "skin-cnn-resnet50",
    title: "Real-Time Skin Disease Diagnosis",
    category: "Applied ML · Real-Time Inference",
    summary:
      "A CNN fine-tuned with a ResNet50 backbone that classifies skin conditions live from a webcam feed, packaged as a desktop diagnostic tool rather than a research notebook.",
    bullets: [
      "Fine-tuned a ResNet50-based CNN for multi-class skin disease classification and optimized it for high accuracy across varied skin tones and lighting.",
      "Built a PyQt5 desktop GUI with live OpenCV camera inference, so predictions run in real time instead of on static uploads.",
      "Added interactive confidence-score visualization so a user can see how certain the model is, not just its top label.",
    ],
    tools: ["Python", "TensorFlow", "Keras", "OpenCV", "PyQt5", "Matplotlib"],
    metric: { label: "Inference", value: "Real-time" },
    githubUrl: "https://github.com/benedictrejones31/Real-Time-Skin-Disease-Detection",
    featured: true,
  },
  {
    id: "coral-cnn-vit",
    title: "Coral Reef Health Classification",
    category: "Applied ML · Hybrid Architecture",
    summary:
      "A hybrid CNN + Vision Transformer pipeline that reads underwater imagery and classifies coral bleaching, fusing local texture features with global spatial context.",
    bullets: [
      "Designed a CNN-ViT hybrid where the CNN extracts local texture/color features and the ViT models global spatial context to catch bleaching patterns CNNs alone miss.",
      "Trained and validated across 10,000 underwater coral images, reaching 99.2% classification accuracy.",
      "Built the preprocessing pipeline to handle underwater color distortion and variable turbidity before it reaches the model.",
    ],
    tools: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    metric: { label: "Accuracy", value: "99.2%" },
    githubUrl: "https://github.com/benedictrejones31/Coral-Reef-Health-Classification",
    featured: true,
  },
  {
    id: "local-rag",
    title: "Offline RAG for PDF Question-Answering",
    category: "AI Agents · Retrieval-Augmented Generation",
    summary:
      "A fully offline RAG pipeline that grounds a locally-hosted LLM in your own PDFs — no API keys, no cloud calls, full traceability of every retrieved passage.",
    bullets: [
      "Built an ingestion → embedding → retrieval → generation pipeline around a locally-hosted TinyLlama model served through Ollama.",
      "Indexed documents with Sentence-Transformer (MiniLM) embeddings in FAISS, retrieving top-k passages via cosine similarity to ground answers and cut hallucination.",
      "Shipped a Streamlit UI that surfaces the answer alongside retrieved context, similarity scores, and processing latency — so the retrieval step is auditable, not a black box.",
    ],
    tools: ["Python", "LangChain", "FAISS", "Sentence-Transformers", "Ollama", "Streamlit"],
    metric: { label: "Deployment", value: "100% offline" },
    githubUrl: "https://github.com/benedictrejones31/tinyllama-rag",
    featured: true,
  },
  {
    id: "emotion-movies",
    title: "Emotion-Based Movie Recommender",
    category: "Applied ML · Recommender Systems",
    summary:
      "Detects viewer emotion from webcam input and recommends movies to match, blending real-time computer vision with collaborative filtering.",
    bullets: [
      "Built real-time emotion recognition using DeepFace and MTCNN face detection.",
      "Combined emotion signal with a collaborative-filtering recommendation engine and the TMDB API for suggestions.",
      "Shipped as a Flask web app with an intuitive front end for the full detect-to-recommend loop.",
    ],
    tools: ["Python", "Flask", "DeepFace", "MTCNN", "TMDB API", "Bootstrap"],
    metric: { label: "Signal", value: "Live emotion → rec" },
    githubUrl: "https://github.com/benedictrejones31/emotion-movie-recommendation",
    featured: false,
  },
  {
    id: "crop-fertilizer",
    title: "Crop & Fertilizer Recommendation System",
    category: "Applied ML · AgriTech",
    summary:
      "A Random Forest recommendation engine that turns soil and environmental data into actionable crop and fertilizer guidance for farmers, deployed publicly on Render.",
    bullets: [
      "Trained a Random Forest classifier on soil nutrient and environmental data for high-accuracy crop/fertilizer recommendations.",
      "Built a responsive Flask web interface with interactive visualizations for non-technical end users.",
      "Deployed the full stack on Render for public, real-time access.",
    ],
    tools: ["Python", "Flask", "Scikit-learn", "Pandas", "Render"],
    metric: { label: "Status", value: "Publicly deployed" },
    githubUrl: "https://github.com/benedictrejones31/Crop-and-Fertilizer-Recommendation-System",
    featured: false,
  },
  {
    id: "face-attendance",
    title: "Smart Attendance via Face Recognition",
    category: "Applied ML · Systems",
    summary:
      "Real-time, multi-person face recognition attendance system with a GUI for administrative control and automated logging.",
    bullets: [
      "Engineered simultaneous multi-user real-time face detection and recognition.",
      "Improved recognition robustness under varied lighting and camera angles through targeted preprocessing.",
      "Built automated attendance logging and reporting with an admin-facing GUI.",
    ],
    tools: ["Python", "OpenCV", "Face Recognition", "Webcam"],
    metric: { label: "Mode", value: "Multi-user, live" },
    featured: false,
  },
  {
    id: "cloud-todo",
    title: "Cloud-Native TODO App with Azure Pipeline",
    category: "Automation · Cloud Infrastructure",
    summary:
      "A full-stack task manager used as a vehicle to build a real CI/CD and infrastructure-as-code pipeline — the same muscles needed to ship software reliably for clients.",
    bullets: [
      "Containerized a Flask + HTML/CSS/JS app with Docker and deployed it across Azure App Service, Storage, and Container Registry.",
      "Built a Jenkins pipeline that builds images, pushes to ACR, and deploys to Azure App Service on every code change.",
      "Provisioned all infrastructure reproducibly with Terraform (plan/apply/destroy).",
    ],
    tools: ["Flask", "Docker", "Jenkins", "Terraform", "Azure"],
    metric: { label: "Pipeline", value: "Fully automated" },
    featured: false,
  },
];

export const skills = {
  "Languages": ["Python", "Java", "SQL"],
  "ML / DL Frameworks": ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "LangChain"],
  "Data & Viz": ["Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn"],
  "Vision & Tools": ["OpenCV", "Git/GitHub", "Selenium", "BeautifulSoup", "Jupyter"],
  "Web & Backend": ["Flask", "FastAPI", "React", "HTML/CSS/JavaScript"],
  "Data Stores": ["MongoDB", "MySQL"],
};

export const education = {
  school: "Karunya Institute of Technology and Sciences",
  degree: "B.Tech, Artificial Intelligence and Data Science",
  period: "2022 — 2026",
  gpa: "8.37 CGPA",
  note: "Fresher — actively seeking full-time opportunities",
};

export const certifications = [
  { name: "Building Predictive Models with Machine Learning and Python", issuer: "Infosys" },
  { name: "Azure AI Fundamentals", issuer: "Microsoft" },
  { name: "Data Analytics Essentials", issuer: "Cisco" },
  { name: "PCAP — Programming Essentials in Python", issuer: "Cisco" },
  { name: "UiPath Automation Cloud", issuer: "UiPath" },
  { name: "Java Programming Fundamentals", issuer: "Infosys" },
];

export const achievements = [
  {
    title: "200+ LeetCode problems solved",
    detail: "Consistent DSA practice underpinning strong algorithmic fundamentals.",
  },
  {
    title: "RedBus Hackathon 2025",
    detail: "Placed in the top 500–600 teams out of 3,000+ entries.",
  },
  {
    title: "Smart India Hackathon 2024",
    detail: "Built a working solution with a multidisciplinary team under national-hackathon constraints.",
  },
  {
    title: "Gen AI Hackathon",
    detail: "Collaborated on applied generative-AI solutions to real-world problems.",
  },
  {
    title: "Tableau Bootcamp",
    detail: "Focused training in data visualization and analytical storytelling.",
  },
];
