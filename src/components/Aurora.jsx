import { motion } from 'framer-motion';

const Aurora = ({ variant = 1 }) => {
  // Different configuration setups for each variant to give them unique patterns
  const configs = {
    1: [
      { color: 'bg-brand-green/10', w: 'w-[60%] md:w-[40%]', h: 'h-[60%] md:h-[40%]', x: [0, 30, 0], y: [0, 20, 0], top: '-10%', left: '-10%' },
      { color: 'bg-brand-blue/10', w: 'w-[70%] md:w-[50%]', h: 'h-[70%] md:h-[50%]', x: [0, -30, 0], y: [0, -20, 0], bottom: '-10%', right: '-10%' },
      { color: 'bg-brand-pink/10', w: 'w-[50%] md:w-[30%]', h: 'h-[50%] md:h-[30%]', x: [0, 20, 0], y: [0, 30, 0], top: '20%', right: '10%' }
    ],
    2: [
      { color: 'bg-brand-blue/10', w: 'w-[50%] md:w-[35%]', h: 'h-[50%] md:h-[35%]', x: [0, -20, 0], y: [0, 40, 0], top: '10%', left: '20%' },
      { color: 'bg-brand-pink/10', w: 'w-[80%] md:w-[50%]', h: 'h-[80%] md:h-[50%]', x: [0, 40, 0], y: [0, -30, 0], bottom: '0%', left: '-10%' },
      { color: 'bg-brand-green/10', w: 'w-[60%] md:w-[40%]', h: 'h-[60%] md:h-[40%]', x: [0, -30, 0], y: [0, -20, 0], top: '-5%', right: '-5%' }
    ],
    3: [
      { color: 'bg-brand-pink/10', w: 'w-[70%] md:w-[45%]', h: 'h-[70%] md:h-[45%]', x: [0, 25, 0], y: [0, -25, 0], top: '-15%', left: '15%' },
      { color: 'bg-brand-green/10', w: 'w-[50%] md:w-[30%]', h: 'h-[50%] md:h-[30%]', x: [0, -40, 0], y: [0, 20, 0], bottom: '10%', right: '20%' },
      { color: 'bg-brand-blue/10', w: 'w-[80%] md:w-[55%]', h: 'h-[80%] md:h-[55%]', x: [0, 30, 0], y: [0, 40, 0], bottom: '-20%', left: '30%' }
    ]
  };

  const orbs = configs[variant] || configs[1];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        animate={{ x: orbs[0].x, y: orbs[0].y, scale: [1, 1.1, 1] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute rounded-full blur-[100px] ${orbs[0].color} ${orbs[0].w} ${orbs[0].h}`}
        style={{ top: orbs[0].top, left: orbs[0].left, bottom: orbs[0].bottom, right: orbs[0].right }}
      />
      <motion.div 
        animate={{ x: orbs[1].x, y: orbs[1].y, scale: [1, 1.2, 1] }} 
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute rounded-full blur-[120px] ${orbs[1].color} ${orbs[1].w} ${orbs[1].h}`}
        style={{ top: orbs[1].top, left: orbs[1].left, bottom: orbs[1].bottom, right: orbs[1].right }}
      />
      <motion.div 
        animate={{ x: orbs[2].x, y: orbs[2].y, scale: [1, 1.1, 1] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute rounded-full blur-[100px] ${orbs[2].color} ${orbs[2].w} ${orbs[2].h}`}
        style={{ top: orbs[2].top, left: orbs[2].left, bottom: orbs[2].bottom, right: orbs[2].right }}
      />
    </div>
  );
};

export default Aurora;
