'use client';
import { stats, orders } from '@/data/mockData';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900">Dashboard</h1>
                <p className="text-gray-500">Welcome back. Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(stats).map(([key, data]) => (
                    <div key={key} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-gray-500 font-medium capitalize">{key}</span>
                            <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${data.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                }`}>
                                {data.change}
                                {data.trend === 'up' ? <ArrowUpRight size={12} className="ml-1" /> : <TrendingUp size={12} className="ml-1" />}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{data.value}</h3>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart Placeholder */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[400px] flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg">Revenue Analytics</h3>
                        <select className="bg-gray-50 border border-gray-200 rounded-lg text-sm px-3 py-1 outline-none">
                            <option>This Week</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>
                    </div>

                    {/* Mock Chart Visual - Bars */}
                    <div className="flex-1 flex items-end justify-between gap-2 px-2">
                        {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                            <div key={i} className="w-full bg-gray-100 rounded-t-lg relative group">
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-black rounded-t-lg transition-all duration-500 group-hover:bg-gray-800"
                                    style={{ height: `${h}%` }}
                                ></div>
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold py-1 px-2 rounded transition-opacity">
                                    K{h * 100}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </div>

                {/* Recent Orders List */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                    <h3 className="font-bold text-lg mb-6">Recent Orders</h3>
                    <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                        {orders.map((order) => (
                            <div key={order.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
                                <div>
                                    <p className="font-bold text-sm text-gray-900">{order.customer}</p>
                                    <p className="text-xs text-gray-400">{order.items} items • {order.date}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm">K{order.total.toFixed(2)}</p>
                                    <span className={`inline-block w-2 h-2 rounded-full ${order.status === 'Delivered' ? 'bg-green-500' :
                                        order.status === 'Processing' ? 'bg-blue-500' : 'bg-yellow-500'
                                        }`}></span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 w-full py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:text-black hover:border-black transition-colors">
                        View All Orders
                    </button>
                </div>
            </div>
        </div>
    );
}
