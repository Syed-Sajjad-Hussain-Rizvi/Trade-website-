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
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              WHAT OUR <span className="text-gradient">SERVICE</span> INCLUDES
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            We at Signals2Trade not only offer premium signals but also an all-round carefree package. <br /> <br />

This means that you get a whole host of additional services, allowing you to take a significant step closer to financial freedom.


            </p>
           
              <ul className="list-disc list-inside mb-8 text-muted-foreground space-y-2">
                <li>In addition you get</li>
                <li>Trading video courses</li>
                <li>Live trading sessions on</li>
                <li>Telegram</li>
                <li>Your own trading mentor to support you</li>
                <li>Analyses on a wide range of currency pairs <br />
                  &nbsp;&nbsp; &nbsp; and the best risk management on the market</li>
              </ul>
            

            <Button variant="cta" size="xl">
              Join the Free Group
            </Button>
          </motion.div>

          {/* Right - Stats Grid */}
          <video autoPlay loop muted src="https://signals2trade.net/wp-content/uploads/2026/01/s2t-Video-1-1-1.mkv"></video>
        </div>
      </div>
        <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
         

          {/* Right - Stats Grid */}
          <video autoPlay loop muted src="https://signals2trade.net/wp-content/uploads/2026/01/s2t-Video3-1.mkv"></video>
           <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
             WE ALSO OFFER A COMPLETELY <span className="text-gradient">AUTOMATED</span> VERSION
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
           We also offer an automated version. If one of the following reasons applies to you, you’ve come to the right place with our service:


            </p>
           
              <ul className="list-disc list-inside mb-8 text-muted-foreground space-y-2">
                <li>You don’t have time to trade and be on your cell phone all the time &nbsp;&nbsp;&nbsp;&nbsp; because you are too busy with your family and work</li>
                <li>You want to have your money multiplied by experienced traders,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; but don’t have the time or the nerves to learn how to do it.</li>
                <li>You prefer to lie back and let experienced traders work for you</li>
              </ul>
            

            <Button variant="cta" size="xl">
              Join the Free Group
            </Button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
