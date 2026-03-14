import React, { useState } from "react";

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">

          <h1 className="text-xl md:text-2xl font-bold text-yellow-600">
            LuxuryJewels
          </h1>

          {/* Desktop Menu */}
          <nav className="space-x-6 hidden md:block">
            <a href="#home" className="hover:text-yellow-600">Home</a>
            <a href="#products" className="hover:text-yellow-600">Products</a>
            <a href="#about" className="hover:text-yellow-600">About</a>
            <a href="#contact" className="hover:text-yellow-600">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-yellow-50 py-16 md:py-20 text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Timeless Jewellery Collection
        </h2>

        <p className="text-gray-600 text-md md:text-lg mb-6">
          Discover elegance and luxury with our handcrafted jewellery.
        </p>

        <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700">
          Explore Collection
        </button>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-6">

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Featured Jewellery
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
                alt="Ring"
                className="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold">Diamond Ring</h4>
              <p className="text-gray-600">Elegant handcrafted ring.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed"
                alt="Necklace"
                className="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold">Gold Necklace</h4>
              <p className="text-gray-600">Luxury gold necklace design.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1"
                alt="Bracelet"
                className="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <h4 className="text-xl font-semibold">Elegant Bracelet</h4>
              <p className="text-gray-600">Stylish bracelet for all occasions.</p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-yellow-50 py-16">
        <div className="container mx-auto px-6 text-center">

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            About Our Brand
          </h3>

          <p className="text-gray-700 max-w-2xl mx-auto">
            We create premium jewellery pieces crafted with precision and
            passion. Our designs combine tradition and modern elegance to
            deliver timeless beauty for every occasion.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Contact Us
          </h3>

          <div className="max-w-3xl mx-auto">

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded-lg w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border p-3 rounded-lg w-full"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border p-3 rounded-lg md:col-span-2"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="border p-3 rounded-lg md:col-span-2"
              />

              <button
                className="bg-yellow-600 text-white px-6 py-3 rounded-lg md:col-span-2 hover:bg-yellow-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Footer */}
     <footer className="bg-gray-900 text-white py-10">
  <div className="container mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

      {/* Brand */}
      <div>
        <h4 className="text-xl font-semibold mb-3 text-yellow-500">
          LuxuryJewels
        </h4>
        <p className="text-gray-400">
          Premium handcrafted jewellery designed with elegance and luxury.
        </p>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-yellow-500">
          Contact
        </h4>

        <p className="text-gray-400">
          📞 Phone: +91 9876543210
        </p>

        <p className="text-gray-400">
          ✉ Email: support@luxuryjewels.com
        </p>

        <p className="text-gray-400">
          💬 Telegram: @luxuryjewels
        </p>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-yellow-500">
          Follow Us
        </h4>

        <div className="flex justify-center md:justify-start gap-6 text-gray-400">
          <a href="#" className="hover:text-yellow-500">Instagram</a>
          <a href="#" className="hover:text-yellow-500">Facebook</a>
          <a href="#" className="hover:text-yellow-500">Twitter</a>
        </div>
      </div>

    </div>

    {/* Bottom Line */}
    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
      © 2026 LuxuryJewels. All Rights Reserved.
    </div>

  </div>
</footer>
    </div>
  );
}