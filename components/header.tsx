import { motion } from 'framer-motion'

export function Header() {
  return (
    <div className="absolute left-0 right-0 top-0 z-10 flex justify-between p-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-md"
      >
        <span className="text-white">🎋 BAMBOOLAB</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-md"
      >
        <span className="text-white">Sankore Research Institute</span>
      </motion.div>
    </div>
  )
}

