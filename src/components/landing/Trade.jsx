import React from "react";

const images = [
	"https://signals2trade.net/wp-content/uploads/2024/08/CHFJPY_sell1.png.webp",
	"https://signals2trade.net/wp-content/uploads/2024/08/NAS100_sell2.png.webp",
	"https://signals2trade.net/wp-content/uploads/2024/08/XAUUSD_buy2.png.webp",
	"https://signals2trade.net/wp-content/uploads/2024/08/GBPUSD_sell1.png.webp",
	"https://signals2trade.net/wp-content/uploads/2024/08/GBPJPY_sell1.png.webp",
	"https://signals2trade.net/wp-content/uploads/2024/08/US30_sell3.png.webp",
];

export const Trade = ({ speed = 20 }) => {
	const looped = [...images, ...images];
	const duration = `${speed}s`;

	return (
		<section
			aria-label="image ticker"
			className="overflow-hidden w-full py-4 bg-white"
		>
			<style>{`
        .ticker-track {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          width: max-content;
          animation: ticker ${duration} linear infinite;
        }
        .ticker-track:hover { animation-play-state: paused; }
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
						className="h-12 w-auto object-cover rounded-md shadow-sm"
						loading="lazy"
					/>
				))}
			</div>
		</section>
	);
};

export default Trade;