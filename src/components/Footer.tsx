import { GitHubIcon, KaggleIcon, LinkedInIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-black/30 tracking-wide">
          © {year} Le Thanh Hung. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {[
            { label: "GitHub", href: "https://github.com/thanhhung2112", Icon: GitHubIcon },
            { label: "Kaggle", href: "https://kaggle.com/leewanhung", Icon: KaggleIcon },
            { label: "LinkedIn", href: "https://linkedin.com/in/ThanhHung2112/", Icon: LinkedInIcon },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-black/30 hover:text-black transition-colors"
            >
              <s.Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-black/20">
          Hue, Vietnam · AI Developer
        </p>
      </div>
    </footer>
  );
}
