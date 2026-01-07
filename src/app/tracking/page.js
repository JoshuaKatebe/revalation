'use client';
import { useSearchParams } from 'next/navigation';
import { Package, Truck, CheckCircle, MapPin, Search, Calendar, Shirt } from 'lucide-react';
import { Suspense, useState, useEffect } from 'react';

function TrackingContent() {
    const searchParams = useSearchParams();
    const orderIdParam = searchParams.get('order');
    const [orderId, setOrderId] = useState(orderIdParam || '');
    const [trackingData, setTrackingData] = useState(null);

    useEffect(() => {
        if (orderIdParam) {
            // Simulate fetching tracking data
            setTrackingData({
                id: orderIdParam,
                status: 'Packing',
                date: new Date().toLocaleDateString(),
                items: 3,
                total: 'K600.00'
            });
        }
    }, [orderIdParam]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (orderId) {
            setTrackingData({
                id: orderId,
                status: 'Packing',
                date: new Date().toLocaleDateString(),
                items: 3,
                total: 'K600.00'
            });
        }
    };

    const steps = [
        { label: 'Order Placed', icon: Calendar, status: 'completed' },
        { label: 'Packing', icon: Package, status: 'active' },
        { label: 'Shipping', icon: Truck, status: 'pending' },
        { label: 'Delivered', icon: MapPin, status: 'pending' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

                {/* Search Bar */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 text-center">
                    <h1 className="text-2xl font-serif font-bold mb-2">Track Your Order</h1>
                    <p className="text-gray-500 mb-6">Enter your order ID to see the current status.</p>
                    <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="#ORD-XXXX"
                            className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black font-mono uppercase"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />
                        <button type="submit" className="bg-black text-white px-6 rounded-lg font-bold uppercase text-sm hover:bg-gray-800 transition-colors">
                            Track
                        </button>
                    </form>
                </div>

                {trackingData && (
                    <div className="space-y-6 animate-fade-in-up">
                        {/* Status Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-10 pb-6 border-b border-gray-100">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Order ID</p>
                                    <h2 className="text-2xl font-black font-mono">{trackingData.id}</h2>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Estimated Delivery</p>
                                    <p className="text-lg font-bold text-gray-900">Oct 30 - Nov 2</p>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative mb-12">
                                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full"></div>
                                {/* Active Progress Line */}
                                <div className="absolute top-1/2 left-0 w-[35%] h-1 bg-yellow-500 -translate-y-1/2 rounded-full transition-all duration-1000"></div>

                                <div className="relative flex justify-between">
                                    {steps.map((step, idx) => {
                                        const Icon = step.icon;
                                        const isActive = step.status === 'active';
                                        const isCompleted = step.status === 'completed';

                                        return (
                                            <div key={idx} className="flex flex-col items-center gap-3">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 z-10 bg-white transition-all duration-500
                                                    ${isActive ? 'border-yellow-500 text-yellow-600 shadow-[0_0_0_4px_rgba(234,179,8,0.2)]' :
                                                        isCompleted ? 'border-yellow-500 bg-yellow-500 text-white' : 'border-gray-200 text-gray-300'}
                                                `}>
                                                    {isCompleted ? <CheckCircle size={20} /> : <Icon size={20} />}
                                                </div>
                                                <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-black' : isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                                                    {step.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Detailed Status (Packing Animation) */}
                            <div className="bg-yellow-50/50 rounded-xl p-6 border border-yellow-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-ping absolute top-0 left-0"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full relative"></div>
                                    </div>
                                    <h3 className="font-bold text-yellow-900">Preparing your order</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><CheckCircle size={14} /></div>
                                        <span>Order confirmed</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-900 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center animate-pulse"><Shirt size={14} /></div>
                                        <span>Quality check & folding</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-400">
                                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"><Package size={14} /></div>
                                        <span>Packaging with care</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function TrackingPage() {
    return (
        <Suspense fallback={<div>Loading tracking...</div>}>
            <TrackingContent />
        </Suspense>
    );
}
