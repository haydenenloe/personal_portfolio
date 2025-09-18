"use client";
// This component displays a grid of project cards with hover effects
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Enterprise Fraud Detection Platform",
    description: "Led cross-functional team to architect and deploy ML-powered fraud detection system using advanced classification algorithms. Reduced false positives by 45% and increased detection accuracy to 94%, processing 100K+ daily transactions. Delivered end-to-end solution from stakeholder requirements to production deployment.",
    tech: ["Python", "AWS", "Machine Learning", "Team Leadership"],
    image: "/images/colab_image.jpeg",
    github: "https://colab.research.google.com/drive/1ehAIyB_6ThU0mua3nXLXFDIsreTXB8eV?usp=sharing",
    demo: "https://www.loom.com/share/b717fef9ac70425bb73813fa6e5cd1e7",
  },
  {
    title: "Scalable Recommendation Engine",
    description: "Designed and implemented hybrid recommendation system integrating collaborative filtering and content-based approaches. Increased user engagement by 35% and click-through rates by 28%. Managed product strategy, coordinated with engineering teams, and ensured seamless client integration across multiple platforms.",
    tech: ["Python", "dbt", "Product Strategy", "Client Integration"],
    image: "/images/colab_image.jpeg",
    github: "https://colab.research.google.com/drive/1V8S1uKNXQzr5phUV919DBa2kpN_U3WCf?usp=sharing",
    demo: "https://www.loom.com/share/b717fef9ac70425bb73813fa6e5cd1e7",
  },
  {
    title: "AI-Powered IT Automation Platform",
    description: "Led development of intelligent automation platform that streamlines IT workflows using AI-assisted task generation and issue tracking. Built microservices architecture with FastAPI backend, React frontend, and Celery workers for asynchronous processing. Integrated OpenAI and Jira APIs to automate ticket creation and project management, reducing manual IT operations by 40% and improving team productivity. Project was selected as a finalist in the national AIS competition.",
    tech: ["FastAPI", "React", "Celery", "OpenAI", "Jira API"],
    image: "/images/aislogo.jpeg",
    github: "https://github.com/JosephFuge/ais-ai-it-automation",
    demo: "https://www.loom.com/share/4c22261630a1437991495d41283fab4f?sid=311d2f83-988d-4da4-b4af-7b1b2b0cf384",
    pitch: "https://www.canva.com/design/DAGirDGnUlI/nOFdmcTPUHkUcRLcCiYMoA/edit?utm_content=DAGirDGnUlI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  )}
                  {(project as any).pitch && (
                    <a
                      href={(project as any).pitch}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pitch
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
