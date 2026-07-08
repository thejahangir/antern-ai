import Aurora from './Aurora';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const capabilities = [
  {
    title: 'Conversational AI Platforms',
    features: [
      'Multi-channel AI assistants (Microsoft Teams-centric)',
      'Context-aware responses using enterprise data',
      'Workflow-driven automation'
    ]
  },
  {
    title: 'AI Agents & Automation',
    features: [
      'Task-specific intelligent agents',
      'Decision-logic-based process automation',
      'Deep integration with enterprise systems'
    ]
  },
  {
    title: 'LLM Enablement & Customization',
    features: [
      'Domain adaptation of LLMs',
      'Retrieval-Augmented Generation (RAG)',
      'Secure enterprise-grade AI deployments'
    ]
  },
  {
    title: 'AI + Engineering Integration',
    features: [
      'Embedding AI into existing platforms',
      'API-driven integrations',
      'Secure data pipelines'
    ]
  }
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-32 bg-gray-50 relative overflow-hidden">
      <Aurora variant={1} />
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black tracking-tight">Antern Core AI Capabilities</h2>
          <p className="text-lg text-brand-black/60">Four practice areas, each proven in production - from conversational platforms to deep engineering integration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 rounded-lg bg-white border border-gray-200 shadow-lg shadow-gray-200/20 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Dynamic decorative blob */}
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-gradient-to-br from-brand-blue/10 to-brand-pink/10 rounded-full blur-3xl group-hover:bg-brand-blue/20 transition-colors duration-700 pointer-events-none z-0"></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-6 relative">
                  <span className="text-brand-blue/10 font-bold text-5xl absolute -top-6 -left-3 select-none group-hover:text-brand-blue/40 transition-colors duration-500 z-0">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-brand-black relative z-10 mt-5 tracking-tight leading-tight">{item.title}</h3>
                </div>
                
                <ul className="space-y-4 relative z-10 mt-auto">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <Check size={16} className="text-brand-blue" strokeWidth={3} />
                      </div>
                      <span className="text-brand-black/70 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Capabilities;
