import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-6 px-6 md:px-20">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* LEFT */}
        <h2 className="text-lg font-semibold text-cyan-400">
          V.Sumanth Reddy
        </h2>

        {/* CENTER */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} All rights reserved
        </p>

        {/* RIGHT (SOCIAL ICONS) */}
        <div className="flex gap-6 text-xl">
          
          <a
            href="https://github.com/velpucherlasumanthreddy?tab=repositories"
            className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/velpucherla-sumanth-reddy-6b11733b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:sumanthsun77@gmail.com"
            className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
          >
            <FaEnvelope />



          </a>

        </div>
      </div>

    </footer>
  );
}