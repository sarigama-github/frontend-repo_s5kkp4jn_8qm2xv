import { motion } from 'framer-motion'
import { Code2, Brush, Rocket, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Sections() {
  return (
    <>
      {/* About */}
      <section id="about" className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.12),transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-zinc max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Me</h2>
              <p className="text-gray-600">I’m a creative developer blending design and code to build delightful, performant experiences. I specialize in React, animations, and polished UI systems.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: <Code2 className="h-5 w-5" />, title: 'Frontend', text: 'React, Next.js, Tailwind' },
                  { icon: <Brush className="h-5 w-5" />, title: 'Design', text: 'Figma, Design Systems' },
                  { icon: <Rocket className="h-5 w-5" />, title: 'Motion', text: 'Micro-interactions, Lottie' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border bg-white p-4 shadow-sm">
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-2xl border bg-white p-6 shadow-lg">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-100 via-white to-pink-100" />
              <p className="mt-4 text-sm text-gray-500">Drop your portrait or a fun graphic here.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900 inline-flex items-center gap-1">
              View all <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <motion.a key={i} href="#" whileHover={{ y: -4 }} className="group rounded-2xl border bg-white p-3 shadow-sm">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100">
                  <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900">Project Title {i}</p>
                    <span className="text-xs text-gray-500">2025</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">Short description about the project highlighting the value and role.</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Skills</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {['React','Next.js','TypeScript','Tailwind','Framer Motion','Node.js','Python','FastAPI','MongoDB','Vite','Figma','Three.js'].map((s) => (
              <span key={s} className="inline-flex items-center justify-center rounded-xl border bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let’s build something</h2>
            <p className="mt-2 text-gray-600">Reach out for collaborations, project inquiries, or just to say hi.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
                <Mail size={16} /> Email
              </a>
              <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                <Github size={16} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
