'use client';
import { ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';

export default function FinancesPage() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900">Finances</h1>
                    <p className="text-gray-500">Monitor your revenue and financial health.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-black text-sm font-bold uppercase rounded-lg hover:bg-gray-50 transition-colors">
                    <Download size={18} /> Export Report
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-black text-white p-6 rounded-2xl shadow-lg">
                    <p className="text-gray-400 text-sm font-medium mb-1">Total Revenue</p>
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-4xl font-bold">K124,500.00</h2>
                        <span className="text-green-400 text-xs font-bold flex items-center">+12% <ArrowUpRight size={12} /></span>
                    </div>
                    <div className="mt-8 h-16 flex items-end gap-1">
                        {[20, 40, 30, 50, 45, 60, 55, 70, 65, 80, 75, 90].map((h, i) => (
                            <div key={i} className="flex-1 bg-gray-700 hover:bg-gray-500 transition-colors rounded-t" style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-sm font-medium mb-1">Expenses</p>
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-3xl font-bold text-gray-900">K42,300.00</h2>
                        <span className="text-red-500 text-xs font-bold flex items-center">+5% <ArrowUpRight size={12} /></span>
                    </div>
                    <div className="mt-8 flex flex-col gap-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Cost of Goods</span>
                            <span className="font-bold">K28,000</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div className="bg-orange-500 h-full w-[65%]"></div>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Marketing</span>
                            <span className="font-bold">K12,000</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div className="bg-blue-500 h-full w-[30%]"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-sm font-medium mb-1">Net Profit</p>
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-3xl font-bold text-gray-900">K82,200.00</h2>
                        <span className="text-green-500 text-xs font-bold flex items-center">+18% <ArrowUpRight size={12} /></span>
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Profit margin is up by 3% compared to last month. Great job on optimizing operational costs.
                    </p>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-bold text-lg">Recent Transactions</h3>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                        <tr>
                            <th className="p-4 pl-6">Transaction ID</th>
                            <th className="p-4">Description</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[
                            { id: 'TRX-00192', desc: 'Order #ORD-7829', date: 'Oct 25, 2023 at 4:30 PM', amount: '+K129.97', status: 'Completed', type: 'in' },
                            { id: 'TRX-00191', desc: 'Supplier Payment - Fabrics', date: 'Oct 25, 2023 at 2:15 PM', amount: '-K2,400.00', status: 'Completed', type: 'out' },
                            { id: 'TRX-00190', desc: 'Order #ORD-7828', date: 'Oct 24, 2023 at 11:05 AM', amount: '+K45.00', status: 'Completed', type: 'in' },
                            { id: 'TRX-00189', desc: 'SaaS Subscription', date: 'Oct 24, 2023 at 9:00 AM', amount: '-K99.00', status: 'Pending', type: 'out' },
                        ].map((trx, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 pl-6 font-bold text-sm text-gray-900">{trx.id}</td>
                                <td className="p-4 text-sm text-gray-600">{trx.desc}</td>
                                <td className="p-4 text-sm text-gray-500">{trx.date}</td>
                                <td className={`p-4 font-bold text-sm ${trx.type === 'in' ? 'text-green-600' : 'text-gray-900'}`}>{trx.amount}</td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${trx.status === 'Completed' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {trx.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
