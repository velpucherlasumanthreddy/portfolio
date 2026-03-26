import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-400 mb-4">
            I'm a passionate Full Stack Developer who loves building modern,
            scalable, and high-performance web applications.
          </p>

          <p className="text-gray-400 mb-6">
            I enjoy solving complex problems and continuously learning new
            technologies to stay ahead in the tech world.
          </p>

          {/* STATS */}
          <div className="flex gap-6 mt-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-400">5+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400">5+</h3>
              <p className="text-gray-400 text-sm">Technologies</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-pink-400">1+</h3>
              <p className="text-gray-400 text-sm">Years Learning</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE (IMAGE / CARD) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 p-[2px]">
            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
              <img
  src={profile}
  alt="profile"
  className="w-full h-full object-cover rounded-2xl"
/>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}