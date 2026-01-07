'use client';
import { useState, useEffect, use } from 'react';
import { products } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Check, Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react';

export default function ProductPage({ params }) {
    // Unwrap params using React.use()
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        if (product) {
            if (product.sizes.length > 0) setSelectedSize(product.sizes[0]);
            if (product.colors.length > 0) setSelectedColor(product.colors[0]);
        }
    }, [product]);

    if (!product) {
        return notFound();
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) return;

        setIsAdding(true);
        addToCart(product, selectedSize, selectedColor);

        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Image Section */}
                    <div className="relative aspect-[3/4] lg:aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain object-center p-8 hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {product.stock < 20 && product.stock > 0 && (
                                <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-full w-fit">
                                    Low Stock
                                </span>
                            )}
                            <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full w-fit">
                                New Arrival
                            </span>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-500">
                            <span>{product.category}</span>
                            <span>/</span>
                            <span className="text-black">{product.name}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-4">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl font-bold">K{product.price.toFixed(2)}</span>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
                                ))}
                                <span className="text-sm text-gray-400 ml-1">(42 reviews)</span>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Elevate your wardrobe with the {product.name}. Crafted from premium materials for unmatched comfort and style.
                            Perfect for any occasion, this piece combines modern aesthetics with timeless design.
                        </p>

                        <div className="space-y-6 mb-8">
                            {/* Color Selection */}
                            <div>
                                <span className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3 block">Color: <span className="text-gray-500 font-normal">{selectedColor}</span></span>
                                <div className="flex gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color ? 'border-black scale-110' : 'border-transparent hover:scale-110'
                                                }`}
                                            title={color}
                                        >
                                            <div
                                                className="w-8 h-8 rounded-full border border-gray-200 shadow-sm"
                                                style={{ backgroundColor: color !== 'White' ? color.toLowerCase() : 'white' }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold uppercase tracking-wider text-gray-900">Size: <span className="text-gray-500 font-normal">{selectedSize}</span></span>
                                    <button className="text-xs font-bold underline hover:text-gray-600">Size Guide</button>
                                </div>
                                <div className="grid grid-cols-4 gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`py-3 rounded-lg text-sm font-bold transition-all ${selectedSize === size
                                                ? 'bg-black text-white shadow-lg'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-black border border-gray-100'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-10">
                            <button
                                onClick={handleAddToCart}
                                disabled={product.status === 'Out of Stock'}
                                className={`flex-1 py-4 px-8 rounded-full font-bold uppercase tracking-widest transition-all transform active:scale-95 shadow-xl ${product.status === 'Out of Stock'
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : isAdding
                                        ? 'bg-green-600 text-white'
                                        : 'bg-black text-white hover:bg-gray-800'
                                    }`}
                            >
                                {product.status === 'Out of Stock' ? 'Sold Out' : isAdding ? 'Added to Cart!' : 'Add to Cart'}
                            </button>
                            <button className="p-4 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 py-8 border-t border-gray-100">
                            <div className="flex flex-col items-center text-center gap-2">
                                <div className="p-3 bg-gray-50 rounded-full">
                                    <Truck size={20} />
                                </div>
                                <span className="text-xs font-bold uppercase text-gray-600">Free Shipping</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <div className="p-3 bg-gray-50 rounded-full">
                                    <RefreshCw size={20} />
                                </div>
                                <span className="text-xs font-bold uppercase text-gray-600">Free Returns</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <div className="p-3 bg-gray-50 rounded-full">
                                    <ShieldCheck size={20} />
                                </div>
                                <span className="text-xs font-bold uppercase text-gray-600">Secure Payment</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
