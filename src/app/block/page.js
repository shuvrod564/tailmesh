import ComponentShowcase from '@/components/hero/block1'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="py-20">
        <div className="container">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Tailmesh Blocks - Based on Tailwind CSS</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-8 md:mt-12">
            <div className="lg:col-span-3"> 
              <div className="border border-dashed bg-gray-50 p-5 rounded-lg">
                <Link href={'/block/hero'}>view</Link> 
              </div>
            </div>
            <div className="lg:col-span-2"> 
              <div className="border border-dashed bg-gray-50 p-5 rounded-lg">
                <Link href={'/block/navbar'}>Navbar</Link> 
              </div>
            </div>
            <div className="lg:col-span-2"> 
              <div className="border border-dashed bg-gray-50 p-5 rounded-lg">
                <Link href={'/block/contact-us'}>Contact Us</Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page