
import Link from 'next/link';

const Header = () => (
  <header className="flex justify-between items-center px-6 py-4 bg-primary text-white">
    <h1 className="text-2xl font-bold">Xplora.io</h1>
    <nav className="flex space-x-6">
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/support">Support</Link>
    </nav>
    <button className="px-4 py-2 bg-accent rounded-lg">Get Started</button>
  </header>
);

export default Header;
