'use client';
import Link from 'next/link';
import Image from 'next/image';
import { products, testimonials, scriptures } from '@/data/mockData';
import { ArrowRight, Quote, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const featuredProducts = products.filter(p => p.category.includes('I AM') || p.category.includes('Warfare')).slice(0, 4);
  const [currentScriptureIndex, setCurrentScriptureIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScriptureIndex((prev) => (prev + 1) % scriptures.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-zinc-900 overflow-hidden text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 z-0">
          {/* Abstract background representing spiritual armor/light */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left pt-20 md:pt-0">
            <span className="inline-block px-4 py-2 bg-yellow-600/20 border border-yellow-600/50 text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-2 animate-fade-in-up">
              Revealed Armor Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight leading-tight animate-slide-in-left">
              WEAR YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">
                IDENTITY
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 animate-fade-in delay-100 font-light leading-relaxed">
              Walk in Truth. Clothe yourself in the promises of God. Apparel designed to remind you of who you are in Him.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 animate-fade-in delay-200">
              <Link
                href="/shop"
                className="px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-wider rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-lg shadow-white/10"
              >
                Shop The Collection
              </Link>
              <Link
                href="/shop"
                className="px-8 py-4 bg-transparent border border-white/30 text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
              >
                Our Mission
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh] flex justify-center items-center mt-10 md:mt-0 animate-float">
            <div className="relative w-full h-full max-w-md">
              <Image
                src="/shirt5.png"
                alt="Prophetic Warrior Tee"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
                priority
              />
            </div>
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
