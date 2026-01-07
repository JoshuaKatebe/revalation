import "./globals.css";
import { Inter } from 'next/font/google';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import { LucideIcon } from 'lucide-react'; // Import simply to ensure lucide-react is installed, though not used directly here

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "REVALATION | Premium Apparel",
  description: "Modern streetwear and premium t-shirts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-black antialiased`}>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
