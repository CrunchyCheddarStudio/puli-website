"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="flex items-center w-full h-full bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        {/* Content Container */}
        <div className="px-5 md:pl-20 lg:pl-40 pb-20 md:pb-56 lg:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-4xl md:text-[50px] text-white font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              A community-driven effort.
            </span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base hidden md:block">
            The PULI token is a 100% community-driven cryptocurrency, 
            meaning there is no single entity in charge. 
            Instead, every decision regarding our mission to the moon is made collectively by the entire community.
          </p>
          
          {/* Desktop Buttons */}
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/info"
              className="rounded-[20px] group relative bg-blue-500/40 hover:bg-blue-400/60 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/games"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Our games
            </Link>
            <Link
              href="/join"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Join us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Buttons - Bottom Right */}
      <div className="absolute flex bottom-10 z-[20] right-5 md:hidden gap-3">
        <Link
          href="/info"
          className="rounded-[20px] bg-blue-500 px-4 py-2 text-sm text-white max-w-[120px]"
        >
          Learn more
        </Link>

        <Link
          href="/games"
          className="rounded-[20px] bg-transparent border border-white px-4 py-2 text-sm text-white max-w-[120px]"
        >
          Our games
        </Link>
        <Link
          href="/join"
          className="rounded-[20px] bg-transparent border border-white px-4 py-2 text-sm text-white max-w-[120px]"
        >
          Join us
        </Link>
      </div>

      {/* Puli Character - Responsive Positioning */}
      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/SpacePuli.png"
          alt="puli in space suit"
          height={200}
          width={200}
          className="absolute right-10 md:right-20 lg:right-55 top-20 md:top-40 w-[120px] h-auto md:w-[200px]"
        />

        <Image 
          src="/cliff.webp" 
          alt="cliff" 
          width={480} 
          height={480} 
          className="w-[300px] md:w-[480px] h-auto"
        />
      </div>

      {/* Trees - Bottom */}
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Stars - Top Left */}
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10] w-[150px] h-auto md:w-[300px]"
      />
    </main>
  );
}