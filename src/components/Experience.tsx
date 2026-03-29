const experiences = [
  {
    company: "SimplifyX",
    website: "https://simplifyx.com/",
    role: "AI Developer",
    period: "Oct 2024 – Present",
    duration: "1 yr 5 mos",
    location: "Remote",
    highlights: [
      "Doc Agent: structured data extraction from document files",
      "RAG Agent: retrieval-augmented generation pipelines",
      "Multi-agent orchestration & workflow automation",
      "AI microservices with FastAPI & gRPC",
    ],
    current: true,
  },
  {
    company: "MettaDepth",
    website: "https://www.mettadepth.com/",
    role: "AI Developer",
    period: "Jan 2024 – Nov 2024",
    duration: "11 mos",
    location: "Hue, Vietnam",
    highlights: [
      "AI models for healthcare & insurance risk prediction",
      "PDF extraction pipelines for complex documents",
      "ML-driven recommendation systems",
      "AI integration with Next.js & FastAPI",
    ],
    current: false,
  },
  {
    company: "DEHA Company",
    website: null,
    role: "AI Developer — LMS Integration",
    period: "Jun 2023 – Sep 2023",
    duration: "3 Months",
    location: "Hue, Vietnam",
    highlights: [
      "Course recommendation with Vector DB & Association Rules",
      "Automated exercise generation & grading system",
      "Grammar error correction and writing feedback tool",
    ],
    current: false,
  },
  {
    company: "Brycen Vietnam",
    website: "https://brycen.com.vn/",
    role: "AI Developer Intern",
    period: "Feb 2023 – Jul 2023",
    duration: "5 Months",
    location: "Hue, Vietnam",
    highlights: [
      "NLP research: embedding, RNN, LSTM, GRU, Seq2Seq",
      "Chatbot + document summarization with LangChain",
      "Mobile chatbot app with Flutter & Firebase",
    ],
    current: false,
  },
  {
    company: "Kasetsart University",
    website: "https://www.ku.ac.th/en/community-home",
    role: "Research Intern — FarmBot",
    period: "Jun 2022 – Sep 2022",
    duration: "3 Months",
    location: "Thailand",
    highlights: [
      "YOLOv4 plant leaf counting model",
      "Image processing & dataset collection",
      "ESP8266 camera integration with Firebase",
    ],
    current: false,
  },
  {
    company: "3S Intersoft",
    website: "https://3si.vn/",
    role: "Front-End Developer Intern",
    period: "Sep 2022 – Dec 2022",
    duration: "3 Months",
    location: "Hue, Vietnam",
    highlights: [
      "Music streaming website UI (HTML/CSS/JS)",
      "Database design & functionality analysis",
      "GitHub Pages deployment",
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-xs tracking-widest uppercase text-black/40 mb-3">
          — Experience
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Where I&apos;ve{" "}
          <span className="italic font-normal">worked.</span>
        </h2>
      </div>

      <div className="space-y-px border border-black/10 bg-black/10">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className="bg-white group hover:bg-black hover:text-white transition-colors duration-300"
          >
            <div className="px-6 py-6 md:py-8">
              {/* Top row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <span className="text-xs text-black/30 group-hover:text-white/30 mt-1 font-mono w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-base font-semibold tracking-wide">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="text-xs bg-black text-white group-hover:bg-white group-hover:text-black px-2 py-0.5 transition-colors">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-black/50 group-hover:text-white/50 mt-0.5">
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}{" "}
                      — {exp.location}
                    </p>
                  </div>
                </div>
                <div className="text-right md:text-right ml-10 md:ml-0">
                  <p className="text-xs text-black/40 group-hover:text-white/40 tracking-wide">
                    {exp.period}
                  </p>
                  <p className="text-xs font-medium text-black/60 group-hover:text-white/60 uppercase tracking-widest mt-0.5">
                    {exp.duration}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="ml-10 grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1">
                {exp.highlights.map((h) => (
                  <p
                    key={h}
                    className="text-xs text-black/50 group-hover:text-white/50 flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-black/30 group-hover:bg-white/30 flex-shrink-0" />
                    {h}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
