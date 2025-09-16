'use client';
import React, { useState } from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from 'next/link';
import { Hexagon } from 'lucide-react';

const NavbarBlock1 = () => {
    const [copied, setCopied] = useState(false);
    return (
        <>
            <Tabs defaultValue="account">
                <TabsList>
                    <TabsTrigger value="account">Preview</TabsTrigger>
                    <TabsTrigger value="password">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className={"mt-3"}>
                    <div className="min-h-[600px] py-12 px-4 border rounded-xl border-dashed border-gray-300 bg-white relative">
                        <div className="playground__overlay absolute top-0 inset-0 z-0"></div>
                        <div className="relative z-10">
                            <div className="container flex items-center justify-between">
                                <Link href={"/"} className='inline-flex items-center gap-2 text-lg font-bold'>
                                    <Hexagon /> Logo
                                </Link>


                                <ul className="flex items-center">
                                    <li className="relative group inline-block">
                                        <button className="px-4 py-2 text-gray-800 font-bold rounded-md">
                                            Features
                                        </button>
                                        <ul className="absolute top-full right-0 hidden group-hover:block bg-white shadow-md rounded-md min-w-[150px] z-10">
                                            <ul className="absolute top-full right-0 hidden group-hover:block bg-white shadow-md rounded-md min-w-[150px] z-10">
                                                <li>
                                                    <Link href="#" className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                                                        About us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                                                        Pricing
                                                    </Link>
                                                </li>

                                            </ul>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>

                                <div>
                                    <Link href={"#"} className='inline-block px-4 py-2 font-medium tracking-wide border border-gray-200 rounded-lg shadow'>
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabsContent>
                <TabsContent value="password">

                </TabsContent>
            </Tabs>
        </>
    )
}

export default NavbarBlock1