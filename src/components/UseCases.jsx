import { motion } from 'framer-motion';
import { Search, Code2, Video, Bot } from 'lucide-react';
import Aurora from './Aurora';

const cases = [
  { 
    tag: 'SCANJD', 
    title: 'High-volume resume screening', 
    desc: 'When a single requisition draws thousands of applications, ScanJD parses every resume against the JD, scores fit, and surfaces a ranked shortlist in minutes — eliminating days of manual CV review.',
    pillClasses: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    iconClasses: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    hoverBorder: 'group-hover:border-brand-blue/30',
    meshGradient: 'from-brand-blue/10 via-brand-blue/5 to-transparent',
    icon: Search
  },
  { 
    tag: 'SKILLTEST', 
    title: 'Validate skills before the interview', 
    desc: 'Stop spending panel time on under-qualified candidates. SkillTest auto-generates adaptive assessments, proctors them, and ranks candidates on verified, role-fit skills before anyone joins a call.',
    pillClasses: 'bg-brand-green/10 text-brand-green border-brand-green/20',
    iconClasses: 'bg-brand-green/10 text-brand-green border-brand-green/20',
    hoverBorder: 'group-hover:border-brand-green/30',
    meshGradient: 'from-brand-green/10 via-brand-green/5 to-transparent',
    icon: Code2
  },
  { 
    tag: 'IAMINTERVIEWED', 
    title: 'Scale technical interviews', 
    desc: 'Remove the panel bottleneck. IamInterviewed schedules and conducts structured technical interviews at scale and returns bias-reduced scorecards, so hiring velocity no longer depends on interviewer availability.',
    pillClasses: 'bg-brand-pink/10 text-brand-pink border-brand-pink/20',
    iconClasses: 'bg-brand-pink/10 text-brand-pink border-brand-pink/20',
    hoverBorder: 'group-hover:border-brand-pink/30',
    meshGradient: 'from-brand-pink/10 via-brand-pink/5 to-transparent',
    icon: Video
  },
  { 
    tag: 'AI RECRUITMENT WORKFLOW', 
    title: 'End-to-end hiring surge', 
    desc: 'For campus drives or rapid scale-ups, the AI Recruitment Workflow chains screening, assessment, and interviews into one autonomous pipeline — your team only reviews a final, evidence-backed shortlist.',
    pillClasses: 'bg-gray-100 text-brand-black border-gray-200',
    iconClasses: 'bg-gray-100 text-brand-black border-gray-200',
    hoverBorder: 'group-hover:border-brand-black/20',
    meshGradient: 'from-gray-100 via-gray-50 to-transparent',
    icon: Bot
  },
];

const UseCases = () => {
  return (
    <section id="usecases" className="py-32 bg-gray-50/50 relative overflow-hidden">
      <Aurora variant={1} />
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">Where our agents make the difference</h2>
          <p className="text-lg text-brand-black/60 max-w-2xl mx-auto">Real hiring scenarios our products solve - from a single hard-to-fill role to a high-volume hiring surge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cases.map((uc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              className={`group relative bg-white rounded-lg p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 ${uc.hoverBorder} flex flex-col h-full overflow-hidden`}
            >
              {/* Dynamic Theme Glow */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${uc.meshGradient} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Header (Badge + Icon) */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`inline-block px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-wider ${uc.pillClasses}`}>
                    {uc.tag}
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${uc.iconClasses}`}>
                    <uc.icon size={20} strokeWidth={2} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-brand-black mb-4 tracking-tight leading-snug">
                  {uc.title}
                </h3>
                
                <p className="text-brand-black/60 text-[15px] leading-relaxed flex-grow">
                  {uc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default UseCases;
