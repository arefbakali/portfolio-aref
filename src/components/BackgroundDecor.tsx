const POINTS = [
  { x: 6, y: 22 }, { x: 18, y: 8 }, { x: 42, y: 15 }, { x: 58, y: 6 },
  { x: 78, y: 18 }, { x: 92, y: 10 }, { x: 12, y: 46 }, { x: 33, y: 38 },
  { x: 64, y: 42 }, { x: 88, y: 52 }, { x: 8, y: 74 }, { x: 26, y: 88 },
  { x: 48, y: 68 }, { x: 71, y: 82 }, { x: 94, y: 76 }, { x: 55, y: 92 },
]

const LINES: [number, number][] = [
  [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [6, 7], [7, 8], [8, 9],
  [10, 11], [11, 12], [12, 13], [13, 14], [7, 12], [3, 8],
]

export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-32 left-1/4 h-[36rem] w-[36rem] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-glow-1), transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-glow-2), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-glow-1), transparent 70%)' }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" preserveAspectRatio="none">
        {LINES.map(([a, b], i) => (
          <line
            key={i}
            x1={`${POINTS[a].x}%`}
            y1={`${POINTS[a].y}%`}
            x2={`${POINTS[b].x}%`}
            y2={`${POINTS[b].y}%`}
            stroke="var(--color-accent-solid)"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        ))}
        {POINTS.map((p, i) => (
          <circle key={i} cx={`${p.x}%`} cy={`${p.y}%`} r={i % 3 === 0 ? 2 : 1.4} fill="var(--color-accent-solid)" fillOpacity="0.5" />
        ))}
      </svg>
    </div>
  )
}
