import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            CUSTOMER  <span className="text-gradient">INTERVIEWS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
           INTERVIEW WITH MORRIS
          </p>

        
          <video src="https://signals2trade.net/wp-content/uploads/2026/01/WhatsApp-Video-2026-01-18-at-5.31.31-PM.mp4"></video>
          <br /> <br />
          <img src="https://signals2trade.net/wp-content/uploads/2026/01/Inspirational-self-education-quote-with-laurel-design.webp" alt="" />
          
            <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="cta" size="xl" className="gap-2">
              Join the Free group
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div> 
        </motion.div>
      </div>
    </section>
  );
};
