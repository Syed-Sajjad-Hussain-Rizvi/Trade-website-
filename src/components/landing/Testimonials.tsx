import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.11-PM.jpeg" },
  { Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.12-PM.jpeg" },
  { Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.13-PM-1.jpeg" },
  { Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.13-PM.jpeg" },
  { Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.14-PM-1.jpeg" },
  { Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.14-PM.jpeg" },
  { Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.14-PM.jpeg" },
  { Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.15-PM-1.jpeg" },
  { Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.14-PM.jpeg" }
];

export const Testimonials = () => {
  return (
    <section id="results" className="py-12 md:py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">RESULTS OF OUR <span className="text-gradient">MEMBERS</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="bg-white rounded-xl p-4 border border-border/20 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-semibold text-foreground">Member</p>
                </div>
                <Quote className="w-6 h-6 text-primary/40" />
              </div>

              <img
                src={testimonial.Image}
                alt={`testimonial-${index}`}
                className="w-full h-56 md:h-64 lg:h-56 object-cover rounded-md mb-3"
                loading="lazy"
              />

              <p className="text-sm text-muted-foreground leading-relaxed">Real results from members</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
