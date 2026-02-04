import React from "react";

const images = [
  "https://signals2trade.net/wp-content/uploads/2025/08/usatoday-logo-300x105-1.png.webp",
  "https://signals2trade.net/wp-content/uploads/2025/08/usinsider-logo-300x105-1.png.webp",
  "https://signals2trade.net/wp-content/uploads/2025/08/yahoo-finance-logo-300x105-1.png.webp",
  "hhttps://signals2trade.net/wp-content/uploads/2025/08/benzinga-logo-300x105-1.png.webp",
  "https://signals2trade.net/wp-content/uploads/2025/08/geekwire-logo-300x105-1.png.webp",
  "https://signals2trade.net/wp-content/uploads/2025/08/texh-bullion-logo-300x105-1.png"
];

export default function Slide({ speed = 20 }) {
  const looped = [...images, ...images];
  const duration = `${speed}s`;

  return (
    <section aria-label="image ticker" className="overflow-hidden w-full bg-white py-4">
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
            className="h-28 w-auto object-contain rounded-md shadow-sm"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

export { Slide };