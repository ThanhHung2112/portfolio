const stats = [
  { value: "3+", label: "Years of\nexperience" },
  { value: "10+", label: "Projects\ndelivered" },
  { value: "3.68", label: "University\nGPA /4.0" },
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
          <div className="grid grid-cols-2 gap-px bg-black/10 border border-black/10">
            {stats.map((s) => (
              <div key={s.value} className="bg-white p-6">
                <p className="font-serif text-4xl font-bold mb-1">{s.value}</p>
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
            I&apos;m <strong className="text-black">Le Thanh Hung</strong>, an
            AI Developer based in Hue, Vietnam. I graduated from Hue University
            with a degree in Data Science and Artificial Intelligence, and I&apos;ve
            been building production ML systems ever since.
          </p>
          <p className="text-base text-black/70 leading-relaxed">
            Currently at <strong className="text-black">Mettadepth</strong>, I
            develop AI models for healthcare and insurance risk prediction, build
            PDF extraction pipelines, design recommendation engines, and
            integrate ML into full-stack web applications using Next.js and
            FastAPI.
          </p>
          <p className="text-base text-black/70 leading-relaxed">
            My journey spans NLP research, LLM applications with LangChain,
            computer vision with YOLO, and end-to-end ML product development.
            I&apos;m passionate about pushing AI research into real-world impact.
          </p>
          <p className="text-base text-black/70 leading-relaxed">
            Beyond engineering, I aspire to pursue a{" "}
            <strong className="text-black">Master&apos;s degree</strong> and
            contribute to the research community — building innovative solutions
            that make a difference.
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
            {[
              "hung.le@mettadepth.com",
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
