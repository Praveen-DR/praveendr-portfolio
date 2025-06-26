import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <>
      <div className='container max-w-7xl mx-auto py-20'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Contact Me</h1>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>


          {/* contact info */}
          <div className='space-y-8'>
            <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
            <p className='text-secondary md:w-2/3'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <FaEnvelope className='w-6 h-6 text-primary' />
                <div>
                  <h3 className='text-semibold'>Email:</h3>
                  <Link
                    href="mailto:praveendr07@gmail.com"
                    className='text-secondary hover:text-primary'>praveendr07@gmail.com
                  </Link>
                </div>
              </div>



              <div className='flex items-center gap-4'>
                <FaPhone className='w-6 h-6 text-primary' />
                <div>
                  <h3 className='text-semibold'>Phone:</h3>
                  <Link
                    href="tele:+919844352953"
                    className='text-secondary hover:text-primary'>+ 91-9844352953
                  </Link>
                </div>
              </div>


              <div className='flex items-center gap-4'>
                <FaMapMarkerAlt className='w-6 h-6 text-primary' />
                <div>
                  <h3 className='text-semibold'>Location:</h3>
                  <p className='text-secondary'>Mangalore, DK, Karnataka – 575014</p>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg'>
          <form className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
                <input type='text' id="name" name='name' placeholder='Enter you name'
                className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700
                bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'/>
              </div>


              <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
                <input type='email' id="email" name="email" placeholder='Enter you email'
                className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700
                bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'/>
              </div>


              
              <div>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
                <textarea  id="message" name="message" placeholder='Enter you message'
                className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700
                bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'/>
              </div>

          </form>


          </div>

        </div>

      </div>
    </>

  )
}

export default ContactPage