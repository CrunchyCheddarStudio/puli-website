import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';

const Navbar = () => {
    return (
        <div className='fixed top-0 z-[40] w-full h-[60px] md:h-[80px] lg:h-[100px] bg-transparent flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20'>
            {/* Logo and Brand Name */}
            <div className='flex flex-row gap-2 md:gap-3 items-center'>
                <div className='w-8 h-8 md:w-10 md:h-10'>
                    <Image
                        src="/pulilogogradient.png"
                        alt="puli logo"
                        width={40}
                        height={40}
                        className='w-full h-full object-contain rounded-full'
                    />
                </div>
                <h1 className='text-white text-lg sm:text-xl md:text-2xl font-semibold'>PULI</h1>
            </div>

            {/* Social Icons */}
            <div className='flex flex-row gap-3 sm:gap-4 md:gap-5 mb-1 md:mb-2'>
                {Socials.map((social) => (
                    <a 
                        key={social.name}
                        href={social.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <div className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'>
                            <Image 
                                src={social.src}
                                alt={social.name}
                                width={28}
                                height={28}
                                className='w-full h-full object-contain'
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;