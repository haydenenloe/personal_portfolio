"use client";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Data Pipelines & ETL",
    "AWS (EC2, S2, Lambda)",
    "MongoDB",
    "Airflow",
    "dbt",
    "Snowflake",
    "React",
    "Node.js",
    "Docker",
    "Python",
    "SQL",
    "ML models",
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
              I’m Hayden Enloe, a master’s student in Information Systems at
              BYU, with a strong focus on data engineering and full-stack
              development. I love building scalable data pipelines, creating
              efficient ETL processes, and deploying solutions that make complex
              data accessible and actionable. On the development side, I enjoy
              crafting intuitive, user-friendly web applications by combining my
              back-end expertise with front-end design. Whether it’s managing
              data workflows with tools like Spark and AWS or building
              full-stack applications with React and Node.js, I’m passionate
              about leveraging technology to solve problems and create impactful
              solutions.{" "}
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
