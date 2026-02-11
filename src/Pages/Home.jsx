import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200">

      {/* Header */}
      <header className="bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-wide text-rose-400">
            Beaufinity
          </h1>

          <nav className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Shop</a>
            <a href="#" className="hover:text-white transition">Routines</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* Featured Hero */}
        <section className="mb-16">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
              alt="Skincare"
              className="w-full h-[400px] object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-10">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Radiance Redefined
              </h2>
              <p className="text-gray-300 mb-6 max-w-md">
                Premium skincare designed to nourish, restore, and elevate your natural glow.
              </p>

              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-medium w-fit transition">
                Explore Collection
              </button>
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="grid gap-8 md:grid-cols-3">

          <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-rose-500 transition">
            <img
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30"
              alt="Makeup"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Velvet Matte Kit
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Long-lasting finish for confident everyday wear.
              </p>
              <button className="text-rose-400 hover:text-rose-500 text-sm font-medium">
                View Product →
              </button>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-rose-500 transition">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03"
              alt="Serum"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Glow Repair Serum
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Hydrate and restore brightness overnight.
              </p>
              <button className="text-rose-400 hover:text-rose-500 text-sm font-medium">
                View Product →
              </button>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-rose-500 transition">
            <img
              src="https://images.unsplash.com/photo-1585238342028-4f8f8e52e7c4"
              alt="Haircare"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Silk Hair Elixir
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Strengthen and smooth with botanical extracts.
              </p>
              <button className="text-rose-400 hover:text-rose-500 text-sm font-medium">
                View Product →
              </button>
            </div>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-gray-500">
        © 2026 Beaufinity. Crafted for confidence.
      </footer>

    </div>
  );
};

export default Home;
