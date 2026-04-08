import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  { school: "Indiana Wesleyan University", degree: "M.S in Computer Science", gpa: "GPA: 4.0 / 4.0" },
  { school: "Jawaharlal Nehru Technological University", degree: "B.Tech in Electrical & Electronics Engineering", gpa: "GPA: 8.7 / 10" },
];

const certificates = [
  { name: "AWS Certified Developer – Associate", issuer: "AWS", color: "from-orange-500/10 to-amber-500/10", border: "border-orange-500/20" },
  { name: "Google Cloud Associate Cloud Engineer", issuer: "Google Cloud", color: "from-blue-500/10 to-cyan-500/10", border: "border-blue-500/20" },
  { name: "Databricks Certified Associate", issuer: "Databricks", color: "from-red-500/10 to-rose-500/10", border: "border-red-500/20" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Education & Certificates</h2>
          <div className="w-12 h-1 bg-primary rounded mt-4 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{edu.school}</p>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{edu.gpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name}
              className={`p-5 rounded-2xl border ${cert.border} bg-gradient-to-br ${cert.color} text-center hover:shadow-lg transition-all`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Award size={24} className="text-primary mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
