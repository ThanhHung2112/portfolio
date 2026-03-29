const projects = [
  {
    title: "Healthcare Risk Prediction System",
    category: "Machine Learning",
    description:
      "AI models for healthcare and insurance risk prediction using classical ML algorithms. Features feature engineering pipelines, model evaluation dashboards, and REST API integration via FastAPI.",
    tags: ["Python", "Scikit-learn", "FastAPI", "Next.js"],
    year: "2024",
    featured: true,
    link: "https://github.com/thanhhung2112",
  },
  {
    title: "E-Commerce Review Dynamics",
    category: "NLP · Data Science",
    description:
      "Sentiment classification on e-commerce reviews using K-Means clustering, N-Grams tokenization, and Cosine Similarity. Includes product recommendation and customer value analysis in a Streamlit demo.",
    tags: ["Python", "NLP", "Clustering", "Streamlit"],
    year: "2023",
    featured: true,
    link: "https://github.com/thanhhung2112",
  },
  {
    title: "Intelligent LMS Platform",
    category: "NLP · Recommendation",
    description:
      "Course recommendation engine using Vector Database and Association Rule mining. Automated exercise generation, grading pipelines, and grammar error correction with feedback for written compositions.",
    tags: ["LangChain", "Vector DB", "NLP", "Python"],
    year: "2023",
    featured: false,
    link: "https://github.com/thanhhung2112",
  },
  {
    title: "PDF Intelligence Extractor",
    category: "Document AI",
    description:
      "Optimized PDF extraction pipeline for complex document understanding. Handles multi-column layouts, tables, and nested structures for efficient information retrieval at scale.",
    tags: ["Python", "FastAPI", "RAG", "LangChain"],
    year: "2024",
    featured: false,
    link: "https://github.com/thanhhung2112",
  },
  {
    title: "FarmBot — Leaf Counter",
    category: "Computer Vision",
    description:
      "YOLOv4-based plant leaf counting model with ESP8266 camera integration. Real-time inference pipeline uploading results to Firebase for remote agricultural monitoring.",
    tags: ["YOLOv4", "Python", "IoT", "Firebase"],
    year: "2022",
    featured: false,
    link: "https://github.com/thanhhung2112",
  },
  {
    title: "Document Chatbot",
    category: "LLM · NLP",
    description:
      "LangChain-powered chatbot with document summarization capabilities. Built with Streamlit for web interface and Flutter for cross-platform mobile deployment with Firebase backend.",
    tags: ["LangChain", "Streamlit", "Flutter", "Firebase"],
    year: "2023",
    featured: false,
    link: "https://github.com/thanhhung2112",
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs tracking-widest uppercase text-black/40 mb-3">
            — Projects
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Selected{" "}
            <span className="italic font-normal">work.</span>
          </h2>
        </div>
        <a
          href="https://github.com/thanhhung2112"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-black/40 hover:text-black transition-colors flex items-center gap-2"
        >
          View all on GitHub →
        </a>
      </div>

      {/* Featured projects — large cards */}
      <div className="grid md:grid-cols-2 gap-px bg-black/10 border border-black/10 mb-px">
        {featured.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-8 md:p-10 group flex flex-col gap-6 hover:bg-black/90 transition-colors"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs tracking-widest uppercase text-white/40">
                {p.category}
              </span>
              <span className="text-xs text-white/30 font-mono">{p.year}</span>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-medium leading-snug mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {p.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-white/20 text-white/50 px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs tracking-widest uppercase text-white/30 flex items-center gap-2 group-hover:gap-3 transition-all">
              See Details
              <span>↗</span>
            </span>
          </a>
        ))}
      </div>

      {/* Rest — compact list */}
      <div className="border border-black/10 border-t-0 bg-black/10">
        {rest.map((p, i) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 bg-white hover:bg-black hover:text-white transition-colors duration-300 group ${
              i < rest.length - 1 ? "border-b border-black/10" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="text-xs text-black/30 group-hover:text-white/30 font-mono mt-0.5">
                {String(i + 3).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="text-xs text-black/40 group-hover:text-white/40 mt-0.5">
                  {p.category}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-8 sm:ml-0">
              <div className="hidden md:flex gap-2">
                {p.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-black/40 group-hover:text-white/40 border border-black/15 group-hover:border-white/20 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-black/30 group-hover:text-white/30 font-mono">
                {p.year}
              </span>
              <span className="text-xs group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
