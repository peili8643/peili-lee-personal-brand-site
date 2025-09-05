import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6">
          Hi, I’m Peili Lee 👋
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Realtor | DFW Metroplex | Helping clients find their dream homes
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Work With Me
        </Link>
      </section>
    </Layout>
  );
}
