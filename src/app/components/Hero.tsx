import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
      <>
      <section className="py-28 container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center mb-4">
            <Image src="/Profile.jpg" alt="Profile" width={100} height={100} className="rounded-full mb-4 w-32 h-32 object-cover 
            ring-2 ring-primary" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I am <span className="text-primary">Praveen D R
          </span></h1>

          <p className="text-xl mdtext-2xl text-gray-300 mb-8">
            Full Stack Developer | UI/UX Enthusiast
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <Link href="https://github.com/Praveen-DR" className="text-2xl text-gray-600 hover:text-primary
             dark:text-gray-300 transition-colors duration-300">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/praveen-d-r-201a24338/" className="text-2xl
             text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300">
              <FaLinkedin />
            </Link>
            <Link href="https://www.instagram.com/smart_chain_stroker_/" className="text-2xl text-gray-600
             hover:text-primary dark:text-gray-300 transition-colors duration-300">
              <FaInstagram />
            </Link>
          </div>
 
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/projects" className="bg-primary inline-block w-full md-w-auto text-white px-8 py-3 
            rounded-lg hover:bg-primary/80 transition-colors ">
              View Projects
            </Link>

            <Link href="/contact" className="bg-gray-500 inline-block w-full md-w-auto text-white hover:text-gray-800 px-8 py-3 
            rounded-lg hover:bg-gray-300 transition-colors ">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Hero