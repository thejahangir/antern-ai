import { motion } from 'framer-motion';

import Aurora from './Aurora';



const pills = [
  'Data Science', 'Machine Learning', 'NLP', 'Computer Vision', 'Generative AI', 'Predictive Analytics'
];

const About = () => {
  return (
    <section id="expertise" className="py-32 relative overflow-hidden bg-white">
      <Aurora variant={3} />
      {/* Abstract curved background */}
      <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50/80 via-white to-white -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="inline-block px-5 py-2 rounded-full bg-white border border-gray-200 text-xs font-bold text-brand-black mb-8 shadow-sm">
              About Antern
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-8 leading-tight tracking-tight">
              Your digital goals. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-pink">Our AI delivery expertise.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-black/60 leading-relaxed mb-10 max-w-3xl mx-auto">
              Founded in 2014 in Bangalore, Antern AI is a product-led technology partner helping enterprises transform with AI. From recruitment automation to enterprise-grade agentic systems, we build, operate, and scale the platforms that move your business forward.
            </p>
            
            {/* Tag Pills - Centered */}
            <div className="flex flex-wrap justify-center gap-3">
              {pills.map((pill, idx) => (
                <span key={idx} className="px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 text-brand-black/80 text-sm font-semibold hover:shadow-md hover:bg-white hover:border-purple-200 transition-all duration-300 cursor-default">
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>


      </motion.div>
    </section>
  );
};

export default About;
