import React from "react";
// import { FiCpu, FiDatabase, FiBox, FiLayers, FiZap, FiShuffle, FiSettings } from "react-icons/fi";

const expertiseData = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
      </svg>
    ),
    title: "Large Language Models",
    description: "Advanced fine-tuning and deployment of state-of-the-art language models",
    technologies: ["GPT-4", "Claude", "Llama 2/3", "Mistral", "Gemini", "LoRA", "QLoRA", "PEFT"],
    achievements: [
      "Fine-tuned 15+ custom LLMs for domain-specific tasks",
      "Implemented LoRA/QLoRA for efficient parameter updates",
      "Deployed production-ready inference endpoints",
    ],
    gradient: "from-blue-500 to-cyan-500",
    dotColor: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white dark:text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    title: "Transformer Architecture",
    description: "Deep understanding of attention mechanisms and neural network architectures",
    technologies: ["BERT", "T5", "RoBERTa", "DeBERTa", "Vision Transformers", "CLIP", "DALL-E", "Stable Diffusion"],
    achievements: [
      "Built custom transformer models from scratch",
      "Optimized attention mechanisms for efficiency",
      "Implemented multi-modal transformer architectures",
    ],
    gradient: "from-pink-400 to-rose-500",
    dotColor: "bg-pink-500 dark:bg-pink-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    title: "Generative AI & GANs",
    description: "Creating synthetic data and generative models for various applications",
    technologies: ["StyleGAN", "CycleGAN", "WGAN", "VAE", "Diffusion Models", "CLIP", "ControlNet", "InstructPix2Pix"],
    achievements: [
      "Developed custom GAN architectures for image synthesis",
      "Implemented diffusion models for high-quality generation",
      "Created AI-powered content generation pipelines",
    ],
    gradient: "from-green-500 to-emerald-500",
    dotColor: "from-green-500 to-emerald-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    title: "MLOps & Model Deployment",
    description: "End-to-end ML pipeline management and scalable model deployment",
    technologies: ["Docker", "Kubernetes", "MLflow", "Weights & Biases", "Hugging Face", "TensorRT", "ONNX", "FastAPI"],
    achievements: [
      "Deployed 25+ models to production environments",
      "Built automated ML training and deployment pipelines",
      "Optimized model inference for sub-100ms latency",
    ],
    gradient: "from-orange-500 to-red-500",
    dotColor: "from-orange-500 to-red-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15"></line>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
      </svg>
    ),
    title: "Vector Databases & RAG",
    description: "Advanced retrieval-augmented generation and semantic search systems",
    technologies: ["Pinecone", "Weaviate", "Chroma", "FAISS", "LangChain", "LlamaIndex", "OpenAI Embeddings", "Sentence Transformers"],
    achievements: [
      "Built enterprise RAG systems handling 10M+ documents",
      "Implemented hybrid search with semantic + keyword matching",
      "Optimized embedding models for domain-specific retrieval",
    ],
    gradient: "from-indigo-500 to-blue-500",
    dotColor: "from-indigo-500 to-blue-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    title: "AI Agent Systems",
    description: "Multi-agent architectures and autonomous AI systems",
    technologies: ["LangChain", "CrewAI", "AutoGEN", "ReAct", "Function Calling", "Tool Use", "Multi-Agent Systems", "Planning Algorithms"],
    achievements: [
      "Developed autonomous AI agents for complex workflows",
      "Implemented multi-agent collaboration systems",
      "Built tool-using agents with 95%+ task completion rate",
    ],
    gradient: "from-teal-500 to-cyan-500",
    dotColor: "from-teal-500 to-cyan-500",
  },
];

export function ExpertiseSection() {
  return (
    <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          AI &amp; ML <span className="text-primary">Expertise</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Specialized in cutting-edge AI technologies and modern machine learning architectures
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((item, idx) => (
          <div key={item.title} className="group relative">
            <div className={`h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 group-hover:border-primary/30`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                  <div className="text-white drop-shadow-2xl relative z-10">{item.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-full text-primary font-medium hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                <div className="space-y-2">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${item.gradient} rounded-full flex-shrink-0 mt-2`}></div>
                      <span className="text-muted-foreground leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}