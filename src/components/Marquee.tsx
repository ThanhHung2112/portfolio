const tags = [
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "Data Science",
  "FastAPI",
  "Next.js",
  "Python",
  "PyTorch",
  "LangChain",
  "RAG",
  "Vector Database",
  "Recommendation Systems",
  "Healthcare AI",
  "MLOps",
];

export default function Marquee() {
  const doubled = [...tags, ...tags];

  return (
    <div className="border-y border-black bg-black text-white overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((tag, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-6">
            <span className="text-sm tracking-widest uppercase font-light">
              {tag}
            </span>
            <span className="text-white/30 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
