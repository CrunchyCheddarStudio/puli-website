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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const puliY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="relative w-full bg-[#0a0a2a]">
      {/* Fixed Background - Replaced stars.png with CSS stars */}
      <motion.div 
        className="fixed inset-0 z-0 bg-[#0a0a2a]"
        style={{
          y: backgroundY,
          opacity: 0.8
        }}
      >
        {/* CSS Starfield */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen w-full flex items-center pt-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <motion.div 
                className="flex-1"
                style={{ y: textY }}
              >
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    PULI 2.0
                  </span>
                  <br />
                  <span className="text-white">Community Powered</span>
                </motion.h1>

                <motion.p 
                  className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  The PULI token has risen from the ashes as a 100% community-driven cryptocurrency. 
                  No central authority, no hidden agendas - just a passionate community rebuilding 
                  the PULI ecosystem together.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <motion.a
                    href="#"
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-center hover:opacity-90 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Our Community
                  </motion.a>
                  <motion.a
                    href="#"
                    className="px-8 py-3 border-2 border-purple-500 rounded-full text-white font-semibold text-center hover:bg-purple-500/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Buy $PULI
                  </motion.a>
                </div>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400">Community Members</p>
                    <p className="text-2xl font-bold text-purple-400">10K+</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400">Games Launched</p>
                    <p className="text-2xl font-bold text-pink-400">3+</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400">Total Volume</p>
                    <p className="text-2xl font-bold text-purple-400">$5M+</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400">Since</p>
                    <p className="text-2xl font-bold text-pink-400">2021</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Puli Character - Only image we're keeping from original */}
              <motion.div 
                className="relative w-full max-w-xl"
                style={{ y: puliY }}
              >
                <Image
                  src="/SpacePuli.png"
                  alt="Puli in space suit"
                  width={600}
                  height={600}
                  className="w-full h-auto z-20 relative"
                  priority
                />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Game Showcase Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#1a1a4a] to-[#0a0a2a]">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Gaming Legacy</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Puli Runner - Replaced image with CSS */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">PULI RUNNER</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Puli Runner</h3>
                  <p className="text-gray-300 mb-4">The original endless runner game that started it all. Collect $PULI tokens while dodging obstacles.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-400">Original Release: 2021</span>
                    <a href="#" className="text-pink-400 hover:text-pink-300 text-sm font-semibold">Play Now →</a>
                  </div>
                </div>
              </motion.div>

              {/* Community Revival - Replaced image with CSS */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl text-center px-4">COMMUNITY POWER</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">The Great Revival</h3>
                  <p className="text-gray-300 mb-4">After the original project ended, the community banded together to keep PULI alive.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-400">Since 2022</span>
                    <a href="#" className="text-pink-400 hover:text-pink-300 text-sm font-semibold">Join Us →</a>
                  </div>
                </div>
              </motion.div>

              {/* Future Plans - Replaced image with CSS */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg rotate-45 flex items-center justify-center">
                    <span className="text-white font-bold text-xl -rotate-45">PULI 2.0</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Puli 2.0 Roadmap</h3>
                  <p className="text-gray-300 mb-4">New games, DeFi integrations, and community governance - the future is bright!</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-400">Coming 2025</span>
                    <a href="#" className="text-pink-400 hover:text-pink-300 text-sm font-semibold">View Roadmap →</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - Replaced grid.svg with CSS pattern */}
        <section className="relative py-20 bg-gradient-to-b from-[#0a0a2a] to-[#1a1a4a]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `linear-gradient(to right, #6b46c1 1px, transparent 1px), linear-gradient(to bottom, #6b46c1 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
          </div>
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Join the Mission</span>?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Be part of the PULI revolution where every community member has a voice. 
              Together were building something extraordinary in the crypto space.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-all"
              >
                Get Started with PULI
              </a>
              <a
                href="#"
                className="px-8 py-4 border-2 border-purple-500 rounded-full text-white font-semibold text-lg hover:bg-purple-500/10 transition-all"
              >
                Explore Our Docs
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer - Replaced logo with text */}
        <footer className="relative bg-[#0a0a2a] py-12 border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <span className="text-xl font-bold text-white">PULI Token</span>
                </div>
                <p className="text-gray-400 mt-2">Community Powered Since 2021</p>
              </div>
              <div className="flex flex-wrap gap-6 justify-center">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} PULI Token. All rights reserved.</p>
              <p className="mt-2">PULI is a community-driven token with no official team or company.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}