'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogs = [
  {
    title: 'Building a Fullstack App with Next.js',
    summary: 'Step-by-step guide on creating a modern app using Next.js, Tailwind CSS, and APIs.',
    image: 'https://source.unsplash.com/random/400x300?code',
    link: '#',
  },
  {
    title: 'Dark Mode Best Practices',
    summary: 'Design tips to implement beautiful and accessible dark themes in modern UIs.',
    image: 'https://source.unsplash.com/random/400x300?dark',
    link: '#',
  },
  {
    title: 'Top 5 VS Code Extensions for Devs',
    summary: 'Boost productivity with these handpicked extensions used by professionals.',
    image: 'https://source.unsplash.com/random/400x300?editor',
    link: '#',
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📚 Blog Highlights
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Explore recent articles, coding tutorials, and insights into software development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/30 dark:bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/10 hover:shadow-blue-500/20 transition duration-300 group"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
              <Link
                href={post.link}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
