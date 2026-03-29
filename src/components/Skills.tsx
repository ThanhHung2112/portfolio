const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "R", "Dart", "PHP", "HTML/CSS"],
  },
  {
    category: "ML / DL Frameworks",
    skills: ["PyTorch", "TensorFlow", "Keras", "JAX", "Scikit-learn"],
  },
  {
    category: "NLP & AI",
    skills: ["LangChain", "Hugging Face", "spaCy", "NLTK", "OpenAI API", "RAG", "Vector DB"],
  },
  {
    category: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "BigData"],
  },
  {
    category: "Web & Mobile",
    skills: ["Next.js", "React", "FastAPI", "Flutter", "Laravel", "Bootstrap"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "Firebase", "MySQL", "SQL Server", "GitHub Actions"],
  },
];

const certifications = [
  {
    title: "Internship Certificate — Short-Term Research on ASEAN+6",
    org: "Kasetsart University, Thailand",
    year: "2022",
  },
  {
    title: "National Final Round — VietFuture Award",
    org: "VietFuture",
    year: "2023",
  },
  {
    title: "Data Science & Artificial Intelligence — Excellent",
    org: "Engineer's Degree · School of Engineering & Technology, Hue University — GPA 3.66/4.0",
    year: "2020–2025",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-xs tracking-widest uppercase text-black/40 mb-3">
          — Skills & Education
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Tools &{" "}
          <span className="italic font-normal">expertise.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Skills grid */}
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs tracking-widest uppercase text-black/40 mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs border border-black/15 px-3 py-1.5 text-black/70 hover:bg-black hover:text-white hover:border-black transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications */}
        <div>
          <p className="text-xs tracking-widest uppercase text-black/40 mb-6">
            Education & Awards
          </p>
          <div className="space-y-px border border-black/10 bg-black/10">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium leading-snug mb-1">
                      {cert.title}
                    </p>
                    <p className="text-xs text-black/50">{cert.org}</p>
                  </div>
                  <span className="text-xs font-mono text-black/30 flex-shrink-0">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div className="mt-8">
            <p className="text-xs tracking-widest uppercase text-black/40 mb-4">
              Soft Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Self-directed learning",
                "Team collaboration",
                "Technical presentation",
                "Time management",
                "Research mindset",
                "English proficiency",
              ].map((s) => (
                <span
                  key={s}
                  className="text-xs border border-black/15 px-3 py-1.5 text-black/60"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
