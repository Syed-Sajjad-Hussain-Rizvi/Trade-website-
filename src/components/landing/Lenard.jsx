import { motion } from "framer-motion";
import { Check, Users, TrendingUp, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";


const benefits = [
  { icon: Users, text: "Lennard is 29 years old and originally comes from Switzerland, the stronghold of institutional trading." },
  { icon: TrendingUp, text: "He has been well connected on the stock market for 12 years now and has already traded with the biggest traders in the financial world." },
  { icon: BookOpen, text: "Everyday he and his team are sitting more than 10 hours in front of the charts to analyze the market." },
  { icon: Globe, text: "Before he places the trade, he gives you the signal so that everyone has the same entry points." },
  { icon: BookOpen, text: "Do not place risky trades, the set-up must be 99% before a trade is posted “Better safe than sorry”" },
  { icon: Globe, text: "Has a hit rate of over 78% for the first take profit and impressive figures for TP2 and TP3" },
  {icon: Globe, text: "Lennard works with a risk to reward ratio of up to 1:7" },
];


export const Lenard = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden hero-gradient">
            {/* Background glow effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
            </div>

            <div className="container relative z-10 py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Right Content - Visual Element */}
                    <div className="flex justify-center">
                     <video style={{ maxHeight: "600px", height: "auto", width: "100%" }} src="https://signals2trade.net/wp-content/uploads/2026/01/Lennard.mp4"></video>
                    </div>
                    {/* Left Content */}

                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        
                        {/* Main Headline */}
                        <h1 className="text-2xl md:text-2xl lg:text-3xl font-extrabold leading-tight mb-6 text-black">
                            WHO IS {" "}
                            <span className="text-gradient">LENNARD</span>
                            {" "}
                        </h1>

                        {/* Benefits List */}
                       <ul className="space-y-4 mb-10 text-left text-black">
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
                                      <span className="text-black">{benefit.text}</span>
                                    </motion.li>
                                  ))}
                                </ul>

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

                </div>
            </div>
        </section>
    );
};

export default Lenard;
