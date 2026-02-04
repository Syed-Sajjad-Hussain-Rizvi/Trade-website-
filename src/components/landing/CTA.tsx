import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            CUSTOMER{" "}
            <span className="text-gradient">INTERVIEWS</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            INTERVIEW WITH MORRIS
          </p>

          <div className="w-full flex justify-center mb-6">
            <video
              className="w-full max-w-2xl aspect-video rounded-lg shadow"
              controls
            >
              <source
                src="https://signals2trade.net/wp-content/uploads/2026/01/WhatsApp-Video-2026-01-18-at-5.31.31-PM.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
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

export default CTA;
