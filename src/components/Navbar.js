'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const { cartCount, toggleCart } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Hide navbar on admin pages
    if (pathname.startsWith('/admin')) return null;

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
                            Revealed Armor
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${pathname === link.href
                                        ? 'text-black border-b-2 border-black'
                                        : 'text-gray-500 hover:text-black'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/admin" className="text-gray-400 hover:text-black transition-colors" title="Admin Dashboard">
                            <User size={20} />
                        </Link>
                        <button
                            onClick={toggleCart}
                            className="relative p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <ShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-black rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleCart}
                            className="relative p-2 text-gray-800"
                        >
                            <ShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-black rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href
                                    ? 'bg-gray-50 text-black'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/admin"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-black"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Admin Dashboard
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
