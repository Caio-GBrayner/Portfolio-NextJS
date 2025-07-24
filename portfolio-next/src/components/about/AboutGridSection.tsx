'use client'
import { Card } from '@/components/about/Caard';
import { CircleIcon, GlobeIcon, CodeIcon, ZapIcon} from '@/components/icons/icons';
import { NextJsIcon, ReactIcon,TypeScriptIcon, NodeJsIcon, PythonIcon, } from '@/components/icons/icons';



// const cards = [
//   {
//     title: "Client-First Approach",
//     description: "Building trust through transparent communication and collaboration.",
//     icon: (
//       <svg /* ...svg props... */ className="h-5 w-5 text-black dark:text-neutral-400">{/* ... */}</svg>
//     ),
//     href: "/experience",
//     glow: true,
//   },
//   {
//     title: "Global Flexibility",
//     description: "Available across time zones for seamless worldwide collaboration.",
//     icon: (
//       <svg /* ...svg props... */ className="h-5 w-5 text-black dark:text-neutral-400">{/* ... */}</svg>
//     ),
//     href: undefined,
//     glow: false,
//   },
//   {
//     title: "Modern Tech Stack",
//     description: "Technologies and tools I use to build innovative solutions",
//     icon: (
//       <svg /* ...svg props... */ className="h-5 w-5 text-black dark:text-neutral-400">{/* ... */}</svg>
//     ),
//     href: undefined,
//     glow: true,
//     techs: [
//       { name: "Next.js", icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white">{/* ... */}</svg> },
//       { name: "React", icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500">{/* ... */}</svg> },
//       { name: "TypeScript", icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600">{/* ... */}</svg> },
//       { name: "JavaScript", icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-400">{/* ... */}</svg> },
//       { name: "Python", icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-500">{/* ... */}</svg> },
//       { name: "FastAPI", icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-teal-500">{/* ... */}</svg> },
//       { name: "Node.js", icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600">{/* ... */}</svg> },
//       { name: "Framer", icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white">{/* ... */}</svg> },
//     ],
//   },
//   {
//     title: "AI-Powered Solutions",
//     description: "Specializing in intelligent automation and LLM integrations.",
//     icon: (
//       <svg /* ...svg props... */ className="h-5 w-5 text-black dark:text-neutral-400">{/* ... */}</svg>
//     ),
//     href: "/case-studies",
//     glow: false,
//   },
//   {
//     title: "Ready to Collaborate",
//     description: "Let's create something amazing together",
//     icon: (
//       <svg /* ...svg props... */ className="h-5 w-5 text-black dark:text-neutral-400">{/* ... */}</svg>
//     ),
//     href: undefined,
//     glow: false,
//   },
// ];

// components/AboutGridSection.tsx or pages/index.tsx (if this is part of your page)

// Define your tech stack data
const techStackData = [
  { icon: NextJsIcon, name: 'Next.js', colorClass: 'text-gray-800 dark:text-white' },
  { icon: ReactIcon, name: 'React', colorClass: 'text-blue-500' },
  { icon: TypeScriptIcon, name: 'TypeScript', colorClass: 'text-blue-600' },
  { icon: NodeJsIcon, name: 'Node.js', colorClass: 'text-green-600' },
  { icon: PythonIcon, name: 'Python', colorClass: 'text-blue-700' },
];

export default function AboutGridSection() {
  return (
    <div className='w-full max-w-7xl mx-auto'>
        <section
        id="about"
        className="bg-background dark:bg-black relative overflow-hidden py-1"
        >
        {/* Decorative Blurs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 md:px-6">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 xl:max-h-[34rem] xl:grid-rows-2">
            {/* Card 1: Client-First Approach */}
            <li className="min-h-[14rem] list-none md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]">
                <Card
                title="Client-First Approach"
                description="Building trust through transparent communication and collaboration."
                icon={CircleIcon}
                href="/experience"
                glow
                overlayContent={
                    <div className="text-foreground">
                    <h4 className="text-xl font-bold mb-2">My Philosophy</h4>
                    <p className="text-sm">We prioritize your vision, ensuring a collaborative journey from concept to launch.</p>
                    </div>
                }
                />
            </li>

            {/* Card 2: Global Flexibility */}
            <li className="min-h-[14rem] list-none md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]">
                <Card
                title="Global Flexibility"
                description="Available across time zones for seamless worldwide collaboration."
                icon={GlobeIcon}
                overlayContent={
                    <div className="text-foreground">
                    <h4 className="text-xl font-bold mb-2">Remote-Ready</h4>
                    <p className="text-sm">Equipped for global projects, adapting to your schedule and location.</p>
                    </div>
                }
                />
            </li>

            {/* Card 3: Modern Tech Stack */}
            <li className="min-h-[14rem] list-none md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]">
                <Card
                title="Modern Tech Stack"
                description="Technologies and tools I use to build innovative solutions"
                icon={CodeIcon}
                techs={techStackData}
                overlayContent={
                    <div className="text-foreground">
                    <h4 className="text-xl font-bold mb-2">Innovative Tools</h4>
                    <p className="text-sm">Leveraging cutting-edge technologies to bring your ideas to life.</p>
                    </div>
                }
                />
            </li>

            {/* Card 4: AI-Powered Solutions */}
            <li className="min-h-[14rem] list-none md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]">
                <Card
                title="AI-Powered Solutions"
                description="Specializing in intelligent automation and LLM integrations."
                icon={ZapIcon}
                href="/case-studies"
                overlayContent={
                    <div className="text-foreground">
                    <h4 className="text-xl font-bold mb-2">Smart Automation</h4>
                    <p className="text-sm">Exploring AI's potential to optimize processes and enhance user experiences.</p>
                    <p className="text-xs mt-2">(Click to see case studies)</p>
                    </div>
                }
                />
            </li>

            {/* Card 5: Ready to Collaborate */}
            <li className="min-h-[14rem] list-none md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]">
                <Card
                title="Ready to Collaborate"
                description="Let's create something amazing together"
                icon={NextJsIcon}
                glow={true}
                overlayContent={
                    <div className="text-foreground">
                    <h4 className="text-xl font-bold mb-2">Let's Connect!</h4>
                    <p className="text-sm">Eager to discuss your next big idea. Reach out and let's build the future.</p>
                    </div>
                }
                />
            </li>
            </ul>
        </div>
        </section>
    </div>
  );
}
