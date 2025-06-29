'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaEye, FaEyeDropper } from 'react-icons/fa'

const certificateData = [
  {
    title: 'Full Stack Developer Internship',
    img: '/certificates/fullstackdeveloper.jpg',
    link: '/certificates/fullstackdeveloper.jpg',
    description: 'Completed a Full Stack Developer internship at Avarthan Innovations LLP, contributing to full-stack feature development with strong commitment and learning mindset.',
  },
  {
    title: 'Current Advances in Software Testing and Applicable Tools',
    img: '/certificates/numocity.png',
    link: '/certificates/Testing FDP Certificate.pdf',
    description:'Attended a 5-day workshop on Current Advances in Software Testing and Applicable Tools conducted by NITTE.',
  },

  {
    title: 'Research Methodology and Publications workshop',
    img: '/certificates/ResearchWorkshop.png',
    link: '/certificates/test1.pdf',
    description: 'Attended a 2-day workshop on Research Methodology and Publications conducted by NITTE.',
  },
  
]

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="container justify-center relative flex flex-col items-center px-6 py-15 font-sans text-sm font-light bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-12"
      >
        <h2 className="text-4xl font-bold">Certificates</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-md md:text-lg font-mono">
          Here are a few of the certifications I've earned.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificateData.map((certificate, index) => (
          <motion.div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/60 backdrop-blur-md p-4 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            viewport={{ once: true }}
          >
            {/* Glow Background on Hover */}
            <motion.div
              className="absolute inset-0 z-0 rounded-xl"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                background:
                  'radial-gradient(circle at center, rgba(34,197,94,0.15), transparent 60%)',
              }}
              whileTap={{
                background:
                  'radial-gradient(circle at center, rgba(34,197,94,0.25), transparent 60%)',
              }}
              transition={{ duration: 0.4 }}
            ></motion.div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <Image
                src={certificate.img}
                alt={certificate.title}
                width={300}
                height={200}
                className="rounded-md object-cover w-full h-[180px] mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">{certificate.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {certificate.description}
              </p>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-5 py-3 rounded-md transition-colors"
              >
                View Certificate
              </a>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
