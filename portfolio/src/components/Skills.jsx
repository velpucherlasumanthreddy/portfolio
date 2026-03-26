import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "100%" },
  { name: "CSS", level: "90%" },
  { name: "React", level: "75%" },
  { name: "JavaScript", level: "70%" },
  { name: "Tailwind CSS", level: "70%" },
  { name: "Git", level: "50%" },
  { name: "GitHub", level: "50%" },
  { name: "Spring Boot", level: "30%" },
  { name: "Java", level: "25%" },
  { name: "MySQL", level: "25%" },
  { name: "MongoDB", level: "10%" },
  
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Skills
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1 }}
                className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}