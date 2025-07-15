'use client';

import { experiences } from '@/contents/experiences';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="container py-15 bg-white dark:bg-black"
        >
            <div className="container max-w-5xl mx-auto px-4">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100"
                    {...fadeInUp}
                >
                    Experience
                </motion.h2>


                <motion.p
                    className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 text-center text-md md:text-lg font-mono"
                    {...fadeInUp}
                >
                    Each role has been a chance to learn, build, and make an impact. From team collaboration to solving real-world problems, these experiences shape how I create meaningful solutions through code.
                </motion.p>


                <motion.div
                    className="relative border-l-2 border-primary/30 space-y-12"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-10 group"
                            variants={fadeInUp}
                            whileHover={{ y: -3 }}
                            transition={{ type: "spring", stiffness: 120 }}
                        >
                            {/* Timeline Dot */}
                            <span className="absolute left-0 top-5 w-4 h-4 bg-primary rounded-full border-2 border-white dark:border-dark"></span>

                            {/* Experience Card */}
                            <div className="bg-white dark:bg-neutral-900/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-neutral-200 dark:border-neutral-800">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-3">
                                    <div className="flex items-center gap-4">
                                        {exp.link ? (
                                            <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    width={48}
                                                    height={48}
                                                    className="rounded-full object-cover border border-primary/30"
                                                />
                                            </a>
                                        ) : (
                                            <Image
                                                src={exp.logo}
                                                alt={exp.company}
                                                width={48}
                                                height={48}
                                                className="rounded-full object-cover border border-primary/30"
                                            />
                                        )}

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                                {exp.role} @{' '}
                                                {exp.link ? (
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:underline"
                                                    >
                                                        {exp.company}
                                                    </a>
                                                ) : (
                                                    exp.company
                                                )}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {exp.duration} | {exp.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3 space-y-1">
                                    {exp.description.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
