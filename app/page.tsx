"use client"

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiDollarSign, FiUsers, FiGlobe, FiGithub, FiTwitter, FiSend } from 'react-icons/fi';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Subtle parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const featuresY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-[#070716] overflow-x-hidden">
      {/* Animated Background Canvas */}
      <motion.div 
        className="fixed inset-0 z-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.2) 0%, transparent 25%),
            radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.2) 0%, transparent 25%),
            linear-gradient(to bottom, #070716 0%, #0f0f2d 100%)
          `,
        }} />

        {/* Animated Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 50],
              y: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1 + Math.random() * 0.4, 0.05 + Math.random() * 0.2]
            }}
            transition={{
              duration: 15 + Math.random() * 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full py-6 px-6 md:px-12 lg:px-24 z-50 backdrop-blur-md bg-[#070716]/80 border-b border-white/5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
              <span className="text-xl font-bold text-white">PULI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</a>
              <a href="#ecosystem" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Ecosystem</a>
              <a href="#community" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Community</a>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Launch App
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative pt-20">
          {/* Floating gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-[15%] top-[20%] w-64 h-64 bg-purple-600/10 rounded-full filter blur-[80px]"></div>
            <div className="absolute right-[15%] bottom-[20%] w-64 h-64 bg-pink-600/10 rounded-full filter blur-[80px]"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-32">
            <motion.div 
              className="flex flex-col lg:flex-row items-center justify-between gap-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Text Content */}
              <motion.div 
                className="flex-1"
                style={{ y: textY }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-6">
                    Community Powered
                  </span>
                </motion.div>

                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    The Future of
                  </span>
                  <br />
                  <span className="text-white">Community Crypto</span>
                </motion.h1>

                <motion.p 
                  className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  PULI represents a new paradigm in decentralized finance - 100% community owned, 
                  governed, and operated with complete transparency.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mb-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-3 group">
                    <span>Get Started</span>
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="px-8 py-4 border border-white/10 rounded-full text-white font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-3 group">
                    <span>Learn More</span>
                    <FiArrowRight className="transition-transform group-hover:translate-x-1 opacity-70" />
                  </button>
                </motion.div>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, staggerChildren: 0.1 }}
                >
                  {[
                    { icon: <FiUsers className="text-purple-400" />, label: "Holders", value: "42,689", change: "+12.4%" },
                    { icon: <FiDollarSign className="text-pink-400" />, label: "Volume", value: "$89.2M", change: "+8.2%" },
                    { icon: <FiGlobe className="text-purple-400" />, label: "Countries", value: "127", change: "+5" },
                    { icon: <FiGithub className="text-pink-400" />, label: "Contributors", value: "1,428", change: "+34" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/10 rounded-lg">
                          {stat.icon}
                        </div>
                        <span className="text-xs text-gray-400">{stat.label}</span>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                        <span className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded-full">
                          {stat.change}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Interactive Hero Graphic */}
              <motion.div 
                className="relative w-full max-w-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-square">
                  {/* 3D Card Container */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden transform-style-preserve-3d perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
                      {/* Animated PULI logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                            PULI
                          </div>
                          <div className="absolute -inset-6 bg-purple-600/30 rounded-full blur-xl -z-10"></div>
                        </div>
                      </div>
                      
                      {/* Floating elements */}
                      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg"></div>
                    </div>
                  </div>
                  
                  {/* Floating tokens */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-lg"
                      initial={{
                        width: `${Math.random() * 40 + 20}px`,
                        height: `${Math.random() * 40 + 20}px`,
                        x: `${Math.random() * 80 - 40}%`,
                        y: `${Math.random() * 80 - 40}%`,
                        rotate: Math.random() * 360
                      }}
                      animate={{
                        y: [0, (Math.random() - 0.5) * 40],
                        x: [0, (Math.random() - 0.5) * 40],
                        rotate: [0, Math.random() * 360]
                      }}
                      transition={{
                        duration: 15 + Math.random() * 30,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-32 bg-gradient-to-b from-[#0f0f2d] to-[#070716]">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-4">
                Why PULI?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Revolutionary</span> Features
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                PULI combines cutting-edge blockchain technology with community-first principles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Feature Navigation */}
              <div className="lg:sticky lg:top-32 h-fit space-y-4">
                {[
                  "Community Governance",
                  "Play-to-Earn Ecosystem",
                  "DeFi Integration"
                ].map((feature, i) => (
                  <motion.button
                    key={i}
                    className={`w-full text-left p-6 rounded-xl transition-all ${activeFeature === i ? 'bg-white/5 border border-purple-400/30' : 'bg-white/3 border border-white/5 hover:bg-white/5'}`}
                    onClick={() => setActiveFeature(i)}
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
                    <p className="text-gray-400 text-sm">
                      {[
                        "Fully decentralized decision making through our DAO",
                        "Engaging games that reward players with PULI tokens",
                        "Seamless integration with leading DeFi protocols"
                      ][i]}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Feature Showcase */}
              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 p-8 md:p-12 h-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="flex flex-col md:flex-row gap-8 h-full">
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-6">
                          Feature {activeFeature + 1}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">
                          {[
                            "True Community Governance",
                            "Immersive Gaming Ecosystem",
                            "Advanced DeFi Integration"
                          ][activeFeature]}
                        </h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                          {[
                            "Every PULI holder has voting rights on protocol changes, treasury allocations, and future development. Our decentralized autonomous organization (DAO) ensures the community retains full control.",
                            "Our suite of play-to-earn games offers engaging experiences while rewarding players with PULI tokens. The ecosystem includes everything from casual mobile games to competitive eSports.",
                            "PULI seamlessly integrates with leading DeFi protocols for staking, yield farming, and liquidity provision. Our smart contracts have been audited by top blockchain security firms."
                          ][activeFeature]}
                        </p>
                        <ul className="space-y-4 mb-8">
                          {[
                            ["Fully on-chain voting", "Treasury transparency", "Proposal system"],
                            ["Multiple game genres", "NFT integration", "Tournaments"],
                            ["Yield optimization", "Cross-chain swaps", "Lending markets"]
                          ][activeFeature].map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-5 h-5 bg-purple-500/10 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                </div>
                              </div>
                              <span className="ml-3 text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                          Learn More
                          <FiArrowRight />
                        </button>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-full h-64 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-white/10 flex items-center justify-center">
                          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                          <div className="relative z-10 text-6xl">
                            {["🏛️", "🎮", "💱"][activeFeature]}
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <div className="text-xs text-gray-400">Live Demo Available</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section id="ecosystem" className="relative py-32 bg-gradient-to-b from-[#070716] to-[#0f0f2d]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-purple-900/10 to-transparent"></div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-pink-900/10 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-4">
                Our Products
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">PULI Ecosystem</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                A growing suite of products and services powered by PULI tokens
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Puli Runner",
                  description: "Our flagship play-to-earn mobile game with over 500k active players.",
                  status: "Live",
                  icon: "🏃‍♂️",
                  color: "from-purple-600 to-pink-600"
                },
                {
                  title: "Puli Swap",
                  description: "Decentralized exchange with the lowest fees and highest liquidity.",
                  status: "Live",
                  icon: "🔄",
                  color: "from-blue-600 to-purple-600"
                },
                {
                  title: "Puli Vaults",
                  description: "Auto-compounding yield optimizer for maximum returns.",
                  status: "Beta",
                  icon: "🏦",
                  color: "from-green-600 to-blue-600"
                },
                {
                  title: "PuliVerse",
                  description: "Immersive metaverse world where PULI is the primary currency.",
                  status: "Development",
                  icon: "🌌",
                  color: "from-yellow-600 to-pink-600"
                },
                {
                  title: "Puli Cards",
                  description: "NFT trading card game with playable assets across our ecosystem.",
                  status: "Coming Soon",
                  icon: "🃏",
                  color: "from-red-600 to-purple-600"
                },
                {
                  title: "Puli Bridge",
                  description: "Cross-chain asset transfers between major blockchains.",
                  status: "Development",
                  icon: "🌉",
                  color: "from-indigo-600 to-pink-600"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all group h-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredCard(i)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-7xl z-10">{item.icon}</span>
                    <AnimatePresence>
                      {hoveredCard === i && (
                        <motion.div
                          className="absolute inset-0 bg-black/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                    <div className="absolute bottom-4 right-4 px-2.5 py-0.5 text-xs font-medium rounded-full bg-black/30 text-white backdrop-blur-sm">
                      {item.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 mb-5">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:underline">
                        Learn more
                        <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                      </a>
                      <span className="text-xs text-gray-500">{i + 1}/6</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="relative py-32 bg-gradient-to-b from-[#0f0f2d] to-[#070716]">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-6">
                  Join Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Become Part of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">PULI Community</span>
                </h2>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  Our vibrant community is the heart of everything we do. Join thousands of members worldwide who are shaping the future of decentralized finance and gaming.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    { icon: <FiTwitter />, name: "Twitter", handle: "@PuliOfficial", members: "42.8K" },
                    { icon: <FiSend />, name: "Telegram", handle: "t.me/PuliChat", members: "18.3K" },
                    { icon: <FiUsers />, name: "Discord", handle: "discord.gg/puli", members: "12.7K" },
                    { icon: <FiGithub />, name: "GitHub", handle: "github.com/Puli", members: "1.2K" }
                  ].map((platform, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-400/30 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-300">
                          {platform.icon}
                        </div>
                        <span className="text-sm font-medium text-white">{platform.name}</span>
                      </div>
                      <div className="text-xs text-gray-400 mb-1">{platform.handle}</div>
                      <div className="text-xs text-purple-300">{platform.members} members</div>
                    </div>
                  ))}
                </div>
                
                <button className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-3">
                  <span>Join Community</span>
                  <FiArrowRight />
                </button>
              </motion.div>
              
              <motion.div 
                className="flex-1 w-full"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Community Highlights</h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Governance Proposal #42 Passed",
                        description: "Community votes to allocate 500K PULI to game development",
                        date: "2 days ago",
                        votes: "1,428"
                      },
                      {
                        title: "Puli Runner v2.0 Launched",
                        description: "Major update with new levels and rewards system",
                        date: "1 week ago",
                        votes: null
                      },
                      {
                        title: "AMA with Core Contributors",
                        description: "Recording available in our Discord",
                        date: "2 weeks ago",
                        votes: null
                      }
                    ].map((item, i) => (
                      <div key={i} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-white">{item.title}</h4>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                        {item.votes && (
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-xs text-gray-400">{item.votes} votes</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-8 w-full py-3 border border-white/10 rounded-full text-white text-sm font-medium hover:bg-white/5 transition-colors">
                    View All Updates
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-[url('/grid-pattern.svg')] bg-[#070716] bg-opacity-80">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-6">
                Ready to Begin?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">PULI Revolution</span> Today
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Whether youre a gamer, investor, or crypto enthusiast, theres a place for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-3">
                  <span>Get Started with PULI</span>
                  <FiArrowRight />
                </button>
                <button className="px-8 py-4 border border-white/10 rounded-full text-white font-semibold hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
                  <span>Read Documentation</span>
                  <FiArrowRight />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-[#070716] border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <span className="text-xl font-bold text-white">PULI Token</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  A 100% community-driven cryptocurrency redefining decentralized finance and gaming.
                </p>
                <div className="flex space-x-4">
                  {['Twitter', 'Telegram', 'Discord', 'Github'].map((item, i) => (
                    <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">{item}</span>
                      <div className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                        {item === 'Twitter' ? <FiTwitter /> : 
                         item === 'Telegram' ? <FiSend /> : 
                         item === 'Discord' ? <FiUsers /> : <FiGithub />}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Ecosystem</h3>
                <ul className="space-y-3">
                  {['Puli Runner', 'Puli Swap', 'Puli Vaults', 'PuliVerse', 'Puli Cards'].map((item, i) => (
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
                  {['Documentation', 'Whitepaper', 'GitHub', 'Blog', 'FAQ'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Governance</h3>
                <ul className="space-y-3">
                  {['Voting', 'Proposals', 'Treasury', 'Forum', 'Become a Contributor'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-xs text-center md:text-left">
                  © {new Date().getFullYear()} PULI Token. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">Terms</a>
                  <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">Privacy</a>
                  <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">Cookies</a>
                  <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">Disclaimer</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}