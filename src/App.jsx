import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <footer className="border-t bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="md:text-center">Built with love, React, and playful motion.</p>
          <p className="md:text-right">Based in Planet Earth</p>
        </div>
      </footer>
    </div>
  )
}

export default App
