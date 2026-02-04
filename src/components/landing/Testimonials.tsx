import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.11-PM.jpeg",
  },
  {
    Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.12-PM.jpeg",
  },
  {
    Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.13-PM-1.jpeg",
  },
  {
    Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.13-PM.jpeg",
  },
  {
    Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.14-PM-1.jpeg",
  },
    {
    Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.14-PM.jpeg",
  },
    {
    Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.14-PM.jpeg",
  },
    {
    Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.15-PM-1.jpeg",
  },
   {
    Image: "https://signals2trade.net/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-04-at-5.50.14-PM.jpeg",
  },

];

export const Testimonials = () => {
  return (
    <section id="results" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          RESULTS OF OUR MEMBERS<span className="text-gradient">MEMBERS</span>
          </h2>
          
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.Image}</p>
               
                </div>
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              <img
                src={testimonial.Image}
                alt={`testimonial-${index}`}
                className="w-full h-auto object-cover rounded-md shadow-sm"
                loading="lazy"
              />

              <p className="text-muted-foreground text-sm leading-relaxed">
                {testimonial.Image}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
