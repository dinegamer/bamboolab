"use client"

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { GlassCircleMenu } from '../components/glass-circle-menu'
import { TableOfContents } from '../components/table-of-contents'
import { ContentSlide } from '../components/content-slide'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
// import TestTailwind from '../components/TestTailwind'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<string | null>(null)

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-green-700 to-green-900">
      {/* <TestTailwind /> */}
      <AnimatePresence>
        {!currentSlide && (
          <>
            <Header />
            <div className="flex flex-col md:flex-row h-full items-center justify-between px-4 sm:px-8 md:px-20">
              <div className="relative mb-8 md:mb-0">
                <div className="absolute -left-4 -top-4 sm:-left-10 sm:-top-10 h-40 w-40 sm:h-60 sm:w-60 rounded-full bg-gradient-to-br from-green-400/20 to-green-500/5 backdrop-blur-lg" />
                <div className="absolute -left-2 -top-2 sm:-left-5 sm:-top-5 h-20 w-20 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br from-green-400/20 to-green-500/5 backdrop-blur-lg" />
                <div className="absolute -left-1 -top-1 sm:-left-2 sm:-top-2 h-10 w-10 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-green-400/20 to-green-500/5 backdrop-blur-lg" />
                <h1 className="relative text-4xl sm:text-6xl md:text-8xl font-semibold leading-tight text-white">
                  Bamboo
                  <br />
                  Lab
                </h1>
              </div>
              <GlassCircleMenu onItemClick={setCurrentSlide} />
            </div>
            <Footer />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentSlide === 'table-of-contents' && (
          <TableOfContents onItemClick={setCurrentSlide} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentSlide && currentSlide !== 'table-of-contents' && (
          <ContentSlide title={currentSlide} onClose={() => setCurrentSlide(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

