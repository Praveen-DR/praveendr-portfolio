'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const blogPosts = [
  {
    title: 'Mastering React in 2025',
    summary: 'Explore the latest tips and patterns to supercharge your React development.',
    link: '#',
  },
  {
    title: 'Next.js 14: What’s New?',
    summary: 'Take a deep dive into the newest features in Next.js and how to use them.',
    link: '#',
  },
  {
    title: 'Dark Mode Done Right',
    summary: 'Learn how to create seamless dark/light mode transitions in your UI.',
    link: '#',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Blogs() {
  return (
    <section id="blogs">
      <div className="min-h-screen px-6 py-16 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Latest Blogs</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Insights, tutorials, and updates curated just for you.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group bg-white/30 dark:bg-dark/30 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/10 dark:border-white/10 transition hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.summary}
              </p>
              <Link
                href={post.link}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* If no blog posts, show this */}
        {blogPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl mx-auto mt-20 text-center"
          >
            <div className="text-6xl mb-4">📰</div>
            <h2 className="text-2xl font-semibold mb-2">No Posts Published Yet</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We&apos;re currently preparing some awesome content for you.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
