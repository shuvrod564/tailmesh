import ComponentShowcase from '@/components/hero/block1'
import React from 'react'

export const metadata = {
    'title': "Hero blocks"
}

const page = () => {
  return (
    <div className='py-12 md:py-md20'>
        <div className="container">
            <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-dark">Hero blocks</h1>

            <ComponentShowcase />
        </div>
    </div>
  )
}

export default page