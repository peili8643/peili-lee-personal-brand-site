import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Peili Lee
          </Link>
          <div className="space-x-6">
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link href="/listings" className="hover:text-blue-500">
              Listings
            </Link>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-16">
        {children}
      </main>

      <footer className="bg-gray-100 text-center py-6 text-gray-600">
        © {new Date().getFullYear()} Peili Lee | All Rights Reserved
      </footer>
    </div>
  );
}
