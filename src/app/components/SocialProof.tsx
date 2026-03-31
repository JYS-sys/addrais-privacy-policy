import { motion } from 'motion/react';

const testimonials = [
  {
    quote: 'ADDRAIS helped me revive dormant relationships and turn them into real opportunities.',
    author: 'Aarav M.',
    role: 'Founder',
  },
  {
    quote: 'The reminders feel personal and timely. I stay connected without the mental overhead.',
    author: 'Riya S.',
    role: 'Product Manager',
  },
  {
    quote: 'My network is finally organized. I can focus on meaningful conversations, not spreadsheets.',
    author: 'Neel P.',
    role: 'Investor',
  },
];

export function SocialProof() {
  return (
    <section className="py-40 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight">
            Loved by modern teams
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 bg-white rounded-3xl border border-gray-200/80 shadow-sm"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-8">"{testimonial.quote}"</p>
              <div>
                <p className="text-black font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
