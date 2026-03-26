import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative bg-black overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* 👨‍💻 Content */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold z-10"
      >
       <h1 className="text-5xl md:text-6xl font-bold text-white">
  <Typewriter
    words={["HI I'M V.SUMANTH REDDY"]}
    loop={1}        // ✅ runs ONLY once
    cursor
    cursorStyle="|"
    typeSpeed={100}
    deleteSpeed={0} // ✅ no deleting
  />
</h1>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg md:text-2xl text-gray-300 z-10"
      >
        Full Stack Developer | Java | React | TailwindCss
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-2 text-gray-500 max-w-xl z-10"
      >
        Building scalable, modern, and impactful digital experiences.
      </motion.p>

      {/* 🚀 Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-6 space-x-4 z-10"
      >
        <a
          href="#projects"
          className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
           className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 transition"
        >
          Contact Me
        </a>
      </motion.div>

    </section>
  );
}