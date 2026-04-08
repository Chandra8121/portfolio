import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const ConnectSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:iamchandra29@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailto);
  };

  return (
    <section id="connect" className="py-24 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Let's Connect</h2>
          <div className="w-12 h-1 bg-primary rounded mt-4 mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Interested in collaboration or have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div className="space-y-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <a href="mailto:iamchandra29@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">iamchandra29@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">Texas, USA</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="https://github.com/chandra8121" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="space-y-4" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div>
              <label className="text-xs font-medium text-muted-foreground block mb-1.5">Name</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground block mb-1.5">Email</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground block mb-1.5">Message</label>
              <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25">
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
