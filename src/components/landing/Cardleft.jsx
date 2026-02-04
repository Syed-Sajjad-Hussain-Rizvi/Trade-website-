import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";



export const CardLeft = () => {
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
							JOIN MY  {" "}
							<span className="text-gradient">FREE</span> TRADING GROUP
						</h1>

						{/* Benefits Description */}
						<p className="mb-8 text-black">
							You want to copy my trades like 1000+ others do ? <br /> <br />
                            Then click here on the link below and contact our support.

                        <br /><br />
                        They will help you set up your account and explain everything you need to successfully copy our trades.

                            <br /><br />
                            You will then get access to all our additional articles and our premium signal group.

                            <br /><br />
                            Take the step to financial freedom and build your side hustle with us.


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
					<div className="flex justify-center">
						<img
							style={{ maxHeight: "700px", height: "auto" }}
							src="https://i.pinimg.com/1200x/09/67/fa/0967fa28073421e9192564eee2d04f6d.jpg"
							alt="telegram-signals-on-phone"
							className="w-full max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-2xl border border-border/50 shadow-sm"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CardLeft;
