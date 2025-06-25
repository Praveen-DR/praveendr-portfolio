import React from 'react'
import { projects} from '@/contents/project'
import Image from 'next/image'

const Projects = () => {
  return (
    <>
        <section className='py-20 container max-w-7xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-12 text-center'>Featured Projects</h2>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    projects.map((project) => (
                        <article key={project.title}>
                            <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
                                <Image src={project.image} alt={project.title} fill className='object-cover' sizes='(max-width: 768px) 100vw, 
                                (max-width: 1200px) 50vw, 33vw'/>
                            </div>

                            
                        </article>
                    ))
                }

            </div>
        </section>
    </>
  )
}

export default Projects