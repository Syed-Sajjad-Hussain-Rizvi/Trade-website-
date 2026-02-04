import { motion } from "framer-motion";

const reasons = [
	{
		img: "https://signals2trade.net/wp-content/uploads/2026/01/2024-Best-Forex-Broker-of-the-Year-award-badge-from-ProFX-Awards-Dubai.webp",
	},
	{
		img: "https://signals2trade.net/wp-content/uploads/2026/01/2024-Most-Trusted-Forex-Broker-of-the-Year-%E2%80%93-ProFX-Awards-Dubai.webp.",
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
		<section id="why-free" className=" md:py-28 bg-white">
			<div className="container-fluid">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
						My <span className="text-gradient">Goals</span>
					</h2>
					<p className="text-lg text-black max-w-2xl mx-auto">
						My goal is to help as many people as possible to either become
						financially free or at least earn some extra money through day
						trading, every day. Everyone should have the opportunity to live the
						life of their dreams, both financially and in terms of control over
						their own time.
						<br />
						<br />
						The dream of many people is to work whenever they want and from
						wherever they want, and day trading is made for that lifestyle!
						<br />
						<br />
						I have found a way to do this for free. I have teamed up with one of
						the largest regulated brokers in the world. As long as we all use
						this platform to trade, 100% of my signals are free for everyone as
						the broker pays and sponsors me for my work instead!
						<br />
						<br />
						The only criteria is that the broker also benefits by moving our live
						accounts to the AXI broker! So as long as we all use AXI and earn
						the broker a few fees, everything is completely free. What’s more,
						the broker has the lowest fees on the entire market!
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
					{reasons.map((reason, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="bg-white rounded-xl p-4 shadow-sm transition-all duration-300"
						>
							<div className="w-full h-full rounded-xl flex items-center justify-center mx-auto mb-4">
								<img
									src={reason.img}
									alt={`reason-${index}`}
									className=""
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
