import { motion } from 'framer-motion';
import { ArrowRight, FileText, Code2, Video, Workflow as WorkflowIcon } from 'lucide-react';
import Aurora from './Aurora';

const products = [
  {
    title: 'ScanJD',
    description: 'JD-to-candidate matching agent that parses job descriptions and resumes, scores fit, and shortlists autonomously to cut screening effort.',
    pill: 'Screening Agent',
    pillBg: 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue',
    icon: <FileText size={24} className="text-brand-blue" />,
    features: ['JD Analysis', 'Skill Extraction', 'Resume Matching', 'Gap Detection'],
    glow: 'group-hover:shadow-brand-blue/10',
    bgGradient: 'from-brand-blue/10 via-brand-blue/5 to-transparent',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    hoverBorder: 'group-hover:border-brand-blue/30',
  },
  {
    title: 'SkillTest',
    description: 'Adaptive skill-assessment agents that auto-generate tests, proctor, and rank candidates against role-fit signals in real time.',
    pill: 'Assessment Agent',
    pillBg: 'bg-brand-green/10 border-brand-green/20 text-brand-green',
    icon: <Code2 size={24} className="text-brand-green" />,
    features: ['Coding Tests', 'MCQs', 'AI Generated Questions', 'Instant Evaluation'],
    glow: 'group-hover:shadow-brand-green/10',
    bgGradient: 'from-brand-green/10 via-brand-green/5 to-transparent',
    iconBg: 'bg-brand-green/10 border-brand-green/20',
    hoverBorder: 'group-hover:border-brand-green/30',
  },
  {
    title: 'IAmInterviewed',
    description: 'Expert-led technical interview platform with AI agents that schedule, conduct structured interviews, and generate bias-reduced scorecards- trusted by 500+ clients.',
    pill: 'AI Hiring Agent',
    pillBg: 'bg-brand-pink/10 border-brand-pink/20 text-brand-pink',
    icon: <Video size={24} className="text-brand-pink" />,
    features: ['Technical Interviews', 'AI Evaluation', 'Video Interviews', 'Candidate Reports'],
    glow: 'group-hover:shadow-brand-pink/10',
    bgGradient: 'from-brand-pink/10 via-brand-pink/5 to-transparent',
    iconBg: 'bg-brand-pink/10 border-brand-pink/20',
    hoverBorder: 'group-hover:border-brand-pink/30',
  },
  {
    title: 'AI Recruitment Workflow',
    description: 'Unifies ScanJD, SkillTest, and IamInterviewed into one autonomous hiring pipeline — handing off from screening to assessment to interview with zero manual coordination.',
    pill: 'Workflow Orchestrator',
    pillBg: 'bg-gray-100 border-gray-200 text-brand-black',
    icon: <WorkflowIcon size={24} className="text-brand-black" />,
    features: ['Candidate Screening', 'AI Ranking', 'Interview Scheduling', 'Hiring Dashboard'],
    glow: 'group-hover:shadow-brand-black/5',
    bgGradient: 'from-gray-100 via-gray-50 to-transparent',
    iconBg: 'bg-gray-100 border-gray-200',
    hoverBorder: 'group-hover:border-brand-black/20',
  }
];

const Products = () => {
  return (
    <section id="agents" className="py-32 bg-white relative overflow-hidden">
      <Aurora variant={2} />
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10 pt-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-blue/5 text-sm font-bold text-brand-blue mb-6">
            Autonomous Agents
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">AI agents that run your hiring & delivery</h2>
          <p className="text-lg text-brand-black/60">Purpose-built agentic products trusted by 500+ clients to automate recruitment and orchestrate delivery end to end.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative bg-white rounded-lg border border-gray-200 p-8 md:p-10 shadow-xl shadow-gray-200/20 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:border-gray-300 ${product.glow}`}
            >
              {/* Dynamic Abstract Background Gradient on Hover */}
              <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none -z-0`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${product.iconBg} transition-transform duration-500 group-hover:scale-110 shrink-0`}>
                      {product.icon}
                    </div>
                    <div className="flex flex-col justify-center gap-1.5">
                      {product.pill && (
                        <span className={`w-fit inline-flex px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${product.pillBg}`}>
                          {product.pill}
                        </span>
                      )}
                      <h3 className="text-xl md:text-2xl font-bold text-brand-black leading-none">{product.title}</h3>
                    </div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white shrink-0 mt-2"
                  >
                    <ArrowRight size={16} className="text-brand-black" />
                  </motion.div>
                </div>
                
                <p className="text-brand-black/60 mb-8 text-sm leading-relaxed max-w-sm">{product.description}</p>
                
                <div className="mt-auto grid grid-cols-2 gap-3">
                  {product.features.map(feature => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1 h-1 rounded-full bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors"></div>
                      <span className="text-xs font-semibold text-brand-black/60 group-hover:text-brand-black/80 transition-colors">{feature}</span>
                    </div>
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

export default Products;
