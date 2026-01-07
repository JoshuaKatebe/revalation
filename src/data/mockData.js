
export const products = [
  {
    id: 1,
    name: 'I AM BLESSED Tee',
    price: 200,
    image: '/shirt1.png',
    category: 'I AM Series',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Grey'],
    stock: 120,
    status: 'In Stock'
  },
  {
    id: 2,
    name: 'Armor of God Hoodie',
    price: 350,
    image: '/shirt2.png',
    category: 'Warfare',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    stock: 85,
    status: 'In Stock'
  },
  {
    id: 3,
    name: 'Walk in Truth Tee',
    price: 200,
    image: '/shirt3.png',
    category: 'Scripture',
    sizes: ['M', 'L', 'XL'],
    colors: ['White'],
    stock: 45,
    status: 'Low Stock'
  },
  {
    id: 4,
    name: 'Faith Over Fear Tee',
    price: 200,
    image: '/shirt4.png',
    category: 'Faith',
    sizes: ['S', 'M', 'L'],
    colors: ['Grey', 'Olive'],
    stock: 0,
    status: 'Out of Stock'
  },
  {
    id: 5,
    name: 'I AM CHOSEN Tee',
    price: 200,
    image: '/shirt5.png',
    category: 'I AM Series',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red'],
    stock: 200,
    status: 'In Stock'
  },
  {
    id: 6,
    name: 'Spirit Led Cotton Tee',
    price: 200,
    image: '/shirt6.png',
    category: 'Basics',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Blue', 'Beige'],
    stock: 150,
    status: 'In Stock'
  },
  {
    id: 7,
    name: 'Grace Upon Grace Tee',
    price: 200,
    image: '/shirt7.png',
    category: 'Scripture',
    sizes: ['S', 'M', 'L'],
    colors: ['White'],
    stock: 30,
    status: 'Low Stock'
  },
  {
    id: 8,
    name: 'Prophetic Warrior Tee',
    price: 250,
    image: '/shirt8.png',
    category: 'Warfare',
    sizes: ['M', 'L'],
    colors: ['Black'],
    stock: 10,
    status: 'Low Stock'
  }
];

export const testimonials = [
  { id: 1, name: 'Grace M.', role: 'Worship Leader', text: 'This isn\'t just clothing; it\'s a declaration. Wearing the "I AM BLESSED" tee reminds me of my identity in Christ every day.' },
  { id: 2, name: 'David K.', role: 'Youth Pastor', text: 'The quality is incredible, but the message is even better. Our youth group loves the "Armor of God" hoodies.' },
  { id: 3, name: 'Sarah L.', role: 'Customer', text: 'I bought the "Walk in Truth" tee as a gift, and it was perfect. Fast shipping and beautiful packaging.' }
];

export const scriptures = [
  { cite: 'Ephesians 6:11', text: 'Put on the full armor of God, so that you can take your stand against the devil’s schemes.' },
  { cite: 'Isaiah 54:17', text: 'No weapon forged against you will prevail, and you will refute every tongue that accuses you.' },
  { cite: 'Psalm 139:14', text: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.' }
];

export const orders = [
  { id: '#ORD-7829', customer: 'Alex Johnson', date: '2023-10-25', total: 600, status: 'Delivered', items: 3 },
  { id: '#ORD-7830', customer: 'Sarah Williams', date: '2023-10-26', total: 200, status: 'Processing', items: 1 },
  { id: '#ORD-7831', customer: 'Michael Brown', date: '2023-10-26', total: 400, status: 'Shipped', items: 2 },
  { id: '#ORD-7832', customer: 'Emily Davis', date: '2023-10-27', total: 200, status: 'Pending', items: 1 },
  { id: '#ORD-7833', customer: 'David Wilson', date: '2023-10-27', total: 1000, status: 'Processing', items: 5 },
  { id: '#ORD-7834', customer: 'Jessica Taylor', date: '2023-10-27', total: 200, status: 'Pending', items: 1 },
];

export const messages = [
  { id: 1, from: 'John Doe', email: 'john@example.com', subject: 'Sizing Question', preview: 'Hi, I was wondering if the medium size runs true to size...', date: '2h ago', read: false },
  { id: 2, from: 'Alice Smith', email: 'alice@example.com', subject: 'Order Inquiry', preview: 'I have not received my tracking number for order #ORD-7820...', date: '5h ago', read: true },
  { id: 3, from: 'Bob Jones', email: 'bob@example.com', subject: 'Restock Info', preview: 'When will the Vintage Wash Tee be back in stock?', date: '1d ago', read: true },
];

export const stats = {
  revenue: { value: 'K12,450', change: '+15%', trend: 'up' },
  orders: { value: '154', change: '+8%', trend: 'up' },
  products: { value: '8', change: '0%', trend: 'neutral' },
  customers: { value: '1,203', change: '+22%', trend: 'up' }
};
