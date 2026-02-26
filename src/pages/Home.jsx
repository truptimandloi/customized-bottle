import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full overflow-hidden font-sans">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 bg-gradient-to-br from-emerald-800 via-teal-600 to-cyan-500 text-white">

        {/* Background Blur Circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* TEXT */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Design Your <span className="text-yellow-300">Own Bottle</span> Brand
            </h1>

            <p className="text-lg text-emerald-100 max-w-xl">
              Create, customize and preview your branded PET bottles in 3D.
              Perfect for startups, events, and bulk manufacturing.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/customize"
                className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300"
              >
                Start Customizing
              </Link>

              <Link
                to="/order"
                className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-emerald-700 transition duration-300"
              >
                Bulk Manufacturing
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="hidden md:flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1616118132534-381148898bb4"
              alt="Transparent Water Bottle"
              className="rounded-3xl shadow-2xl bg-white/20 backdrop-blur-md p-6 w-full max-w-md hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <h2 className="text-4xl font-bold text-emerald-700 mb-4">
          Why AquaCraft?
        </h2>

        <p className="text-gray-600 mb-16">
          We combine design innovation with industrial-grade production.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "3D Live Preview",
              desc: "See your bottle design in real-time before placing the order."
            },
            {
              title: "Bulk Production",
              desc: "Industrial-scale manufacturing with fast delivery."
            },
            {
              title: "Brand Label Printing",
              desc: "High-quality label and shrink-wrap branding options."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-4xl font-bold text-emerald-700 mb-6">
          How It Works
        </h2>

        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Size, shape aur branding select karein — preview dekhein —
          aur directly manufacturing team se connect karein.
        </p>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {[
            "Select Size & Shape",
            "Upload Your Logo",
            "Preview in 3D",
            "Confirm & Order"
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-3xl font-bold text-emerald-600 mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold text-lg text-gray-700">
                {step}
              </h3>
            </div>
          ))}

        </div>
      </section>

         {/* CUSTOMIZATION SHOWCASE */}
<section className="py-24 bg-gray-50 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <div className="flex justify-center">
      <img
        src="https://media.istockphoto.com/id/1552781935/photo/water-bottles-on-an-automated-conveyor-belt.webp?a=1&b=1&s=612x612&w=0&k=20&c=dRaH3PAK3Escm4yX9Opu1uuHohSPhVGqY_UAUZiZH4k="
        alt="Bottle Manufacturing"
        className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
      />
    </div>

    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-emerald-700">
        Built for Brands That Want to Stand Out
      </h2>

      <p className="text-gray-600 leading-relaxed">
        From shape selection to cap color and label artwork —
        everything is customizable. Launch your own water brand
        with professional-grade manufacturing and premium finishing.
      </p>

      <Link
        to="/customize"
        className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 transition"
      >
        Design Now
      </Link>
    </div>

  </div>
</section>
  
   {/* TESTIMONIALS */}
<section className="py-24 bg-white text-center px-6">
  <h2 className="text-4xl font-bold text-emerald-700 mb-14">
    What Our Clients Say
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    {[
      {
        text: "Amazing quality bottles! Our event branding looked premium.",
        name: "Rahul Sharma"
      },
      {
        text: "Direct factory contact made bulk ordering super easy.",
        name: "Priya Verma"
      },
      {
        text: "Customization options are fantastic. Highly recommended!",
        name: "Amit Singh"
      }
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 p-10 rounded-3xl shadow-md hover:shadow-xl transition"
      >
        <p className="text-gray-600 mb-6 italic">“{item.text}”</p>
        <h4 className="font-semibold text-emerald-700">
          {item.name}
        </h4>
      </div>
    ))}

  </div>
</section>

      {/* STATS */}
      <section className="py-20 bg-emerald-600 text-white text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">

          {[
            ["500+", "Happy Clients"],
            ["1M+", "Bottles Delivered"],
            ["24hr", "Order Confirmation"],
            ["PAN India", "Supply"]
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold">{stat[0]}</h3>
              <p className="text-emerald-100">{stat[1]}</p>
            </div>
          ))}

        </div>
      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-600 text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Launch Your Custom Bottle Brand?
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-emerald-100">
          Preview everything in real-time and connect directly
          with our manufacturing team for bulk production.
        </p>

        <Link
          to="/customize"
          className="bg-white text-emerald-700 px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300"
        >
          Start Customizing
        </Link>
      </section>


      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/74xxxxxxxxx"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition duration-300"
      >
        💬
      </a>

    </div>
  );
}