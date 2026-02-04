import React from "react";
import { motion } from "framer-motion";

const reasons = [
	{
		img: "https://signals2trade.net/wp-content/uploads/2026/01/2024-Best-Forex-Broker-of-the-Year-award-badge-from-ProFX-Awards-Dubai.webp",
	},
	{
		img: "https://signals2trade.net/wp-content/uploads/2026/01/2024-Most-Trusted-Forex-Broker-of-the-Year-%E2%80%93-ProFX-Awards-Dubai.webp",
	},
	{
		img: "https://signals2trade.net/wp-content/uploads/2026/01/forex-affliliate-broker-reward-dubai.webp",
	},
	{
		img: "https://signals2trade.net/wp-content/uploads/2026/01/fastest-nigeria-expo.webp",
	},
	{
		img: "https://signals2trade.net/wp-content/uploads/2026/01/crypto-technoloy-reward-egypt-expo.webp",
	},
	{
		img: "https://signals2trade.net/wp-content/uploads/2026/01/fastest-nigeria-expo.webp",
	},
];

export const WhyFree = () => {
	return (
		<section id="why-free" className="py-12 md:py-20 bg-white">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-8"
				>
					<h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
						My <span className="text-gradient">Goals</span>
					</h2>
					<p className="text-sm md:text-base text-black max-w-2xl mx-auto">
						Helping people become financially free by sharing free signals.
					</p>
				</motion.div>

				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center justify-items-center">
					{reasons.map((reason, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.06 }}
							className="flex items-center justify-center p-3 bg-white rounded-lg"
						>
							<img
								src={reason.img}
								alt={`reason-${index}`}
								className="h-25 md:h-20 w-auto object-contain"
								loading="lazy"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyFree;
