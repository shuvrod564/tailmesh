import ComponentShowcase from '@/components/hero/block1'
import React from 'react'

const page = () => {
  return (
    <>
        <div className="py-20">
            <div className="container">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Tailmesh Blocks - Based on Tailwind CSS</h1>

                <div className="border border-dashed bg-gray-50 p-5 rounded-lg">
                    <ComponentShowcase />
                </div>
            </div>
        </div>
    </>
  )
}

export default page