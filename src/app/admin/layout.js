'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingBag, Package, MessageSquare, DollarSign, LogOut } from 'lucide-react';

export default function AdminLayout({ children }) {
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Orders', href: '/admin/orders', icon: ShoppingBag },
        { name: 'Products', href: '/admin/products', icon: Package },
        { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
        { name: 'Finances', href: '/admin/finances', icon: DollarSign },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-100 flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">R</div>
                    <span className="font-bold text-lg tracking-tight">Admin Console</span>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                        ? 'bg-black text-white shadow-lg shadow-gray-200'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                                    }`}
                            >
                                <Icon size={18} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                        <LogOut size={18} />
                        Exit Admin
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <div className="p-8">
                    {children}
                </div>

                {/* Mobile Navigation (Bottom Bar) - Visible only on small screens */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between px-6 py-4 z-50">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-gray-400'}`}
                            >
                                <Icon size={20} />
                                <span className="text-[10px] font-bold uppercase">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
