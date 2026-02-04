import { motion } from "framer-motion";
import { Check, Users, TrendingUp, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
	{ icon: Users, text: "+2,000 members from all over the world" },
	{ icon: TrendingUp, text: "Everything in Signals2Trade is 100% free of charge" },
	{ icon: BookOpen, text: "The best-rated trading program in the world" },
	{ icon: Globe, text: "Becoming profitable on the financial market" },
];

export const Card = () => {
	return (
		<section className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden hero-gradient">
			{/* Background glow effect */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
			</div>

			<div className="container relative z-10 py-12 md:py-20">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center lg:text-left"
					>
						{/* Main Headline */}
						<h1 className="text-2xl md:text-2xl lg:text-3xl font-extrabold leading-tight mb-6 text-black">
							WHY IS IT ?{" "}
							<span className="text-gradient">FREE</span>
							{" "}
						</h1>

						{/* Benefits List */}
						<p className="mb-10 text-black">
							My goal is to help as many people as possible to either become
							financially free or at least earn some extra money through day
							trading, every day. Everyone should have the opportunity to live the
							life of their dreams, both financially and in terms of control over
							their own time. <br /> <br />
							<br />
							The dream of many people is to work whenever they want and from
							wherever they want, and day trading is made for that lifestyle! <br />{" "}
							<br />
							I have found a way to do this for free. I have teamed up with one of
							the largest regulated brokers in the world. As long as we all use
							this platform to trade, 100% of my signals are free for everyone as
							the broker pays and sponsors me for my work instead! <br /> <br />
							The only criteria is that the broker also benefits by moving our live
							accounts to the AXI broker! So as long as we all use AXI and earn
							the broker a few fees, everything is completely free. What’s more,
							the broker has the lowest fees on the entire market!
						</p>

						{/* CTA Buttons */}
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

					{/* Right Content - Visual Element */}
					<div className="flex justify-center lg:justify-end">
						<img
							src="https://techxpress.pk/cdn/shop/files/review_3.png?v=1731358045"
							alt="telegram-signals-on-phone"
							className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-2xl border border-border/50 shadow-sm"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Card;
