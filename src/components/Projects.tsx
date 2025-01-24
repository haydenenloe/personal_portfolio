"use client";
// This component displays a grid of project cards with hover effects
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Fraud Detection ML Model",
    description: "The fraud detection model utilized advanced classification algorithms to identify potentially fraudulent transactions, enhancing the platform’s security.",
    tech: ["Python", "Machine Learning", "Scikit-Learn"],
    image: "/images/colab_image.jpeg",
    github: "",
    demo: "https://colab.research.google.com/drive/1ehAIyB_6ThU0mua3nXLXFDIsreTXB8eV?usp=sharing",
  },
  {
    title: "Recommendation ML Model",
    description:
      "The hybrid recommendation system integrated item-based and user-based collaborative filtering techniques, leveraging Python, Scikit-Learn, and Pandas for data processing and model development. ",
    tech: ["Python", "Machine Learning", "Scikit-Learn"],
    image: "/images/colab_image.jpeg",
    github: "",
    demo: "https://colab.research.google.com/drive/1ehAIyB_6ThU0mua3nXLXFDIsreTXB8eV?usp=sharing",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
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
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="text-blue-500 hover:underline"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
