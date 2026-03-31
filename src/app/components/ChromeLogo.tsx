import { motion } from 'motion/react';

export function ChromeLogo() {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-200/40 to-transparent blur-3xl" />
      
      {/* Main logo container */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotateY: [0, 5, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-96 h-96 flex items-center justify-center"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 text-white flex items-center justify-center text-8xl font-bold drop-shadow-2xl">
          A
        </div>
      </motion.div>
    </div>
  );
}