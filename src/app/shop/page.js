'use client';
import { useState } from 'react';
import { products } from '@/data/mockData';
import Image from 'next/image';
import Link from 'next/link';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function ShopPage() {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'T-Shirts', 'Premium', 'Basics'];

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="bg-gray-50 py-16 mb-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Shop Collection</h1>
                    <p className="text-gray-500 max-w-xl mx-auto">Explore our latest drops. Designed for comfort, styled for impact.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 sticky top-16 z-30 bg-white/95 backdrop-blur py-4 border-b border-gray-100">
                    {/* Categories */}
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${filter === cat
                                    ? 'bg-black text-white shadow-md transform scale-105'
                                    : 'bg-white text-gray-500 border border-gray-200 hover:border-black hover:text-black'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Sort/Filter Actions */}
                    <div className="flex gap-2 w-full md:w-auto justify-end">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:border-black transition-colors">
                            Sort by <ChevronDown size={14} />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:border-black transition-colors">
                            <SlidersHorizontal size={14} /> Filter
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                    {filteredProducts.map((product) => (
                        <Link href={`/shop/${product.id}`} key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                {product.status === 'Out of Stock' && (
                                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
                                        <span className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full">Out of Stock</span>
                                    </div>
                                )}
                                {product.status !== 'Out of Stock' && (
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="bg-white p-2 rounded-full shadow-md hover:bg-black hover:text-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-600 transition-colors">{product.name}</h3>
                                    <span className="text-lg font-medium text-gray-900">K{product.price}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-2">{product.category}</p>

                                <div className="flex gap-1">
                                    {product.colors.map(color => (
                                        <div
                                            key={color}
                                            className={`w-3 h-3 rounded-full border border-gray-200 ${color === 'White' ? 'bg-white' : ''}`}
                                            style={{ backgroundColor: color !== 'White' ? color.toLowerCase() : 'white' }}
                                            title={color}
                                        />
                                    ))}
                                    {product.colors.length > 3 && <span className="text-xs text-gray-400 pl-1">+</span>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
