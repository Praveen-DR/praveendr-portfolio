

'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a dedicated Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, Passionate about coding and problem-solving.
          I create seamless user experiences and robust server-side solutions. 
          I am committed to delivering robust and innovative software solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML/CSS</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Spring Boot</li>
              <li>Java</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Postman</li>
              <li>cPanel</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className='text-xl font-semibold mb-2'>Web Developer Intern</h3>
            <p className='text-primary mb-2'>Avarthan Innovations LLP. • January 2025 - Present</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Gained hands-on experience in building full-stack applications using Spring Boot, MySQL, Next.js, and Tailwind CSS</li>
              <li>Worked with Postman for API testing and validation</li>
              <li>Explored microservices architecture and Docker for containerization and deployment</li>
              <li>Contributed to the development and testing of real-world projects in an agile environment</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className='text-xl font-semibold mb-2'>Junior Support Engineer</h3>
            <p className='text-primary mb-2'>GlowTouch Technologies Private Limited (Now UnifyCX) • Nov 2022 - July 2023</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Provided technical assistance to customers of leading hosting brands (HostGator, Website Builder, Site Builder, Gator Builder) via email and chat.</li>
              <li>Demonstrated expertise in troubleshooting server issues and ensuring smooth operations.</li>
              <li>Guided clients through technical solutions and escalated unresolved issues to appropriate teams.</li>
              <li>Managed customer complaints, provided timely solutions, and ensured resolution with proper documentation.</li>
              <li>Developed excellent communication and problem-solving skills through daily client interactions.</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className='text-xl font-semibold mb-2'>Master of Computer Application</h3>
            <p className='text-primary mb-2'> NMAM Institute of Technology, Nitte  • Sep 2023 - Jun 2025</p>
            <p className='text-secondary'>Graduated with honors. Focused on software engineering and web development.</p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className='text-xl font-semibold mb-2'>Bachelor of Computer Application</h3>
            <p className='text-primary mb-2'> Govinda Dasa College, Surathkal   • Jul 2019 -  Nov 2022</p>
          </motion.div>


        </motion.div>
      </motion.section>
    </div>
  )
} 