'use client';
import { useCart } from '@/contexts/CartContext';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CartDrawer() {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-[60]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={toggleCart}
            />

            {/* Drawer */}
            <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col">
                {/* Header */}
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-xl font-bold uppercase tracking-tight">Your Cart</h2>
                    <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-5 space-y-6">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                                <ShoppingBagIcon size={32} />
                            </div>
                            <div>
                                <p className="text-lg font-medium text-gray-900">Your cart is empty</p>
                                <p className="text-sm text-gray-500 mt-1">Looks like you haven't added anything yet.</p>
                            </div>
                            <button
                                onClick={toggleCart}
                                className="mt-4 px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                                <div className="w-20 h-24 bg-gray-50 rounded-md overflow-hidden relative flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-medium text-sm text-gray-900">{item.name}</h3>
                                            <button
                                                onClick={() => removeFromCart(index)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">{item.selectedColor} / {item.selectedSize}</p>
                                        <p className="text-sm font-medium mt-1">K{item.price.toFixed(2)}</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center border border-gray-200 rounded-full">
                                            <button
                                                onClick={() => updateQuantity(index, item.quantity - 1)}
                                                className="p-1 px-2 text-gray-500 hover:text-black disabled:opacity-50"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(index, item.quantity + 1)}
                                                className="p-1 px-2 text-gray-500 hover:text-black"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="p-5 border-t border-gray-100 bg-gray-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-base font-medium text-gray-900">Subtotal</span>
                            <span className="text-xl font-bold text-gray-900">K{cartTotal.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-4 text-center">Shipping and taxes calculated at checkout.</p>
                        <Link
                            href="/checkout"
                            onClick={toggleCart}
                            className="block w-full bg-black text-white py-4 rounded-md font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200 text-center"
                        >
                            Checkout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

function ShoppingBagIcon({ size }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
    );
}
