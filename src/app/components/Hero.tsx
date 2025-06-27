'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">


        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className='flex justify-center items-center mb-4'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image src="/Profile.JPG" alt="Profile" width={100} height={100} className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Praveen D R
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer | UI/UX Enthusiast
          </motion.p>
          <div className='flex-row'>
            <motion.div
              className="flex justify-center space-x-4 mb-8"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://github.com/Praveen-DR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/praveen-d-r-201a24338/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/smart_chain_stroker_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />


              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>

          </motion.div>

          <motion.a
              whileHover={{ scale: 1.1 }}
              href="/Praveen_DR_Resume.pdf"
              role="link"
              className="mt-7 font-bold inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-white transition bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
            >
              Resume
            </motion.a>

        </div>
      </div>
    </section>
  );
} 