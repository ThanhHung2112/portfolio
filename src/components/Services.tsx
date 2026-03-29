const services = [
  {
    id: "01",
    title: "Machine Learning\n& AI Modeling",
    description:
      "End-to-end ML pipelines from data preprocessing to production deployment. Specializing in predictive modeling, classification, and regression.",
    dark: true,
  },
  {
    id: "02",
    title: "Natural Language\nProcessing",
    description:
      "Building NLP systems including text classification, summarization, chatbots, grammar correction, and RAG applications with LLMs.",
    dark: false,
  },
  {
    id: "03",
    title: "Recommendation\nSystems",
    description:
      "Designing personalized recommendation engines using collaborative filtering, vector databases, and association rules.",
    dark: false,
  },
  {
    id: "04",
    title: "AI-Powered\nWeb Apps",
    description:
      "Integrating ML models into full-stack applications with Next.js/React frontends and FastAPI backends for seamless user experiences.",
    dark: false,
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs tracking-widest uppercase text-black/40 mb-3">
            — What I&apos;m Offering
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            My Core
            <br />
            <span className="italic font-normal">Expertise</span>
          </h2>
        </div>
        <p className="text-sm text-black/50 max-w-xs md:text-right leading-relaxed">
          Focused on building intelligent systems that solve real problems with
          clarity and precision.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
        {services.map((s) => (
          <div
            key={s.id}
            className={`p-8 flex flex-col gap-6 group transition-colors duration-300 ${
              s.dark
                ? "bg-black text-white"
                : "bg-white hover:bg-black hover:text-white"
            }`}
          >
            <span
              className={`text-xs tracking-widest ${
                s.dark ? "text-white/40" : "text-black/30 group-hover:text-white/40"
              }`}
            >
              {s.id}
            </span>
            <h3
              className={`font-serif text-xl leading-snug whitespace-pre-line font-medium`}
            >
              {s.title}
            </h3>
            <p
              className={`text-sm leading-relaxed flex-1 ${
                s.dark ? "text-white/60" : "text-black/50 group-hover:text-white/60"
              }`}
            >
              {s.description}
            </p>
            <span
              className={`text-xs tracking-widest uppercase flex items-center gap-2 ${
                s.dark ? "text-white/50" : "text-black/30 group-hover:text-white/50"
              }`}
            >
              Read More
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
