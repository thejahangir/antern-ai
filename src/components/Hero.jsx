import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart, CheckCircle2, Star } from 'lucide-react';
import LiquidButton from './LiquidButton';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const bgY = useTransform(scrollY, [0, 1000], ['0%', '50%']);
  const textY = useTransform(scrollY, [0, 800], [0, 150]);
  const dashboardY = useTransform(scrollY, [0, 800], [0, 80]);
  const orbsY = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-[-20%] z-0 opacity-10 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('/corp-bg.png')", 
          y: bgY 
        }}
      ></motion.div>

      {/* Animated Mesh Gradient with reverse Parallax */}
      <motion.div style={{ y: orbsY }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Blob 1 */}
        <motion.div 
          animate={{ x: [0, 100, -50, 0], y: [0, -50, 100, 0], scale: [1, 1.2, 0.9, 1] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-brand-blue/5 blur-[100px] mix-blend-multiply" 
        />
        {/* Blob 2 */}
        <motion.div 
          animate={{ x: [0, -100, 50, 0], y: [0, 100, -50, 0], scale: [1, 1.5, 0.8, 1] }} 
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-brand-green/5 blur-[120px] mix-blend-multiply" 
        />
        {/* Blob 3 */}
        <motion.div 
          animate={{ x: [0, 80, -80, 0], y: [0, 80, -80, 0], scale: [1, 1.1, 1.3, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[30%] w-[45vw] h-[45vw] rounded-full bg-blue-300/5 blur-[130px] mix-blend-multiply" 
        />
        {/* Blob 4 */}
        <motion.div 
          animate={{ x: [0, -50, 100, 0], y: [0, -100, 50, 0], scale: [1, 1.3, 1.1, 1] }} 
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-teal-200/5 blur-[90px] mix-blend-multiply" 
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side (Text content) with subtle Parallax */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ y: textY }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-sm font-medium text-brand-green">Enterprise AI Recruitment</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-black leading-tight tracking-tighter">
            Your End-to-End <br/>
            <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
              Digital Transformation
            </span> <br/>
            Partner.
          </h1>
          
          <p className="text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-lg">
            From resume intelligence to technical interviews, assessments, and complete hiring workflows, AnternAI helps organizations hire faster with AI-powered automation.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <LiquidButton liquidColor="bg-white/20" className="flex items-center justify-center space-x-2 bg-brand-blue text-white px-8 py-4 rounded-full text-base font-medium hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
              <span>Explore Products</span>
              <ArrowRight size={18} />
            </LiquidButton>
            <LiquidButton liquidColor="bg-white/20" className="flex items-center justify-center space-x-2 bg-brand-blue text-white px-8 py-4 rounded-full text-base font-medium hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
              <span>Book Demo</span>
            </LiquidButton>
          </div>
        </motion.div>

        {/* Right Side - New Premium Dashboard UI with Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ y: dashboardY }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[550px] w-full hidden lg:flex items-center justify-center"
        >
          {/* Decorative Background Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="w-[400px] h-[400px] border border-brand-green/20 rounded-full border-dashed" 
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] border border-brand-blue/20 rounded-full border-dashed" 
            />
          </div>

          {/* Main Analysis Window */}
          <div className="relative w-full max-w-md bg-white/90 backdrop-blur-2xl rounded-lg shadow-[0_20px_50px_-12px_rgba(0,102,255,0.1)] border border-white p-6 z-10">
            {/* Window Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              </div>
              <div className="flex items-center space-x-2 bg-brand-blue/5 px-3 py-1 rounded-full">
                <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></div>
                <span className="text-xs font-bold text-brand-blue">AI Processing</span>
              </div>
            </div>

            {/* Candidate Info */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center border border-gray-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-black/50"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div>
                <div className="h-4 w-32 bg-gray-200 rounded-full mb-2"></div>
                <div className="h-3 w-24 bg-gray-100 rounded-full"></div>
              </div>
            </div>

            {/* Scanning Progress */}
            <div className="space-y-4 mb-8">
              <div>
                <div className="flex justify-between text-xs font-semibold text-brand-black/60 mb-2">
                  <span>Semantic Parsing</span>
                  <span className="text-brand-blue">100%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="h-full bg-brand-blue rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold text-brand-black/60 mb-2">
                  <span>Skill Extraction</span>
                  <span className="text-brand-green">100%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="h-full bg-brand-green rounded-full" />
                </div>
              </div>
            </div>

            {/* AI Result */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between border border-gray-100">
              <div>
                <div className="text-xs font-bold text-brand-black/50 mb-1">Final Match Score</div>
                <div className="text-sm font-semibold text-brand-black">Senior Frontend Engineer</div>
              </div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">98%</div>
            </div>
          </div>

          {/* Floating Data Card 1 */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-24 bg-white rounded-lg p-4 shadow-xl border border-gray-100 w-48 z-20"
          >
            <div className="text-[10px] font-bold text-brand-black/40 uppercase tracking-wider mb-3">Extracted Skills</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-lg">React</span>
              <span className="px-2 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold rounded-lg">TypeScript</span>
              <span className="px-2 py-1 bg-brand-pink/10 text-brand-pink text-xs font-semibold rounded-lg">Node.js</span>
            </div>
          </motion.div>

          {/* Floating Data Card 2 */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-8 bottom-32 bg-white text-brand-black rounded-lg p-4 shadow-2xl shadow-brand-blue/5 border border-gray-100 w-56 z-20"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
                <CheckCircle2 size={16} className="text-brand-green" />
              </div>
              <div className="text-sm font-bold text-brand-black">Auto-Scheduled</div>
            </div>
            <div className="text-xs text-brand-black/70">Technical interview booked with hiring manager for tomorrow.</div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
