import '@/styles/globals.css'
import Link from 'next/link'

// ✅ Layout with Navbar + Footer
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="text-xl font-bold text-blue-600">Peili Lee</Link>
          <div className="space-x-6">
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <Link href="/listings" className="hover:text-blue-500">Listings</Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-6 py-10">{children}</main>
      <footer className="bg-gray-100 text-center py-6 text-gray-600">
        © {new Date().getFullYear()} Peili Lee | All Rights Reserved
      </footer>
    </div>
  )
}

// ✅ Pages
export function HomePage() {
  return (
    <Layout>
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Peili Lee 👋</h1>
        <p className="text-lg text-gray-600 mb-6">
          Realtor | DFW Metroplex | Helping clients find their dream homes
        </p>
        <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700">
          Work With Me
        </Link>
      </section>
    </Layout>
  )
}

export function AboutPage() {
  return (
    <Layout>
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        I’m a passionate realtor with 3+ years of experience helping clients buy and sell homes
        across the Dallas-Fort Worth metroplex. My mission is to provide personalized service and
        build long-lasting relationships.
      </p>
    </Layout>
  )
}

export function ListingsPage() {
  return (
    <Layout>
      <h2 className="text-3xl font-semibold mb-4">Featured Listings</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((id) => (
          <div key={id} className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <img
              src={`/listing-${id}.jpg`}
              alt={`Listing ${id}`}
              className="rounded-lg mb-3"
            />
            <h3 className="text-xl font-bold">Beautiful Home #{id}</h3>
            <p className="text-gray-600">3 Bed | 2 Bath | $350,000</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export function ContactPage() {
  return (
    <Layout>
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form className="space-y-4 max-w-lg">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded-lg"></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </Layout>
  )
}
