const stats = [
  { value: "3+", label: "Years of\nexperience" },
  { value: "10+", label: "Projects\ndelivered" },
  { value: "2", label: "International\nexperiences" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: section label + headline */}
        <div>
          <p className="text-xs tracking-widest uppercase text-black/40 mb-6">
            — About Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Turning complex data
            <br />
            into{" "}
            <span className="italic font-normal">intelligent</span> systems.
          </h2>

          {/* Stats */}
          <div className="flex border-t border-b border-black/10 divide-x divide-black/10">
            {stats.map((s) => (
              <div key={s.value} className="flex-1 py-6 px-5 first:pl-0">
                <p className="font-serif text-4xl font-bold leading-none mb-2">{s.value}</p>
                <p className="text-xs text-black/50 whitespace-pre-line leading-relaxed">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: bio text */}
        <div className="space-y-5 pt-12">
          <p className="text-base text-black/70 leading-relaxed">
            I&apos;m <strong className="text-black">Le Thanh Hung</strong> — an
            AI Developer from Hue, Vietnam, specializing in building intelligent
            systems that go beyond prototypes into production.
          </p>
          <p className="text-base text-black/70 leading-relaxed">
            Currently at{" "}
            <a
              href="https://simplifyx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              SimplifyX
            </a>
            , I architect multi-agent systems, RAG pipelines, and AI
            microservices — shipping real-world AI with FastAPI and gRPC.
            Previously built ML models for healthcare risk prediction at{" "}
            <a
              href="https://www.mettadepth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              MettaDepth
            </a>
            .
          </p>
          <p className="text-base text-black/70 leading-relaxed">
            My work spans NLP, LLMs, computer vision, and full-stack AI
            integration. I&apos;ve shipped projects across healthcare, education,
            and automation — and did international research at Kasetsart
            University, Thailand.
          </p>
          <p className="text-base text-black/70 leading-relaxed">
            I&apos;m driven by the gap between AI research and real impact.
            Next step:{" "}
            <strong className="text-black">Master&apos;s degree</strong> and
            deeper contribution to the research community.
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
            {[
              "lthung2112@gmail.com",
              "Hue, Vietnam",
            ].map((item) => (
              <span
                key={item}
                className="text-xs border border-black/20 px-3 py-1.5 text-black/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
