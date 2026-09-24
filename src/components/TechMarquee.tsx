import { profile } from '../data/profile'

export default function TechMarquee() {
  const items = [...profile.techMarquee, ...profile.techMarquee]

  return (
    <div className="relative overflow-hidden border-y border-border bg-card/60 py-4">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-8">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-8" aria-hidden={dup === 1}>
            {items.map((item, i) => (
              <span key={`${dup}-${i}`} className="flex items-center gap-8 font-mono text-xs tracking-wider text-muted">
                {item}
                <span className="text-accent">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_38s_linear_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  )
}
