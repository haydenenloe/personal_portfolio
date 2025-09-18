"use client";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Python & SQL",
    "AWS Cloud Architecture",
    "dbt & Data Pipelines",
    "Docker & FastAPI",
    "React & Modern Frontend",
    "Product Strategy",
    "Stakeholder Communication",
    "Agile Management",
    "Cross-functional Leadership",
    "Technical Problem-solving",
    "Business Analytics",
    "Client Integration",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8">
              I'm a Technical Product Leader who architects and launches high-impact software and analytics products that drive measurable business results. I excel at guiding cross-functional teams, aligning complex business needs with scalable technical solutions, and delivering end-to-end products from conception to production.
            </p>
            <p className="text-lg mb-8">
              My expertise spans building robust data infrastructure with AWS, Python, and dbt, deploying cloud-first architectures, and leading rapid product development in fast-paced environments. I thrive at transforming complex technical challenges into deployed solutions while maintaining strong client focus and stakeholder communication. Whether managing product strategy, driving integrations, or rapidly learning new technologies, I consistently deliver outcomes that combine technical excellence with business impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
