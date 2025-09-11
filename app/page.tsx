'use client';
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
 const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const destinations = [
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1592229506151-845940174bb0?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'New York', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1705672388539-e3fb6ffbc74d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <>
      <Head>
        <title>BookEasy - Find Your Perfect Hotel</title>
        <meta name="description" content="Book hotels effortlessly with BookEasy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?hotel,luxury')" }}>
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg">Discover Your Perfect Stay</h1>
          <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl mx-auto drop-shadow">Book hotels worldwide with ease and comfort</p>

          {/* Search Form */}
          <div className="bg-white/90 text-black p-8 rounded-xl shadow-2xl w-full max-w-3xl backdrop-blur-md">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label htmlFor="destination" className="block text-sm font-medium">Destination</label>
                <input
                  type="text"
                  id="destination"
                  placeholder="Where are you going?"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="checkIn" className="block text-sm font-medium">Check-in</label>
                <input
                  type="date"
                  id="checkIn"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="checkOut" className="block text-sm font-medium">Check-out</label>
                <input
                  type="date"
                  id="checkOut"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium">Guests</label>
                <input
                  type="number"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  min="1"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow"
            >
              Search Hotels
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {destinations.map((dest) => (
              <div key={dest.name} className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-200">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover"
                  priority
                />
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{dest.name}</h3>
                  <Link href={`/destinations/${dest.name.toLowerCase()}`} className="text-blue-600 hover:underline font-medium">
                    Explore Hotels
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} BookEasy. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/about" className="hover:underline text-gray-300">About</Link>
            <Link href="/contact" className="hover:underline text-gray-300">Contact</Link>
            <Link href="/privacy" className="hover:underline text-gray-300">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
