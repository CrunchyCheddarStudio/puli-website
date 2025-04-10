"use client"

import Image from "next/image";

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
          
          {/* Mobile-only text */}
          <p className="text-gray-200 text-sm md:hidden">
            The PULI token is 100% community-driven with no central authority. 
            Join our mission to the moon where every member has a voice!
          </p>
          
          {/* Desktop text (hidden on mobile) */}
          <p className="text-gray-200 text-sm md:text-base hidden md:block">
            The PULI token is a 100% community-driven cryptocurrency, 
            meaning there is no single entity in charge. 
            Instead, every decision regarding our mission to the moon is made collectively by the entire community.
          </p>
        </div>
      </div>

      {/* Puli Character - Hidden on mobile, visible on md+ screens */}
      <div className="absolute bottom-0 right-0 z-[10] hidden md:block">
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