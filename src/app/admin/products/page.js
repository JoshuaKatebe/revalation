'use client';
import { products } from '@/data/mockData';
import { Search, Plus, MoreVertical, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function ProductsPage() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900">Products</h1>
                    <p className="text-gray-500">Manage your product catalog and inventory.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-bold uppercase rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                    <Plus size={18} /> Add Product
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
                <div className="p-4 border-b border-gray-100 flex gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                        <tr>
                            <th className="p-4">Product</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Stock</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                                        </div>
                                        <span className="font-bold text-sm text-gray-900">{product.name}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-gray-600">{product.category}</td>
                                <td className="p-4 text-sm font-medium">
                                    <div className="flex items-center gap-2">
                                        <span>{product.stock} in stock</span>
                                        {product.stock < 20 && <AlertCircle size={14} className="text-red-500" />}
                                    </div>
                                </td>
                                <td className="p-4 font-bold text-sm">K{product.price.toFixed(2)}</td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                                        product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors">
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
