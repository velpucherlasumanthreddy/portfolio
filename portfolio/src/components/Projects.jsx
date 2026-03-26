import { motion } from "framer-motion";

const projects = [
  {
    title: " React Portfolio ",
    desc: "Modern developer portfolio using React and Tailwind",
    tech: "React, Tailwind",
    github: "https://github.com/velpucherlasumanthreddy/react-portfolio.git",
    live: "#",
  },
   {
    title: "JS Calculator",
    desc: "Simple calculator application with loops concepts in JavaScript",
    tech: "HTML,CSS, JavaScript",
    github: "https://github.com/velpucherlasumanthreddy/calculator-using-js-loops-concept.git",
    live: "https://velpucherlasumanthreddy.github.io/calculator-using-js-loops-concept/",
  },
  {
    title: "Time Table",
    desc: "Time table for 10th class",
    tech: "HTML,CSS, JavaScript",
    github: "https://github.com/velpucherlasumanthreddy/class-time-table-using-html-css-js.git",
    live: "https://velpucherlasumanthreddy.github.io/class-time-table-using-html-css-js/",
  },
  {
    title: "Simple Calculator",
    desc: "Simple calculator application with basic operations",
    tech: "HTML,CSS",
    github: "https://github.com/velpucherlasumanthreddy/calculator-using-html-css-js.git",
    live: "https://velpucherlasumanthreddy.github.io/calculator-using-html-css-js/",
  },
  {
    title: "Basic Portfolio",
    desc: "My personal portfolio website using HTML, CSS, and JavaScript",
    tech: "HTML,CSS, JavaScript",
    github: "https://github.com/velpucherlasumanthreddy/my-protfolio.git",
    live: "https://velpucherlasumanthreddy.github.io/my-protfolio/",
  },

  
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">{project.desc}</p>

            <p className="text-sm text-purple-400 mb-4">
              {project.tech}
            </p>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                className="px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}