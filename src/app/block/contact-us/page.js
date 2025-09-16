import ContactBlock1 from '@/components/contact/contactBlock1' 
import React from 'react'

export const metadata = {
    'title': "Contact Us Blocks"
}

const page = () => {
  return (
    <div className='py-12 md:py-md20'>
        <div className="container">
            <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-dark">Contact us blocks</h1>
 
            <div className="space-y-6 mt-4">
                <h2>one</h2>
                <ContactBlock1 />
            </div>
        </div>
    </div>
  )
}

export default page