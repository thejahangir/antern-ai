import Aurora from './Aurora';
import { motion } from 'framer-motion';
import { Check, Server } from 'lucide-react';

const deliveryModels = [
  {
    title: 'Enterprise Integration',
    features: [
      'Deployed within your secure environment (VPC, On-Premise, or Private Cloud)',
      'Direct integration with core enterprise systems and data lakes',
      'Continuous performance monitoring and model tuning by our embedded specialists'
    ]
  }
];

const Delivery = () => {
  return (
    <section id="engagement" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <Aurora variant={2} />
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-green/5 text-xs font-bold text-brand-green mb-4">
            Engagement
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4 tracking-tight">Engage the way that fits you</h2>
          <p className="text-lg text-brand-black/60 max-w-2xl mx-auto">Your digital goals. Our AI delivery expertise - specialists embedded directly in your teams.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {deliveryModels.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group relative bg-white rounded-lg border border-gray-100 p-8 md:p-12 shadow-xl shadow-brand-black/5 hover:shadow-2xl hover:shadow-brand-blue/10 overflow-hidden flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-all duration-500"
            >
              {/* Animated Background Mesh/Glow */}
              <div className="absolute -left-32 -top-32 w-96 h-96 bg-gradient-to-br from-brand-blue/10 via-brand-pink/5 to-transparent rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>

              {/* Left Side: Title & Icon */}
              <div className="md:w-5/12 relative z-10 text-center md:text-left">
                <div className="w-16 h-16 mx-auto md:mx-0 rounded-2xl bg-gray-100 border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:border-brand-blue/20 group-hover:bg-brand-blue/5 transition-colors duration-500">
                  <Server className="text-brand-blue" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight leading-tight mb-4">{model.title}</h3>
                <p className="text-brand-black/60 text-base leading-relaxed">
                  Deploy our state-of-the-art AI infrastructure seamlessly into your existing ecosystem for maximum security and alignment.
                </p>
              </div>

              {/* Right Side: Features */}
              <div className="md:w-7/12 relative z-10 w-full">
                <div className="grid grid-cols-1 gap-4">
                  {model.features.map((feature, fIndex) => (
                    <motion.div 
                      key={fIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (fIndex * 0.1) }}
                      className="flex items-center space-x-4 p-4 md:p-5 rounded-2xl bg-gray-100 border border-gray-100 group-hover:bg-white group-hover:border-brand-blue/20 group-hover:shadow-sm transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:border-brand-blue/20 group-hover:bg-brand-blue/5 transition-colors duration-300">
                        <Check size={18} className="text-brand-blue" strokeWidth={2.5} />
                      </div>
                      <span className="text-brand-black/80 font-semibold text-[15px]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Delivery;
