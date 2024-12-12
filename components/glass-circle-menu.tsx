import { motion } from 'framer-motion'
import { Home, Info, Calendar, Users, Briefcase, Mail, BookOpen, Star, Settings } from 'lucide-react'

const menuItems = [
  { icon: Home, title: "Accueil", position: 0 },
  { icon: Info, title: "À Propos", position: 1 },
  { icon: Users, title: "Notre Équipe", position: 2 },
  { icon: BookOpen, title: "Projets", position: 3 },
  { icon: Calendar, title: "Événements", position: 4 },
  { icon: Briefcase, title: "Rejoindre", position: 5 },
  { icon: Star, title: "Partenariats", position: 6 },
  { icon: Mail, title: "Contact", position: 7 }
]

export function GlassCircleMenu({ onItemClick }) {
  const getCirclePosition = (index: number, total: number) => {
    // Start from the top (270 degrees or -90 degrees)
    const startAngle = -90
    // Calculate angle for each item (360 degrees / number of items)
    const angleStep = 360 / total
    // Convert to radians and calculate position
    const angle = (startAngle + angleStep * index) * (Math.PI / 180)
    
    return {
      x: Math.cos(angle),
      y: Math.sin(angle)
    }
  }

  return (
    <motion.div 
      className="relative w-full max-w-[500px] aspect-square"
      initial={{ rotate: -360 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Main circle with glassmorphism */}
      <div 
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform cursor-pointer overflow-hidden rounded-full"
        onClick={() => onItemClick('table-of-contents')}
      >
        <motion.div 
          className="h-full w-full bg-gradient-to-br from-green-400/20 to-transparent shadow-[inset_0_0_50px_rgba(255,255,255,0.2)] backdrop-blur-[8px]"
          whileHover={{ scale: 1.02 }}
        />
      </div>

      {/* Center icon */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="rounded-full bg-green-500/20 p-4 sm:p-6 shadow-lg backdrop-blur-md">
          <Settings className="h-6 w-6 sm:h-8 sm:w-8 text-white animate-spin-slow" />
        </div>
      </div>

      {/* Surrounding icons */}
      {menuItems.map(({ icon: Icon, title }, index) => {
        const position = getCirclePosition(index, menuItems.length)
        const radius = 46 // percentage of container size
        return (
          <motion.div
            key={`icon-${index}`}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ 
              x: `calc(${position.x * radius}% - 0.75rem)`,
              y: `calc(${position.y * radius}% - 0.75rem)`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onItemClick(title)}
          >
            <motion.div 
              className="rounded-full bg-green-500/20 p-2 sm:p-4 shadow-lg backdrop-blur-md"
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

