export default function About() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1536939459926-301728717817"
          alt="Premium Bottle Manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-emerald-400">AquaCraft</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Precision Manufacturing. Premium Design. Powerful Brand Identity.
          </p>
        </div>
      </section>


      {/* MAIN CONTENT */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT TEXT */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

              <h2 className="text-4xl font-bold text-emerald-800">
                We Build Brands Through Bottles
              </h2>

              <p>
                We are not just bottle manufacturers — we are brand enablers.
                Our premium transparent PET bottles are designed with precision
                engineering and modern automation systems to ensure durability,
                crystal clarity, and a luxury finish.
              </p>

              <p>
                From startups launching their first bottled water brand to
                large-scale distributors, we provide industrial-grade production
                with unmatched hygiene standards and zero human contact processes.
              </p>

              <p>
                Every bottle reflects quality, safety, and visual excellence —
                because your brand deserves nothing less.
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1682144492263-7623997157df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww"
                alt="Transparent Bottle"
                className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>

        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-emerald-800 mb-14">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-emerald-700 mb-3">500+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-emerald-700 mb-3">1M+</h3>
              <p className="text-gray-600">Bottles Delivered</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-emerald-700 mb-3">24hr</h3>
              <p className="text-gray-600">Order Confirmation</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-emerald-700 mb-3">PAN India</h3>
              <p className="text-gray-600">Distribution Network</p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA SECTION */}
      <section className="bg-emerald-700 text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Launch Your Own Bottle Brand?
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-emerald-100">
          Customize your bottle design, preview it in 3D,
          and connect directly with our manufacturing team.
        </p>

        <a
          href="/customize"
          className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Start Designing
        </a>
      </section>

    </div>
  );
}