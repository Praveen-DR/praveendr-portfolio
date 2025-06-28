'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const blogs = [
  {
    title: 'How I Built My Portfolio with Next.js',
    summary: 'A breakdown of my design process, component structure, and deployment tips.',
    tags: ['Next.js', 'Portfolio', 'Tailwind'],
    image: 'https://source.unsplash.com/600x400/?website,design',
    link: '#',
  },
  {
    title: '10 VS Code Shortcuts That Changed My Workflow',
    summary: 'Productivity boosters every developer should know.',
    tags: ['VS Code', 'Productivity', 'Tools'],
    image: 'https://source.unsplash.com/600x400/?developer,workspace',
    link: '#',
  },
  {
    title: 'Dark Mode Tips for Better UX',
    summary: 'Subtle changes that improve readability and style in dark themes.',
    tags: ['UX', 'Dark Mode', 'Design'],
    image: 'https://source.unsplash.com/600x400/?dark,theme',
    link: '#',
  },
]

export default function Blogs() {
  return (
    <section id="blogs" className="bg-gray-50 dark:bg-gray-950 py-20 px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">📝 My Writings</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Sharing thoughts, tutorials, and developer stories that shaped my journey.
        </p>
      </motion.div>

      <div className="space-y-12 max-w-5xl mx-auto">
        {blogs.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            } items-center gap-8 bg-white/10 dark:bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full lg:w-1/2 rounded-xl shadow-md object-cover h-64"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 dark:bg-blue-800/30 text-blue-600 dark:text-blue-300 text-xs px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href={post.link}
                className="inline-block mt-2 text-primary font-medium hover:underline"
              >
                Read Article →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
