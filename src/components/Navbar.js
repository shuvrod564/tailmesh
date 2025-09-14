import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-3 border-b'>
        <div className="container flex items-center justify-between">
            <Link href={'/'} className='inline-block'>
                <Image
                    src={'/images/tailmesh.avif'}
                    alt='Tailmesh Logo'
                    width={70} height={70}
                />
            </Link>

            <ul className="flex gap-2">
                <li>
                    <Link href={'/block'} className='text-base px-3 py-2 rounded-lg hover:bg-gray-100 duration-300'>All Blocks</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar