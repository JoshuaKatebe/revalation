'use client';
import { orders } from '@/data/mockData';
import { Search, Filter, MoreHorizontal } from 'lucide-react';

export default function OrdersPage() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900">Orders</h1>
                    <p className="text-gray-500">Manage and track customer orders.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-black text-white text-sm font-bold uppercase rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
                        Export CSV
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-100 flex gap-4">
                    <div className="relative flex-1">
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:border-black transition-colors">
                        <Filter size={18} />
                        Filter
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                            <tr>
                                <th className="p-4">Order ID</th>
                                <th className="p-4">Customer</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Total</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="p-4 font-bold text-sm text-gray-900">{order.id}</td>
                                    <td className="p-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                                                {order.customer.charAt(0)}
                                            </div>
                                            {order.customer}
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-500">{order.date}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                            order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                                order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-4 font-bold text-sm bg-gray-50/50">K{order.total.toFixed(2)}</td>
                                    <td className="p-4 text-right">
                                        <button className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination placeholder */}
                <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <span>Showing 1 to 6 of 24 entries</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded hover:border-black hover:text-black disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-gray-200 rounded hover:border-black hover:text-black">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
