import { motion } from 'framer-motion';
import { ArrowDown, Check, GitCommit, Search, ShieldCheck } from 'lucide-react';
import Aurora from './Aurora';

const steps = [
  { 
    id: 1, 
    badge: 'SCANJD',
    title: 'Screen & Shortlist', 
    detail: 'Candidate profiles are instantly compared against JD requirements with quantified fit scores.' 
  },
  { 
    id: 2, 
    badge: 'CODEINTERVIEW',
    title: 'Assess Skills', 
    detail: 'Top candidates take an AI-monitored, adaptive coding assessment tailored to the role.' 
  },
  { 
    id: 3, 
    badge: 'IAMINTERVIEWED',
    title: 'Interview', 
    detail: 'An autonomous agent conducts a conversational technical interview to evaluate problem-solving in real-time.' 
  },
  { 
    id: 4, 
    badge: 'DECISION',
    title: 'Hire', 
    detail: 'A ranked, evidence-backed shortlist lands with your team — ready for a confident, fast hiring decision.' 
  }
];

const Workflow = () => {
  return (
    <section id="pipeline" className="py-32 overflow-hidden relative">
      <Aurora variant={3} />
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">One agentic pipeline, from JD to offer</h2>
          <p className="text-lg text-brand-black/60 max-w-2xl mx-auto">Antern's AI agents replace the slow, manual stages of hiring — each step hands off to the next autonomously, so your team only reviews the shortlist.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-10 right-10 h-[3px] bg-gray-200 z-0 overflow-hidden rounded-full">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="h-full bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector for Mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[100px] left-1/2 w-[2px] h-12 bg-gray-200 -translate-x-1/2 z-0"></div>
                )}
                
                <div className="w-20 h-20 bg-white rounded-full border-4 border-gray-50 shadow-xl shadow-gray-200/30 flex items-center justify-center text-xl font-extrabold text-brand-black mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-brand-blue/20">
                  {step.id}
                  {index < 3 && (
                    <motion.div 
                      className="absolute inset-0 rounded-full border border-brand-blue opacity-0"
                      animate={{ scale: [1, 1.2], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  )}
                  {index === 3 && (
                    <Check className="w-8 h-8 text-brand-green" />
                  )}
                </div>
                
                <div className="bg-brand-blue/5 text-brand-blue text-[10px] font-bold px-3 py-1 rounded-full mb-4 tracking-wider">
                  {step.badge}
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{step.title}</h3>
                <p className="text-brand-black/60 text-sm leading-relaxed max-w-[250px]">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Workflow;
