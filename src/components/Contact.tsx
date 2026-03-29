import { GitHubIcon, KaggleIcon, LinkedInIcon, WhatsAppIcon } from "./SocialIcons";

const links = [
  {
    label: "Email",
    value: "lthung2112@gmail.com",
    href: "mailto:lthung2112@gmail.com",
    Icon: null,
  },
  {
    label: "GitHub",
    value: "github.com/thanhhung2112",
    href: "https://github.com/thanhhung2112",
    Icon: GitHubIcon,
  },
  {
    label: "Kaggle",
    value: "kaggle.com/leewanhung",
    href: "https://kaggle.com/leewanhung",
    Icon: KaggleIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ThanhHung2112",
    href: "https://linkedin.com/in/ThanhHung2112/",
    Icon: LinkedInIcon,
  },
  {
    label: "WhatsApp",
    value: "+84 869 694 712",
    href: "https://wa.me/84869694712",
    Icon: WhatsAppIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="border border-black/10">
        {/* Top: heading area */}
        <div className="p-8 md:p-12 border-b border-black/10">
          <p className="text-xs tracking-widest uppercase text-black/40 mb-4">
            — Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Let&apos;s work
            <br />
            <span className="italic font-normal">together.</span>
          </h2>
          <p className="text-base text-black/60 max-w-lg leading-relaxed">
            I&apos;m open to full-time roles, research collaborations, and
            freelance AI/ML projects. Whether you have a dataset problem or want
            to explore AI opportunities — let&apos;s talk.
          </p>
        </div>

        {/* Contact links */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-px bg-black/10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-white p-6 group hover:bg-black hover:text-white transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                {link.Icon && (
                  <link.Icon className="w-3.5 h-3.5 text-black/40 group-hover:text-white/40" />
                )}
                <p className="text-xs tracking-widest uppercase text-black/40 group-hover:text-white/40">
                  {link.label}
                </p>
              </div>
              <p className="text-sm font-medium group-hover:text-white">
                {link.value}
              </p>
              <span className="text-xs text-black/30 group-hover:text-white/30 mt-3 inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
