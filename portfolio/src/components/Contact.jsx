import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto">
        
        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-8 rounded-2xl border border-gray-700 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/velpucherlasumanthreddy?tab=repositories"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/velpucherla-sumanth-reddy-6b11733b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sumanthsun77@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}