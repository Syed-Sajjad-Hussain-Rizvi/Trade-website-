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

export const CardLeft = () => {
	return (
		<section className="py-12 md:py-20 overflow-hidden hero-gradient">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					{/* Mobile: image first, Desktop: image right */}
					<div className="w-full flex justify-center order-first lg:order-last">
						<img
							style={{ maxHeight: "700px", height: "auto" }}
							src="https://i.pinimg.com/1200x/09/67/fa/0967fa28073421e9192564eee2d04f6d.jpg"
							alt="visual"
							className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-2xl border border-border/50 shadow-sm"
						/>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center md:text-left"
					>
						<h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-black">
							JOIN MY{" "}
							<span className="text-gradient">FREE</span> TRADING GROUP
						</h1>
						<p className="mb-6 text-black max-w-xl mx-auto md:mx-0">
							You want to copy my trades like 1000+ others do? Then click the
							link below and contact our support.
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
				</div>
			</div>
		</section>
	);
};

export default CardLeft;
