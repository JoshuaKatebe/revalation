'use client';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { Check, Smartphone, Upload, CreditCard, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function CheckoutPage() {
    const { cart, cartTotal } = useCart();
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: Details, 2: Payment
    const [paymentMethod, setPaymentMethod] = useState('auto'); // 'auto' or 'manual'
    const [provider, setProvider] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    // Mock Customer Details
    const [details, setDetails] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        phone: ''
    });

    const handleDetailsSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePayment = async () => {
        setIsProcessing(true);
        // Simulate processing
        setTimeout(() => {
            const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
            setIsProcessing(false);
            router.push(`/tracking?order=${orderId}`);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Form Steps */}
                    <div className="flex-1">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>1</div>
                                <h2 className={`font-serif font-bold text-lg ${step >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>Contact & Delivery</h2>
                            </div>

                            {step === 1 && (
                                <form onSubmit={handleDetailsSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="First name" required className="w-full p-4 bg-gray-50 border-gray-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
                                        <input type="text" placeholder="Last name" required className="w-full p-4 bg-gray-50 border-gray-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
                                    </div>
                                    <input type="email" placeholder="Email address" required className="w-full p-4 bg-gray-50 border-gray-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
                                    <input type="text" placeholder="Address" required className="w-full p-4 bg-gray-50 border-gray-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="City" required className="w-full p-4 bg-gray-50 border-gray-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
                                        <input type="tel" placeholder="Phone" required className="w-full p-4 bg-gray-50 border-gray-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
                                    </div>
                                    <button type="submit" className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors">
                                        Continue to Payment
                                    </button>
                                </form>
                            )}
                            {step > 1 && <div className="text-green-600 flex items-center gap-2"><Check size={16} /> Details Saved</div>}
                        </div>

                        <div className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 ${step < 2 ? 'opacity-50 pointer-events-none' : ''}`}>
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>2</div>
                                <h2 className={`font-serif font-bold text-lg ${step >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>Payment Method</h2>
                            </div>

                            {step === 2 && (
                                <div>
                                    {/* Payment Tabs */}
                                    <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
                                        <button
                                            onClick={() => setPaymentMethod('auto')}
                                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${paymentMethod === 'auto' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-900'}`}
                                        >
                                            <Smartphone size={18} /> Mobile Money (Auto)
                                        </button>
                                        <button
                                            onClick={() => setPaymentMethod('manual')}
                                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${paymentMethod === 'manual' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-900'}`}
                                        >
                                            <Upload size={18} /> Manual Transfer
                                        </button>
                                    </div>

                                    {/* Automatic Payment */}
                                    {paymentMethod === 'auto' && (
                                        <div className="space-y-6 animate-fade-in">
                                            <p className="text-gray-600 text-sm">Select your provider and enter your number. You will receive a prompt to authorize the payment.</p>
                                            <div className="grid grid-cols-3 gap-4">
                                                {['Airtel', 'MTN', 'Zamtel'].map((p) => (
                                                    <button
                                                        key={p}
                                                        onClick={() => setProvider(p)}
                                                        className={`py-4 rounded-xl border-2 font-bold transition-all ${provider === p ? 'border-yellow-500 bg-yellow-50 text-yellow-900' : 'border-gray-100 hover:border-gray-200'}`}
                                                    >
                                                        {p}
                                                    </button>
                                                ))}
                                            </div>
                                            {provider && (
                                                <div className="space-y-4">
                                                    <input
                                                        type="tel"
                                                        placeholder={`Enter ${provider} Number (e.g., 097...)`}
                                                        className="w-full p-4 bg-gray-50 border-gray-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                                                        value={phoneNumber}
                                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                                    />
                                                    <button
                                                        onClick={handlePayment}
                                                        disabled={!phoneNumber || phoneNumber.length < 10 || isProcessing}
                                                        className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                                    >
                                                        {isProcessing ? (
                                                            <>
                                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                                Processing...
                                                            </>
                                                        ) : (
                                                            `Pay K${cartTotal.toFixed(2)}`
                                                        )}
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Manual Payment */}
                                    {paymentMethod === 'manual' && (
                                        <div className="space-y-6 animate-fade-in">
                                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                                <h3 className="font-bold text-yellow-900 mb-4">Send Money to:</h3>
                                                <div className="space-y-3 text-sm">
                                                    <div className="flex justify-between items-center border-b border-yellow-200/50 pb-2">
                                                        <span className="font-medium text-yellow-800">Airtel Money</span>
                                                        <span className="font-mono font-bold text-yellow-900">097 555 1234</span>
                                                    </div>
                                                    <div className="flex justify-between items-center border-b border-yellow-200/50 pb-2">
                                                        <span className="font-medium text-yellow-800">MTN Money</span>
                                                        <span className="font-mono font-bold text-yellow-900">096 555 1234</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-medium text-yellow-800">Zamtel Money</span>
                                                        <span className="font-mono font-bold text-yellow-900">095 555 1234</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                                                <Upload className="mx-auto text-gray-400 mb-2" />
                                                <p className="font-bold text-gray-900">Upload Screenshot</p>
                                                <p className="text-sm text-gray-500">Click to browse or drag & drop proof of payment.</p>
                                            </div>

                                            <button
                                                onClick={handlePayment}
                                                className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                                            >
                                                {isProcessing ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Processing...
                                                    </>
                                                ) : (
                                                    'Submit Payment Proof'
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="font-serif font-bold text-lg mb-6">Order Summary</h3>
                            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                                {cart.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="relative w-16 h-20 bg-gray-50 rounded overflow-hidden flex-shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            <span className="absolute top-0 right-0 bg-gray-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl">{item.quantity}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">{item.name}</h4>
                                            <p className="text-xs text-gray-500">{item.selectedSize} / {item.selectedColor}</p>
                                            <p className="text-sm font-bold mt-1">K{item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="font-medium">K{cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Shipping</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between items-center">
                                <span className="font-bold text-lg">Total</span>
                                <span className="font-black text-xl">K{cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
