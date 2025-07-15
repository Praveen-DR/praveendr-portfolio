'use client'

import { experiences } from '@/contents/experiences';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function ExperienceSection() {
    return (
        <section id='experience' className="py-20">
            <div className="container max-w-5xl mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold mb-12 text-center"
                    {...fadeInUp}
                >
                    Experience
                </motion.h2>

                <motion.div
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                            variants={fadeInUp}
                            whileHover={{ y: -3 }}
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.duration} | {exp.location}</p>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
