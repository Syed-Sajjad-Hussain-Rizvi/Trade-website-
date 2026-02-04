import React from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
	{ icon: Users, value: "10.000+", label: "Mitglieder" },
	{ icon: TrendingUp, value: "5+", label: "Jahre Erfahrung" },
	{ icon: Award, value: "4.4★", label: "Trustpilot Rating" },
	{ icon: Calendar, value: "24/7", label: "Community Support" },
];

export const About = () => {
	return (
		<section id="services" className="py-12 md:py-20">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="text-center md:text-left mb-8"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						WHAT OUR{" "}
						<span className="text-gradient">SERVICE</span> INCLUDES
					</h2>
					<p className="text-sm md:text-base max-w-2xl">
						Signal delivery, clear entry/exit, risk management and personal
						support to help you copy trades easily.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="text-center md:text-left"
				>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<li className="bg-white p-4 rounded-lg shadow-sm text-black">
							Real-time signals
						</li>
						<li className="bg-white p-4 rounded-lg shadow-sm text-black">
							Step-by-step setup
						</li>
						<li className="bg-white p-4 rounded-lg shadow-sm text-black">
							Trading education
						</li>
						<li className="bg-white p-4 rounded-lg shadow-sm text-black">
							Low-fee broker partnership
						</li>
					</ul>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
