import { motion } from 'framer-motion'
import { Home, Info, Calendar, Users, Briefcase, Mail, BookOpen, Star } from 'lucide-react'

const menuItems = [
  { icon: Home, title: "Accueil", position: 0 },
  { icon: Info, title: "À Propos", position: 1 },
  { icon: Calendar, title: "Événements et Séances", position: 2 },
  { icon: Users, title: "Notre Équipe", position: 3 },
  { icon: Briefcase, title: "Rejoindre BambooLab", position: 4 },
  { icon: Mail, title: "Contact", position: 5 },
  { icon: BookOpen, title: "Projets", position: 6 },
  { icon: Star, title: "Partenariats", position: 7 },
]

export function TableOfContents({ onItemClick }) {
  return (
    <motion.div
      className="absolute left-0 top-0 h-screen w-screen bg-green-900/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2
        className="absolute left-1/2 top-8 -translate-x-1/2 transform text-center text-6xl font-semibold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Table des Matières
      </motion.h2>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-8">
        <div className="flex gap-8">
          {menuItems.slice(0, 4).map(({ icon: Icon, title }, index) => (
            <TableItem key={`menu-top-${index}`} icon={Icon} title={title} index={index} onClick={() => onItemClick(title)} />
          ))}
        </div>
        <div className="flex gap-8">
          {menuItems.slice(4).map(({ icon: Icon, title }, index) => (
            <TableItem key={`menu-bottom-${index}`} icon={Icon} title={title} index={index + 4} onClick={() => onItemClick(title)} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function TableItem({ icon: Icon, title, index, onClick }) {
  return (
    <motion.div
      className="relative flex h-[180px] w-[180px] cursor-pointer flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1,
        scale: 1,
        transition: { 
          delay: index * 0.1,
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      }}
      onClick={onClick}
    >
      <motion.div 
        className="absolute h-full w-full rounded-full bg-gradient-to-br from-green-400/20 to-green-500/5 backdrop-blur-lg"
        whileHover={{ scale: 1.05 }}
      />
      <span className="relative z-10 text-center text-xl font-medium text-white">
        {title}
      </span>
      <motion.div 
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-br from-green-400/30 to-green-500/10 p-3 shadow-lg backdrop-blur-md"
      >
        <Icon className="h-5 w-5 text-white" />
      </motion.div>
    </motion.div>
  )
}

