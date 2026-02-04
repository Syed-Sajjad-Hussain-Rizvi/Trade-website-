import React from "react";
import { motion } from "framer-motion";
import { Check, Users, TrendingUp, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
	{
		icon: Users,
		text: "Lennard is 29 years old and originally comes from Switzerland, the stronghold of institutional trading.",
	},
	{
		icon: TrendingUp,
		text: "He has been well connected on the stock market for 12 years now and has already traded with the biggest traders in the financial world.",
	},
	{
		icon: BookOpen,
		text: "Everyday he and his team are sitting more than 10 hours in front of the charts to analyze the market.",
	},
	{
		icon: Globe,
		text: "Before he places the trade, he gives you the signal so that everyone has the same entry points.",
	},
	{
		icon: BookOpen,
		text: 'Do not place risky trades, the set-up must be 99% before a trade is posted “Better safe than sorry”',
	},
	{
		icon: Globe,
		text: "Has a hit rate of over 78% for the first take profit and impressive figures for TP2 and TP3",
	},
	{ icon: Globe, text: "Lennard works with a risk to reward ratio of up to 1:7" },
];

export const Lenard = () => {
	return (
		<section className="py-12 md:py-20 overflow-hidden hero-gradient">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<div className="w-full flex justify-center">
						<video
							className="w-full max-w-lg aspect-video rounded-lg"
							controls
							src="https://signals2trade.net/wp-content/uploads/2026/01/Lennard.mp4"
						/>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center md:text-left"
					>
						<h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-black">
							WHO IS{" "}
							<span className="text-gradient">LENNARD</span>
						</h1>

						<ul className="space-y-3 mb-6 text-left max-w-xl mx-auto md:mx-0">
							{benefits.map((benefit, index) => {
								return (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.2 + index * 0.06 }}
										className="flex items-start gap-3"
									>
										<div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
											<Check className="w-3 h-3 text-black" />
										</div>
										<span className="text-sm md:text-base">
											{benefit.text}
										</span>
									</motion.li>
								);
							})}
						</ul>

						<div className="flex justify-center md:justify-start">
							<Button
								variant="cta"
								size="lg"
								className="text-white"
							>
								Join the FREE Group
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Lenard;
