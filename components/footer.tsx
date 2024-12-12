import { motion } from 'framer-motion'

export function Footer() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-between p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="rounded-full bg-white/10 px-6 py-3 backdrop-blur-md"
      >
        <span className="text-white">Innovation pour un avenir meilleur</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="rounded-full bg-white/10 px-6 py-3 backdrop-blur-md"
      >
        <span className="text-white">www.bamboolab.sankoreri.com</span>
      </motion.div>
    </div>
  )
}

