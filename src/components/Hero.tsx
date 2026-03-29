import Image from "next/image";
import { GitHubIcon, KaggleIcon, LinkedInIcon } from "./SocialIcons";

const traits = [
  "Build production-ready ML pipelines",
  "Turn raw data into actionable insights",
  "Design NLP systems that understand context",
  "Ship AI-powered web applications",
];

const social = [
  { label: "GitHub", href: "https://github.com/thanhhung2112", Icon: GitHubIcon },
  { label: "Kaggle", href: "https://kaggle.com/leewanhung", Icon: KaggleIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/ThanhHung2112/", Icon: LinkedInIcon },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-20 pb-12 px-6 max-w-6xl mx-auto">
      {/* Main hero content — two column on desktop */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-12 py-8">
        {/* Left: text content */}
        <div className="flex-1 flex flex-col gap-7">
          {/* Status badge */}
          <div className="flex items-center gap-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-black/50">
              Available for opportunities
            </span>
          </div>

          {/* Headline */}
          <div>
            <p className="text-sm md:text-base text-black/40 tracking-wide mb-1">
              Hello! I&apos;m
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,8vw,6.5rem)] leading-none font-bold tracking-tight">
              Le Thanh
              <br />
              <span className="italic font-normal">Hung.</span>
            </h1>
            <p className="text-sm text-black/30 tracking-widest mt-1">— Bean</p>
          </div>

          {/* Role + tagline */}
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="text-base md:text-lg font-semibold tracking-wide">
                AI Developer
              </span>
              <span className="text-black/30">✦</span>
              <span className="text-base md:text-lg text-black/40 font-light">
                Data Scientist
              </span>
            </div>
            <p className="text-sm md:text-base text-black/60 leading-relaxed">
              I build intelligent systems at the intersection of machine learning
              and software engineering — from NLP pipelines to production AI
              applications.
            </p>
          </div>

          {/* Traits */}
          <ul className="flex flex-col gap-2">
            {traits.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 text-sm text-black/60"
              >
                <span className="text-black">✓</span>
                {t}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black text-white text-sm px-6 py-3 hover:bg-black/80 transition-colors"
            >
              Let&apos;s Talk
            </a>
            <a
              href="/THANH_HUNG_RESUME (2).pdf"
              download
              className="inline-flex items-center gap-2 text-sm border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
            >
              Download CV
              <span className="text-xs">↓</span>
            </a>
          </div>
        </div>

        {/* Right: avatar */}
        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <div className="relative w-64 h-72 md:w-80 md:h-96 lg:w-96 lg:h-[480px]">
            {/* Decorative border offset */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-black/15" />
            {/* Image container */}
            <div className="relative w-full h-full overflow-hidden bg-black/5">
              <Image
                src="/avatar.png"
                alt="Le Thanh Hung"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer row: social + scroll hint */}
      <div className="flex items-center justify-between pt-8 border-t border-black/10">
        <ul className="flex items-center gap-5">
          {social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-black/40 hover:text-black transition-colors"
              >
                <s.Icon className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#about"
          className="flex items-center gap-2 text-xs text-black/40 hover:text-black transition-colors"
        >
          <span>Scroll</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
}
