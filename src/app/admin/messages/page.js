'use client';
import { messages } from '@/data/mockData';
import { Search, Star, Trash2, Reply, MoreHorizontal } from 'lucide-react';

export default function MessagesPage() {
    return (
        <div className="flex bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-[calc(100vh-8rem)]">
            {/* Inbox List */}
            <div className="w-1/3 border-r border-gray-100 flex flex-col">
                <div className="p-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold uppercase tracking-tight mb-4">Inbox</h2>
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${!msg.read ? 'bg-blue-50/50' : ''}`}>
                            <div className="flex justify-between items-start mb-1">
                                <h4 className={`text-sm ${!msg.read ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>{msg.from}</h4>
                                <span className="text-xs text-gray-400">{msg.date}</span>
                            </div>
                            <p className={`text-sm mb-1 ${!msg.read ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{msg.subject}</p>
                            <p className="text-xs text-gray-400 line-clamp-1">{msg.preview}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Message Content (Mock View) */}
            <div className="flex-1 flex flex-col">
                <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-gray-50/30">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">Sizing Question</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">John Doe</span>
                            <span className="text-xs text-gray-500">&lt;john@example.com&gt;</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"><Star size={18} /></button>
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                        <button className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"><MoreHorizontal size={18} /></button>
                    </div>
                </div>

                <div className="flex-1 p-8 overflow-y-auto">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Hi, <br /><br />
                        I was wondering if the medium size runs true to size. I am usually a medium in other brands but sometimes large in streetwear fits. Could you provide the specific measurements for the chest width?
                        <br /><br />
                        Thanks,<br />
                        John
                    </p>
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <textarea
                            className="w-full resize-none outline-none text-sm text-gray-700 placeholder-gray-400"
                            rows="3"
                            placeholder="Type your reply here..."
                        ></textarea>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                            <button className="text-xs font-bold uppercase text-gray-500 hover:text-black transition-colors">Attach File</button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-bold uppercase rounded-lg hover:bg-gray-800 transition-colors">
                                <Reply size={14} /> Send Reply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
