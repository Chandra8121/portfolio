import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-3xl text-center relative z-10">
        <motion.div
          className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <span className="font-display text-2xl font-bold gradient-text">CS</span>
        </motion.div>

        <motion.p
          className="text-sm font-medium text-primary mb-4 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Python Full Stack & AI Engineer
        </motion.p>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm <span className="gradient-text">Chandra S</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Full-stack engineer turning complex data into smart, scalable products — from robust APIs to production-ready ML systems.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#experience"
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            View Experience
          </a>
          <a
            href="#connect"
            className="px-8 py-3 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-muted transition-all"
          >
            Let's Connect
          </a>
        </motion.div>

        <motion.div
          className="flex gap-5 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="https://github.com/chandra8121" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:iamchandra29@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} className="text-muted-foreground/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
