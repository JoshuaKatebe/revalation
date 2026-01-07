'use client';
import Link from 'next/link';
import Image from 'next/image';
import { products, testimonials, scriptures } from '@/data/mockData';
import { ArrowRight, Quote, Mail } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const featuredProducts = products.filter(p => p.category.includes('I AM') || p.category.includes('Warfare')).slice(0, 4);
  const [currentScriptureIndex, setCurrentScriptureIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScriptureIndex((prev) => (prev + 1) % scriptures.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <div className="flex flex-col min-h-screen bg-black">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden text-white pt-20 pb-12">
        {/* Premium Sacred Geometry Background */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(10,10,10,0)_0%,_rgba(0,0,0,0.8)_100%)]" />
          </div>

          {/* Sacred Geometry SVG Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.3] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Subtle cross-inspired geometric pattern */}
              <pattern
                id="sacredPattern"
                x="0"
                y="0"
                width="140"
                height="140"
                patternUnits="userSpaceOnUse"
              >
                {/* Central ornate cross structure */}
                <g transform="translate(70, 70)">
                  {/* Vertical beam */}
                  <rect x="-2" y="-45" width="4" height="90" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                  {/* Horizontal beam */}
                  <rect x="-45" y="-2" width="90" height="4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

                  {/* Ornamental circles at cardinal points */}
                  <circle cx="0" cy="-35" r="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <circle cx="35" cy="0" r="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <circle cx="0" cy="35" r="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <circle cx="-35" cy="0" r="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

                  {/* Center medallion */}
                  <circle cx="0" cy="0" r="8" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
                  <circle cx="0" cy="0" r="12" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />

                  {/* Diagonal accent lines */}
                  <line x1="-25" y1="-25" x2="-15" y2="-15" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
                  <line x1="25" y1="-25" x2="15" y2="-15" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
                  <line x1="25" y1="25" x2="15" y2="15" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
                  <line x1="-25" y1="25" x2="-15" y2="15" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
                </g>

                {/* Corner accent dots */}
                <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.5)" />
                <circle cx="130" cy="10" r="1" fill="rgba(255,255,255,0.5)" />
                <circle cx="10" cy="130" r="1" fill="rgba(255,255,255,0.5)" />
                <circle cx="130" cy="130" r="1" fill="rgba(255,255,255,0.5)" />
              </pattern>

              {/* Radial gradient for vignette */}
              <radialGradient id="vignette">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
              </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#sacredPattern)" />
            <rect width="100%" height="100%" fill="url(#vignette)" />
          </svg>

          {/* Flowing light streams */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Vertical light streams */}
            <motion.div
              className="absolute left-[15%] top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/40 to-transparent"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scaleY: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute right-[25%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scaleY: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            {/* Ethereal gradient waves */}
            <motion.div
              className="absolute top-0 left-1/4 w-[600px] h-[600px]"
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
              animate={{
                x: [-100, 100, -100],
                y: [0, -100, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-0 right-1/4 w-[500px] h-[500px]"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                filter: 'blur(70px)',
              }}
              animate={{
                x: [100, -50, 100],
                y: [0, 100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />
          </div>

          {/* Floating light particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-8 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 3 === 0
                    ? 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.6), transparent)'
                    : 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)',
                  filter: 'blur(0.5px)',
                }}
                animate={{
                  y: [-20, -120],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col md:flex-row items-center h-full">
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left z-10 pt-10 md:pt-0">
            {/* Conversion Booster: Countdown/Notification */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-900/30 border border-yellow-700/50 rounded-full backdrop-blur-sm mb-4"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">New Drop Incoming</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight leading-[0.9]">
                <span className="block text-white">WEAR YOUR</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 pb-2">
                  IDENTITY
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0 font-light leading-relaxed"
            >
              Walk in Truth. Clothe yourself in the promises of God. Apparel designed to remind you of who you are in Him.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/shop"
                  className="block px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-wider rounded-full hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                >
                  Shop Collection
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/mission" // Updated href to match hypothetical mission page or anchor
                  className="block px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm"
                >
                  Our Mission
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 relative h-[60vh] md:h-[90vh] flex justify-center items-center mt-12 md:mt-0">
            {/* Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-yellow-500/10 to-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative w-full h-full max-w-lg md:max-w-xl"
            >
              <Image
                src="/hero-cropped-image.png"
                alt="Prophetic Warrior Tee"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                priority
              />

              {/* Tooltip / Verse Reveal Interaction */}
              <motion.div
                className="absolute bottom-[10%] md:bottom-[20%] right-[5%] md:right-[10%] bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-[200px] cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[10px] uppercase tracking-widest text-yellow-500 font-bold mb-1">Verse of the Day</p>
                <p className="text-xs text-white italic">"Put on the full armor of God..."</p>
                <span className="text-[10px] text-gray-500 block mt-1">Ephesians 6:11</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Our Purpose</h2>
          <p className="text-3xl md:text-4xl font-serif leading-tight text-gray-900 mb-8">
            "Revealed Armor exists to clothe believers in <span className="italic text-yellow-700">truth</span> and <span className="italic text-yellow-700">purpose</span>. We believe what you wear can be a prophetic declaration of your divine inheritance."
          </p>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
      </section>

      {/* Scripture Spotlight */}
      <section className="py-20 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/pattern.svg")' }}></div> {/* Placeholder for pattern */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="transition-opacity duration-1000 ease-in-out">
            <p className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed">"{scriptures[currentScriptureIndex].text}"</p>
            <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm">— {scriptures[currentScriptureIndex].cite}</p>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {scriptures.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentScriptureIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${currentScriptureIndex === idx ? 'bg-yellow-500 w-6' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">The "I AM" Series</h2>
              <p className="text-gray-500 mt-2">Declarations of faith to wear daily.</p>
            </div>
            <Link href="/shop" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-gray-600 transition-colors group">
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link href={`/shop/${product.id}`} key={product.id} className="group">
                <div className="relative aspect-[3/4] bg-white rounded-xl overflow-hidden mb-4 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded shadow-lg hover:bg-zinc-800 transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-700 transition-colors font-serif">{product.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{product.category}</p>
                    <span className="text-md font-medium text-gray-900">K{product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-16">Community Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-gray-50 p-8 rounded-2xl relative">
                <Quote className="absolute top-8 left-8 text-yellow-600/20 w-12 h-12" />
                <p className="text-gray-600 relative z-10 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <Mail className="w-12 h-12 mx-auto text-yellow-500 mb-6" />
          <h2 className="text-3xl font-serif font-bold mb-4">Join the Army</h2>
          <p className="text-gray-400 mb-8">Get weekly devotionals, exclusive prayer updates, and early access to new drops.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="px-8 py-4 bg-yellow-600 text-white font-bold uppercase tracking-wider rounded-full hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-900/20">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center opacity-50 text-sm">
          <p>&copy; 2026 Revealed Armor. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-yellow-500 transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-yellow-500 transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
