"use client"

import Image from "next/image";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const puliY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className="relative w-full bg-[#0a0a2a] overflow-x-hidden">
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{
          y: backgroundY,
          background: `
            radial-gradient(circle at 20% 30%, rgba(123, 31, 162, 0.15) 0%, transparent 25%),
            radial-gradient(circle at 80% 70%, rgba(244, 63, 94, 0.15) 0%, transparent 25%),
            linear-gradient(to bottom, #0a0a2a 0%, #1a1a4a 100%)
          `,
        }}
      >
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              initial={{
                width: `${Math.random() * 4}px`,
                height: `${Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 40],
                x: [0, (Math.random() - 0.5) * 40],
                opacity: [0.2 + Math.random() * 0.6, 0.1 + Math.random() * 0.4]
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen w-full flex items-center relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-1/4 top-1/4 w-80 h-80 bg-purple-900/20 rounded-full filter blur-[100px]"></div>
            <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-pink-900/20 rounded-full filter blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <motion.div 
                className="flex-1"
                style={{ y: textY }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full">
                    Community Owned
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    PULI 2.0
                  </span>
                  <br />
                  <span className="text-white">The People's Crypto</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  A 100% community-driven cryptocurrency revolution. No central authority, 
                  no hidden agendas - just decentralized passion rebuilding the PULI 
                  ecosystem from the ground up.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <motion.a
                    href="#"
                    className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-center hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Join Our Community</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="px-8 py-3.5 border-2 border-purple-400/30 rounded-full text-white font-semibold text-center hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Buy $PULI</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, staggerChildren: 0.1 }}
                >
                  {[
                    { label: "Community", value: "10K+", color: "purple" },
                    { label: "Games", value: "3+", color: "pink" },
                    { label: "Volume", value: "$5M+", color: "purple" },
                    { label: "Since", value: "2021", color: "pink" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all"
                      whileHover={{ y: -5 }}
                    >
                      <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                      <p className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Puli Character */}
              <motion.div 
                className="relative w-full max-w-xl"
                style={{ y: puliY }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <Image
                    src="/SpacePuli.png"
                    alt="Puli in space suit"
                    width={600}
                    height={600}
                    className="w-full h-auto z-20 relative drop-shadow-xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl -z-20"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-20"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Game Showcase Section */}
        <section className="relative py-28 bg-gradient-to-b from-[#1a1a4a]/80 via-[#0a0a2a] to-[#0a0a2a]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-purple-900/5 to-transparent"></div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-pink-900/5 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-4">
                Our Ecosystem
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Gaming & Utility</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Experience the PULI universe through our innovative games and community-driven utilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Puli Runner",
                  description: "The original endless runner that started it all. Collect $PULI tokens while dodging obstacles in this addictive mobile game.",
                  tag: "Live Now",
                  color: "bg-gradient-to-br from-purple-600 to-pink-600",
                  icon: "🏃‍♂️"
                },
                {
                  title: "Puli Swap",
                  description: "Our community-developed DEX for seamless token swaps with low fees and high rewards for liquidity providers.",
                  tag: "Coming Soon",
                  color: "bg-gradient-to-br from-blue-600 to-purple-600",
                  icon: "🔄"
                },
                {
                  title: "PuliVerse",
                  description: "An immersive metaverse experience where PULI is the primary currency for land, items, and experiences.",
                  tag: "In Development",
                  color: "bg-gradient-to-br from-green-600 to-blue-600",
                  icon: "🌌"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`h-48 ${item.color} flex items-center justify-center text-6xl`}>
                    {item.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-5">{item.description}</p>
                    <a href="#" className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium group-hover:underline">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-28 bg-gradient-to-b from-[#0a0a2a] via-[#1a1a4a] to-[#2a2a6a]/20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, #6b46c1 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-4">
                Join The Movement
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Shape the Future</span>?
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Be part of the PULI revolution where every community member has a voice. 
                Together we're building something extraordinary in the crypto space.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="#"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Get Started with PULI</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="px-8 py-4 border-2 border-purple-400/30 rounded-full text-white font-semibold text-lg hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Read Documentation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-[#0a0a2a] border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <span className="text-xl font-bold text-white">PULI Token</span>
                </div>
                <p className="text-gray-400 text-sm">
                  A 100% community-driven cryptocurrency with no central authority.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Ecosystem</h3>
                <ul className="space-y-3">
                  {['Puli Runner', 'Puli Swap', 'PuliVerse', 'Governance'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-3">
                  {['Documentation', 'Whitepaper', 'GitHub', 'Blog'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
                <div className="flex space-x-4 mb-6">
                  {['Twitter', 'Telegram', 'Discord', 'Reddit'].map((item, i) => (
                    <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">{item}</span>
                      <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center">
                        {item[0]}
                      </div>
                    </a>
                  ))}
                </div>
                <p className="text-gray-500 text-xs">
                  © {new Date().getFullYear()} PULI Token. All rights reserved.
                </p>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
              <p>PULI is a community-driven token with no official team or company.</p>
              <p className="mt-2">Always do your own research before investing.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}