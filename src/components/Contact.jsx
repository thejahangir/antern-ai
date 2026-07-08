import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Aurora from './Aurora';
import LiquidButton from './LiquidButton';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <Aurora variant={2} />
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Form Area (Takes up 7 columns) */}
          <div className="lg:col-span-7 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight mb-6">
                Let's build your next success together.
              </h2>
              <p className="text-lg text-brand-black/60 mb-12 max-w-xl leading-relaxed">
                Tell us about your operating model and goals — we'll bring the AI delivery expertise.
              </p>
            </motion.div>
            
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 relative group">
                  <label className="text-sm font-bold text-brand-black uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full bg-gray-50/50 border-b-2 border-gray-200 px-4 py-4 focus:outline-none focus:border-brand-blue focus:bg-brand-blue/5 transition-all duration-300 rounded-t-lg" placeholder="John Doe" />
                </div>
                <div className="space-y-3 relative group">
                  <label className="text-sm font-bold text-brand-black uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-gray-50/50 border-b-2 border-gray-200 px-4 py-4 focus:outline-none focus:border-brand-blue focus:bg-brand-blue/5 transition-all duration-300 rounded-t-lg" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-3 relative group">
                <label className="text-sm font-bold text-brand-black uppercase tracking-wider">Company</label>
                <input type="text" className="w-full bg-gray-50/50 border-b-2 border-gray-200 px-4 py-4 focus:outline-none focus:border-brand-blue focus:bg-brand-blue/5 transition-all duration-300 rounded-t-lg" placeholder="Acme Inc." />
              </div>
              
              <div className="space-y-3 relative group">
                <label className="text-sm font-bold text-brand-black uppercase tracking-wider">Message</label>
                <textarea rows="4" className="w-full bg-gray-50/50 border-b-2 border-gray-200 px-4 py-4 focus:outline-none focus:border-brand-blue focus:bg-brand-blue/5 transition-all duration-300 resize-none rounded-t-lg" placeholder="How can we help?"></textarea>
              </div>
              
              <LiquidButton type="button" liquidColor="bg-white/20" className="group flex items-center justify-center space-x-3 w-full md:w-auto bg-brand-blue text-white px-10 py-5 rounded-full font-medium hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
                <span>Request Demo</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </LiquidButton>
            </motion.form>
          </div>
          
          {/* Right Info Area (Takes up 5 columns) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-brand-blue/5 border border-brand-blue/10 rounded-[2rem] p-10 md:p-14 h-full relative overflow-hidden flex flex-col"
            >
              {/* Animated Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-12 tracking-tight text-brand-black">Contact Information</h3>
                
                <div className="space-y-10">
                  <div className="flex items-start space-x-5 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-white border border-brand-blue/20 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors duration-300">
                      <Mail className="text-brand-blue group-hover:text-white transition-colors" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-brand-black/50 font-medium mb-1 uppercase tracking-wider">Email</div>
                      <div className="text-lg font-medium text-brand-black group-hover:text-brand-blue transition-colors">hello@antern.ai</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-white border border-brand-pink/20 flex items-center justify-center shrink-0 group-hover:bg-brand-pink group-hover:border-brand-pink transition-colors duration-300">
                      <Phone className="text-brand-pink group-hover:text-white transition-colors" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-brand-black/50 font-medium mb-1 uppercase tracking-wider">Phone</div>
                      <div className="text-lg font-medium text-brand-black group-hover:text-brand-pink transition-colors">+91 9898989898</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-white border border-brand-green/20 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:border-brand-green transition-colors duration-300">
                      <MapPin className="text-brand-green group-hover:text-white transition-colors" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-brand-black/50 font-medium mb-1 uppercase tracking-wider">Office</div>
                      <div className="text-lg font-medium text-brand-black leading-relaxed group-hover:text-brand-green transition-colors">
                        #226, 10 M, 100 Ft Road,<br /> HRBR Layout, Block 1,<br /> Kalyan Nagar, Bangalore - 560 043. India.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dedicated Support Banner */}
              <div className="mt-16 p-6 rounded-[1.5rem] bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 border border-brand-blue/20 relative overflow-hidden group">
                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-full blur-[40px] group-hover:bg-brand-blue/30 transition-colors duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-pink/20 rounded-full blur-[30px] group-hover:bg-brand-green/20 transition-colors duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></div>
                    <h4 className="text-slate-900 font-bold text-lg tracking-tight">Dedicated Support</h4>
                  </div>
                  <p className="text-slate-700 font-medium text-sm mb-5 leading-relaxed pr-4">
                    Our expert team is available to help you integrate AI seamlessly into your workflows. We aim to respond within 24 hours.
                  </p>
                  <div className="inline-flex items-center space-x-2 text-brand-blue font-bold text-sm cursor-pointer group/link hover:text-brand-green transition-colors duration-300">
                    <span>Schedule a consultation</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
