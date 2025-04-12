"use client"

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiUsers, FiGithub } from 'react-icons/fi';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Subtle parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

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
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 20],
              x: [0, (Math.random() - 0.5) * 20],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
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
        <nav className="fixed w-full py-6 px-6 md:px-12 lg:px-24 z-50 backdrop-blur-md bg-[#0a0a2a]/80 border-b border-white/5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-xl font-bold text-white">PULI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</a>
              <a href="#games" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Games</a>
              <a href="#community" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Community</a>
            </div>
            <a 
              href="https://exchange.pancakeswap.finance/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Buy $PULI
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen w-full flex items-center pt-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <motion.div 
                className="flex-1"
                style={{ y: textY }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-6">
                    Community Owned
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    PULI Token
                  </span>
                  <br />
                  <span className="text-white">By The People, For The People</span>
                </h1>

                <motion.p 
                  className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  A 100% community-driven cryptocurrency where every holder has a voice. No central team, no hidden agendas - just pure decentralized collaboration.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <a
                    href="#community"
                    className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                  >
                    <span>Join Our Community</span>
                    <FiArrowRight />
                  </a>
                  <a
                    href="https://exchange.pancakeswap.finance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 border border-white/10 rounded-full text-white font-semibold hover:bg-white/5 transition-colors flex items-center justify-center gap-3"
                  >
                    <span>Buy $PULI</span>
                    <FiArrowRight />
                  </a>
                </motion.div>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Community</p>
                    <p className="text-2xl font-bold text-purple-400">10K+</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Games</p>
                    <p className="text-2xl font-bold text-pink-400">2+</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Since</p>
                    <p className="text-2xl font-bold text-purple-400">2021</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Chain</p>
                    <p className="text-2xl font-bold text-pink-400">BSC</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Puli Character */}
              <motion.div 
                className="relative w-full max-w-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl flex items-center justify-center">
                    <div className="text-8xl">🚀</div>
                  </div>
                  <div className="absolute -inset-6 bg-purple-500/20 rounded-full blur-xl -z-10"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-32 bg-gradient-to-b from-[#1a1a4a] to-[#0a0a2a]">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">PULI Movement</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Born from community passion, built by community effort
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">What Makes PULI Unique?</h3>
                  <ul className="space-y-6">
                    {[
                      {
                        title: "100% Community-Run",
                        description: "No central team, no company behind PULI - every decision is made collectively by token holders."
                      },
                      {
                        title: "Transparent Ecosystem",
                        description: "All transactions and treasury movements are publicly verifiable on the blockchain."
                      },
                      {
                        title: "Gaming Focus",
                        description: "Our community has built fun games that integrate the PULI token as both reward and utility."
                      }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-4">
                          <div className="w-6 h-6 bg-purple-500/10 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>
                  <div className="space-y-6">
                    {[
                      {
                        step: "1",
                        title: "Community Governance",
                        description: "Token holders propose and vote on all protocol changes"
                      },
                      {
                        step: "2",
                        title: "Game Development",
                        description: "Community members collaborate to build PULI-integrated games"
                      },
                      {
                        step: "3",
                        title: "Ecosystem Growth",
                        description: "The treasury funds initiatives voted by the community"
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 font-bold">
                            {item.step}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section id="games" className="relative py-32 bg-gradient-to-b from-[#0a0a2a] to-[#1a1a4a]">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-4">
                Our Creations
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Community-Built</span> Games
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Fun experiences created by PULI community members
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Puli Runner",
                  description: "An endless runner game where you collect PULI tokens while avoiding obstacles.",
                  status: "Live",
                  link: "#"
                },
                {
                  title: "Puli Lottery",
                  description: "Community-run lottery system where you can win PULI prizes.",
                  status: "Live",
                  link: "#"
                }
              ].map((game, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredCard(i)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <div className="relative h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                    <div className="text-6xl">
                      {i === 0 ? "🏃‍♂️" : "🎰"}
                    </div>
                    {hoveredCard === i && (
                      <motion.div
                        className="absolute inset-0 bg-black/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    <div className="absolute bottom-4 right-4 px-2.5 py-0.5 text-xs font-medium rounded-full bg-black/30 text-white backdrop-blur-sm">
                      {game.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{game.title}</h3>
                    <p className="text-gray-400 mb-5">{game.description}</p>
                    <a 
                      href={game.link} 
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                    >
                      Learn more
                      <FiArrowRight className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="relative py-32 bg-gradient-to-b from-[#1a1a4a] to-[#0a0a2a]">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-4">
                Join Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">PULI Community</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Where every member contributes to our collective success
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Get Involved</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: <FiUsers className="text-purple-400" />,
                        title: "Telegram",
                        description: "Join our main community chat",
                        link: "#"
                      },
                      {
                        icon: <FiGithub className="text-pink-400" />,
                        title: "GitHub",
                        description: "Contribute to open-source projects",
                        link: "#"
                      },
                      {
                        icon: "💬",
                        title: "Discord",
                        description: "Chat with community members",
                        link: "#"
                      },
                      {
                        icon: "🐦",
                        title: "Twitter",
                        description: "Follow for latest updates",
                        link: "#"
                      }
                    ].map((platform, i) => (
                      <a
                        key={i}
                        href={platform.link}
                        className="bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 transition-colors flex items-start gap-4"
                      >
                        <div className="text-2xl mt-1">
                          {platform.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{platform.title}</h4>
                          <p className="text-gray-400 text-sm">{platform.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex-1 w-full"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Community Principles</h3>
                  <div className="space-y-6">
                    {[
                      {
                        principle: "Decentralization",
                        description: "No single point of control - power distributed among all holders"
                      },
                      {
                        principle: "Transparency",
                        description: "All decisions and transactions are open for verification"
                      },
                      {
                        principle: "Inclusivity",
                        description: "Everyone is welcome to contribute and participate"
                      },
                      {
                        principle: "Innovation",
                        description: "We encourage creative ideas from all community members"
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400">
                            {i + 1}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{item.principle}</h4>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-[url('/grid-pattern.svg')] bg-[#0a0a2a] bg-opacity-80">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-6">
                Ready to Join?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Be Part of Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Revolutionary</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                The PULI community is open to everyone who believes in decentralized collaboration.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#community"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                >
                  <span>Join Our Community</span>
                  <FiArrowRight />
                </a>
                <a
                  href="https://exchange.pancakeswap.finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/10 rounded-full text-white font-semibold hover:bg-white/5 transition-colors flex items-center justify-center gap-3"
                >
                  <span>Buy $PULI</span>
                  <FiArrowRight />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-[#0a0a2a] border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <span className="text-xl font-bold text-white">PULI Token</span>
                </div>
                <p className="text-gray-400 text-sm">
                  A 100% community-driven cryptocurrency
                </p>
              </div>
              <div className="flex flex-wrap gap-6 justify-center">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#games" className="text-gray-400 hover:text-white transition-colors">Games</a>
                <a href="#community" className="text-gray-400 hover:text-white transition-colors">Community</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
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