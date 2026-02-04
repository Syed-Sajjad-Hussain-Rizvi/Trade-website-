import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

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
						className="text-center lg:text-left"
					>
						<h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-black">
							JOIN MY{" "}
							<span className="text-gradient">FREE</span> TRADING GROUP
						</h1>
						<p className="mb-6 text-black max-w-xl mx-auto lg:mx-0">
							You want to copy my trades like 1000+ others do? Then click the
							link below and contact our support. They will help you set up your
							account and explain everything you need to successfully copy our
							trades.
						</p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
						>
							<Button variant="cta" size="xl" className="text-white">
								Join the FREE Group
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CardLeft;
