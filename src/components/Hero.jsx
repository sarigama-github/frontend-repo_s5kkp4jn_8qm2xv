import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Available for Work
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              I craft delightful web experiences
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Frontend engineer and designer with a love for playful interactions, clean code, and useful products.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-10 flex items-center gap-4">
              <a href="#projects" className="pointer-events-auto inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                Contact Me
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
