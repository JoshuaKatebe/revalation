'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from local storage on mount (optional for presentation, but nice to have)
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to parse cart', e);
            }
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, size, color) => {
        setCart(prev => {
            // Check if item with same ID, size, and color exists
            const existingItemIndex = prev.findIndex(item =>
                item.id === product.id && item.selectedSize === size && item.selectedColor === color
            );

            if (existingItemIndex > -1) {
                const newCart = [...prev];
                newCart[existingItemIndex].quantity += 1;
                return newCart;
            } else {
                return [...prev, { ...product, selectedSize: size, selectedColor: color, quantity: 1 }];
            }
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (index) => {
        setCart(prev => prev.filter((_, i) => i !== index));
    };

    const updateQuantity = (index, newQuantity) => {
        if (newQuantity < 1) return;
        setCart(prev => {
            const newCart = [...prev];
            newCart[index].quantity = newQuantity;
            return newCart;
        });
    };

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            cartTotal,
            cartCount,
            isCartOpen,
            setIsCartOpen,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
