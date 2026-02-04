import React from "react";
import { motion } from "framer-motion";
import { Check, Users, TrendingUp, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
	{ icon: Users, text: "+2,000 members from all over the world" },
	{ icon: TrendingUp, text: "Everything in Signals2Trade is 100% free of charge" },
	{ icon: BookOpen, text: "The best-rated trading program in the world" },
	{ icon: Globe, text: "Becoming profitable on the financial market" },
];

export const Hero = () => {
	return (
		<section className="relative py-12 md:py-20 overflow-hidden hero-gradient my-10">
			<div className="container relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center md:text-left"
					>
						<h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-6 text-black">
							COPY{" "}
							<span className="text-gradient">MY PREMIUM SIGNALS FOR FREE</span> AND
							PROFIT FROM IT EVERY DAY
						</h1>

						<ul className="space-y-4 mb-8 text-center md:text-left text-black max-w-xl mx-auto md:mx-0">
							{benefits.map((benefit, index) => (
								<motion.li
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3 + index * 0.1 }}
									className="flex items-start gap-3"
								>
									<div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
										<Check className="w-4 h-4 text-black" />
									</div>
									<span className="text-sm md:text-base">{benefit.text}</span>
								</motion.li>
							))}
						</ul>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
							className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
						>
							<Button variant="cta" size="xl" className="text-white">
								Join the FREE Group
							</Button>
						</motion.div>
					</motion.div>

					<div className="w-full flex justify-center">
						<video
							controls
							className="w-full max-w-lg aspect-video rounded-2xl border border-border/50 object-cover"
						>
							<source
								src="https://signals2trade.net/wp-content/uploads/2026/01/WhatsApp-Video-2026-01-18-at-5.31.31-PM.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
