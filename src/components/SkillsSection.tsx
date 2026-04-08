import { motion } from "framer-motion";
import {
  SiPytorch, SiPython, SiFlask, SiReact, SiDocker,
  SiAmazonwebservices, SiPostgresql, SiMysql, SiSnowflake,
  SiSelenium, SiGit, SiJenkins, SiFastapi
} from "react-icons/si";
import { Brain, Cloud, Database, Bot, Settings, ShieldCheck } from "lucide-react";

const skillCategories = [
  {
    title: "AI & ML",
    icon: <Brain size={20} />,
    color: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/20",
    skills: [
      { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" /> },
      { name: "Hugging Face", icon: <span>🤗</span> },
      { name: "NLP", icon: null },
      { name: "MLflow", icon: null },
      { name: "Model Optimization", icon: null },
    ],
  },
  {
    title: "Full Stack",
    icon: <SiPython size={18} />,
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "Flask", icon: <SiFlask className="text-foreground" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    color: "from-orange-500/10 to-amber-500/10",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "AWS", icon: <SiAmazonwebservices className="text-[#FF9900]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "CI/CD", icon: null },
      { name: "Jenkins", icon: <SiJenkins className="text-[#D24939]" /> },
      { name: "CloudWatch", icon: null },
    ],
  },
  {
    title: "Data",
    icon: <Database size={20} />,
    color: "from-emerald-500/10 to-green-500/10",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "Snowflake", icon: <SiSnowflake className="text-[#29B5E8]" /> },
      { name: "SQL Optimization", icon: null },
      { name: "ETL Pipelines", icon: null },
    ],
  },
  {
    title: "Automation",
    icon: <Bot size={20} />,
    color: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "Selenium", icon: <SiSelenium className="text-[#43B02A]" /> },
      { name: "BeautifulSoup", icon: null },
      { name: "Scheduled Jobs", icon: null },
      { name: "Data Ingestion", icon: null },
    ],
  },
  {
    title: "Practices",
    icon: <ShieldCheck size={20} />,
    color: "from-slate-500/10 to-gray-500/10",
    borderColor: "border-slate-500/20",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "Code Reviews", icon: null },
      { name: "Testing (pytest)", icon: null },
      { name: "Blue-Green Deploys", icon: null },
      { name: "RBAC", icon: null },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-12 h-1 bg-primary rounded mt-4 mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Technologies and tools I use to build scalable, intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={`p-6 rounded-2xl border ${cat.borderColor} bg-gradient-to-br ${cat.color} hover:shadow-lg transition-all duration-300 group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">{cat.icon}</div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-xs px-3 py-2 rounded-lg bg-background/80 text-foreground flex items-center gap-1.5 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    {skill.icon && <span className="text-sm">{skill.icon}</span>}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
