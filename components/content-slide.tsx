import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

// Define animation variants
const titleVariants: Variants = {
  initial: { y: 0, scale: 1.5, opacity: 0 },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 1, times: [0, 0.5, 1] }
  }
}

const contentData = {
  "Accueil": {
    title: "Bienvenue à BambooLab",
    content: `BambooLab est le premier laboratoire de recherche innovant du Sankore Research Institute. 
    Inspiré par la résilience et la croissance rapide du bambou, nous incarnons la force, la flexibilité 
    et l'engagement envers l'innovation durable. Notre laboratoire se concentre sur trois domaines principaux :
    l'Intelligence Artificielle, l'Interface Homme-Machine, et l'ICT4Dev (Technologies de l'Information et 
    de la Communication pour le Développement).`,
    author: "Dr. Aboul Hassane CISSE",
    role: "Directeur de BambooLab"
  },
  "À Propos": {
    title: "Notre Vision",
    content: `BambooLab aspire à devenir un centre d'excellence en recherche technologique en Afrique. 
    Nous croyons en la puissance de l'innovation pour transformer la société et résoudre les défis 
    du développement durable. Notre approche combine expertise technique, engagement social et 
    collaboration internationale pour créer un impact durable.`,
    author: "Équipe de Direction",
    role: "BambooLab"
  },
  "Notre Équipe": {
    title: "Une Équipe Passionnée",
    content: `Notre équipe diversifiée réunit des chercheurs, des étudiants et des professionnels 
    partageant une passion pour l'innovation technologique. Chaque membre apporte une expertise unique, 
    créant un environnement dynamique propice à la créativité et à l'excellence en recherche.`,
    author: "Service RH",
    role: "Gestion des Talents"
  },
  "Projets": {
    title: "Nos Innovations",
    content: `Découvrez nos projets phares en IA, Interface Homme-Machine et ICT4Dev. 
    Chaque projet vise à apporter des solutions concrètes aux défis sociétaux, 
    en mettant l'accent sur l'éducation, la santé et le développement durable.`,
    author: "Équipe Projets",
    role: "Coordination R&D"
  },
  "Événements": {
    title: "Nos Activités",
    content: `BambooLab organise régulièrement des événements, des ateliers et des séminaires 
    pour partager nos connaissances et créer des opportunités de networking. Rejoignez-nous 
    pour découvrir les dernières innovations et rencontrer des experts passionnés.`,
    author: "Équipe Événementielle",
    role: "Organisation & Communication"
  },
  "Rejoindre": {
    title: "Rejoignez l'Innovation",
    content: `Nous recherchons constamment des talents passionnés par la technologie et l'innovation. 
    Que vous soyez étudiant, chercheur ou professionnel, BambooLab vous offre l'opportunité de 
    participer à des projets innovants et de développer vos compétences.`,
    author: "Recrutement",
    role: "Développement des Talents"
  },
  "Partenariats": {
    title: "Collaborons",
    content: `BambooLab développe des partenariats stratégiques avec des universités, des entreprises 
    et des organisations internationales. Ensemble, nous créons un écosystème d'innovation robuste 
    pour un impact maximal sur la société.`,
    author: "Relations Partenaires",
    role: "Développement Stratégique"
  },
  "Contact": {
    title: "Contactez-nous",
    content: `Vous souhaitez en savoir plus sur BambooLab ou explorer des opportunités de collaboration ? 
    Notre équipe est à votre écoute. Contactez-nous pour discuter de vos idées et découvrir comment 
    nous pouvons travailler ensemble.`,
    author: "Service Communication",
    role: "Relations Externes"
  }
}

export function ContentSlide({ title, onClose }: { title: string; onClose: () => void }) {
  const data = contentData[title as keyof typeof contentData] || {
    title: title,
    content: "Contenu en cours de développement",
    author: "BambooLab",
    role: "Innovation & Recherche"
  }

  return (
    <motion.div
      className="absolute left-0 top-0 h-screen w-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex h-full flex-col p-4 sm:p-8 md:p-12"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        <motion.h2
          className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          {data.title}
        </motion.h2>
        <motion.div
          className="mb-8 h-0.5 w-full bg-green-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className="mb-6 text-lg sm:text-xl md:text-2xl text-white whitespace-pre-line">
            {data.content}
          </p>
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Profile"
              width={64}
              height={64}
              className="mr-4 rounded-full"
            />
            <div>
              <p className="text-base sm:text-lg font-semibold text-white">{data.author}</p>
              <p className="text-sm sm:text-base text-gray-300">{data.role}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <button
        className="absolute right-4 top-4 sm:right-8 sm:top-8 rounded-full bg-white/10 p-2 text-white backdrop-blur-md"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  )
}

