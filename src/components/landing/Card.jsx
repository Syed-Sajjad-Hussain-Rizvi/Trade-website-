import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
	{ icon: Users, text: "+2,000 members from all over the world" },
	{ icon: TrendingUp, text: "Everything in Signals2Trade is 100% free of charge" },
	{ icon: BookOpen, text: "The best-rated trading program in the world" },
	{ icon: Globe, text: "Becoming profitable on the financial market" },
];

export const Card = () => {
	return (
		<section className="relative py-12 md:py-20 overflow-hidden hero-gradient">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center md:text-left"
					>
						<h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-black">
							WHY IS IT ?{" "}
							<span className="text-gradient">FREE</span>
						</h2>
						<p className="mb-6 text-black max-w-xl">
							My goal is to help as many people as possible to either become
							financially free or at least earn some extra money through day
							trading.
						</p>

						<ul className="space-y-3 mb-6">
							{benefits.map((b, i) => {
								const Icon = b.icon;
								return (
									<li key={i} className="flex items-center gap-3">
										<span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
											<Icon className="w-4 h-4" />
										</span>
										<span className="text-black">{b.text}</span>
									</li>
								);
							})}
						</ul>

						<div className="flex justify-center md:justify-start">
							<Button variant="cta" size="xl" className="text-white">
								Join the FREE Group
							</Button>
						</div>
					</motion.div>

					<div className="flex justify-center">
						<img
							style={{ maxHeight: "700px", height: "auto" }}
							src="https://i.pinimg.com/736x/36/1f/28/361f28c6bd3166805d7cb839d406d871.jpg"
							alt="visual"
							className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-2xl border border-border/50 shadow-sm"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Card;
