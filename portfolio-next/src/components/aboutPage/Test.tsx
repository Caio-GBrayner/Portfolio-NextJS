// App.tsx
import React, { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definitions ---
interface ITechnology {
  id: string;
  name: string;
  projects: number;
  proficiency: number;
  description: string;
  category: 'ai-ml' | 'frontend' | 'backend' | 'cloud-devops' | 'dev-tools' | 'web3-blockchain';
  gradientFrom: string;
  gradientTo: string;
}

interface ICategory {
  id: 'ai-ml' | 'frontend' | 'backend' | 'cloud-devops' | 'dev-tools' | 'web3-blockchain';
  name: string;
  icon: JSX.Element;
}

// --- Data for Categories and Technologies ---
const categories: ICategory[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
  },
  {
    id: 'dev-tools',
    name: 'Development Tools',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  },
  {
    id: 'web3-blockchain',
    name: 'Web3 & Blockchain',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
];

const technologies: ITechnology[] = [
  // AI & Machine Learning
  {
    id: 'python',
    name: 'Python',
    projects: 50,
    proficiency: 95,
    description: 'Primary language for AI/ML development',
    category: 'ai-ml',
    gradientFrom: 'blue-500',
    gradientTo: 'cyan-500',
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    projects: 25,
    proficiency: 90,
    description: 'Deep learning framework',
    category: 'ai-ml',
    gradientFrom: 'blue-500',
    gradientTo: 'cyan-500',
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    projects: 20,
    proficiency: 88,
    description: 'Research-focused ML framework',
    category: 'ai-ml',
    gradientFrom: 'blue-500',
    gradientTo: 'cyan-500',
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    projects: 30,
    proficiency: 92,
    description: 'NLP and transformer models',
    category: 'ai-ml',
    gradientFrom: 'blue-500',
    gradientTo: 'cyan-500',
  },
  {
    id: 'langchain',
    name: 'LangChain',
    projects: 15,
    proficiency: 85,
    description: 'LLM application framework',
    category: 'ai-ml',
    gradientFrom: 'blue-500',
    gradientTo: 'cyan-500',
  },
  {
    id: 'openai-api',
    name: 'OpenAI API',
    projects: 35,
    proficiency: 90,
    description: 'GPT integration and fine-tuning',
    category: 'ai-ml',
    gradientFrom: 'blue-500',
    gradientTo: 'cyan-500',
  },
  // Frontend Development (Example Data)
  {
    id: 'react',
    name: 'React',
    projects: 40,
    proficiency: 95,
    description: 'Building interactive user interfaces',
    category: 'frontend',
    gradientFrom: 'purple-500',
    gradientTo: 'pink-500',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    projects: 30,
    proficiency: 90,
    description: 'Full-stack React framework',
    category: 'frontend',
    gradientFrom: 'purple-500',
    gradientTo: 'pink-500',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    projects: 35,
    proficiency: 92,
    description: 'Utility-first CSS framework',
    category: 'frontend',
    gradientFrom: 'purple-500',
    gradientTo: 'pink-500',
  },
  // Backend & APIs (Example Data)
  {
    id: 'nodejs',
    name: 'Node.js',
    projects: 28,
    proficiency: 88,
    description: 'JavaScript runtime for backend',
    category: 'backend',
    gradientFrom: 'green-500',
    gradientTo: 'lime-500',
  },
  {
    id: 'expressjs',
    name: 'Express.js',
    projects: 22,
    proficiency: 85,
    description: 'Web framework for Node.js',
    category: 'backend',
    gradientFrom: 'green-500',
    gradientTo: 'lime-500',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    projects: 18,
    proficiency: 80,
    description: 'NoSQL database',
    category: 'backend',
    gradientFrom: 'green-500',
    gradientTo: 'lime-500',
  },
  // Cloud & DevOps (Example Data)
  {
    id: 'aws',
    name: 'AWS',
    projects: 15,
    proficiency: 80,
    description: 'Cloud computing services',
    category: 'cloud-devops',
    gradientFrom: 'orange-500',
    gradientTo: 'red-500',
  },
  {
    id: 'docker',
    name: 'Docker',
    projects: 10,
    proficiency: 75,
    description: 'Containerization platform',
    category: 'cloud-devops',
    gradientFrom: 'orange-500',
    gradientTo: 'red-500',
  },
  // Development Tools (Example Data)
  {
    id: 'git',
    name: 'Git',
    projects: 50,
    proficiency: 98,
    description: 'Version control system',
    category: 'dev-tools',
    gradientFrom: 'gray-500',
    gradientTo: 'slate-500',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    projects: 50,
    proficiency: 99,
    description: 'Code editor',
    category: 'dev-tools',
    gradientFrom: 'gray-500',
    gradientTo: 'slate-500',
  },
  // Web3 & Blockchain (Example Data)
  {
    id: 'solidity',
    name: 'Solidity',
    projects: 5,
    proficiency: 70,
    description: 'Smart contract language',
    category: 'web3-blockchain',
    gradientFrom: 'yellow-500',
    gradientTo: 'orange-500',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    projects: 3,
    proficiency: 65,
    description: 'Blockchain platform',
    category: 'web3-blockchain',
    gradientFrom: 'yellow-500',
    gradientTo: 'orange-500',
  },
];

// --- Components ---

interface CategoryButtonsProps {
  categories: ICategory[];
  activeCategory: ICategory['id'];
  setActiveCategory: (category: ICategory['id']) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col space-y-4 px-4 md:flex-row md:space-x-4 md:space-y-0 md:px-0 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              w-full md:w-auto flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
              ${activeCategory === category.id
                ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                : 'bg-card/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
              }
            `}
            tabIndex={0}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {category.icon}
            <span className="text-sm font-medium">{category.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

interface TechCardProps {
  tech: ITechnology;
}

const TechCard: React.FC<TechCardProps> = ({ tech }) => {
  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-primary/30 relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{tech.name}</h3>
        <span className="text-sm text-muted-foreground">{tech.projects} projects</span>
      </div>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="text-primary font-semibold">{tech.proficiency}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className={`h-2 rounded-full bg-gradient-to-r from-${tech.gradientFrom} to-${tech.gradientTo}`}
            style={{ width: `${tech.proficiency}%` }}
          ></div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
      <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-${tech.gradientFrom} to-${tech.gradientTo} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>
    </div>
  );
};

interface StatsGridProps {
  filteredTechnologies: ITechnology[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ filteredTechnologies }) => {
  // Calculate dynamic stats based on filtered technologies
  const technologiesCount = filteredTechnologies.length;
  const totalProjectsCount = filteredTechnologies.reduce((sum, tech) => sum + tech.projects, 0);

  // Static stats (not affected by category filter)
  const yearsExperience = '4+';
  const certifications = '8+';

  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      <motion.div
        className="text-center p-6 bg-card/60 backdrop-blur-sm border border-border/80 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2 drop-shadow-sm">{technologiesCount}+</div>
        <div className="text-sm font-medium text-foreground/90">Technologies</div>
      </motion.div>
      <motion.div
        className="text-center p-6 bg-card/60 backdrop-blur-sm border border-border/80 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="text-3xl font-bold text-fuchsia-500 mb-2 drop-shadow-sm">{totalProjectsCount}+</div>
        <div className="text-sm font-medium text-foreground/90">Total Projects</div>
      </motion.div>
      <motion.div
        className="text-center p-6 bg-card/60 backdrop-blur-sm border border-border/80 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2 drop-shadow-sm">{yearsExperience}</div>
        <div className="text-sm font-medium text-foreground/90">Years Experience</div>
      </motion.div>
      <motion.div
        className="text-center p-6 bg-card/60 backdrop-blur-sm border border-border/80 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 drop-shadow-sm">{certifications}</div>
        <div className="text-sm font-medium text-foreground/90">Certifications</div>
      </motion.div>
    </div>
  );
};

// --- Main App Component ---
export default function TechnicalStackSection() {
  // State to manage the active category for filtering
  const [activeCategory, setActiveCategory] = useState<ICategory['id']>('ai-ml');

  // Filter technologies based on the active category
  const filteredTechnologies = technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="tech-stack" className="py-10 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted/20 to-transparent"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 overflow-x-hidden">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-primary">Stack</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to build innovative solutions
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <CategoryButtons
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AnimatePresence handles exit and enter animations for items */}
          <AnimatePresence mode="wait">
            {filteredTechnologies.map((tech) => (
              <motion.div
                key={tech.id} // Key is crucial for AnimatePresence to track items
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50, position: 'absolute' }} // position absolute to prevent layout shift on exit
                transition={{ duration: 0.3 }}
                layout // Enables smooth layout transitions
                className="w-full" // Ensure div takes full width in its grid column
              >
                <TechCard tech={tech} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Statistics Grid */}
        <StatsGrid filteredTechnologies={filteredTechnologies} />
      </div>
    </section>
  );
}
