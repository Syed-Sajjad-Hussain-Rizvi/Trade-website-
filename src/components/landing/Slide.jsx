import React from "react";

const images = [
  "https://picsum.photos/id/1011/300/120",
  "https://picsum.photos/id/1015/300/120",
  "https://picsum.photos/id/1025/300/120",
  "https://picsum.photos/id/1035/300/120",
  "https://picsum.photos/id/1041/300/120",
  "https://picsum.photos/id/1050/300/120",
];

export default function Slide({ speed = 20 }) {
  const looped = [...images, ...images];
  const duration = `${speed}s`;

  return (
    <section aria-label="image ticker" className="overflow-hidden w-full py-4">
      <style>{`
        .ticker-track {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          width: max-content;
          animation: ticker ${duration} linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="ticker-track">
        {looped.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`ticker-${idx}`}
            className="h-28 w-auto object-cover rounded-md shadow-sm"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

export { Slide };