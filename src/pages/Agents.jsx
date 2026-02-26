import { useState } from "react";

export default function Owner() {
  const owner = {
    name: "Mr. Arvind Mehta",
    role: "Founder & Managing Director",
    phone: "917489684255",
    email: "info@aquacraftbottles.com",
    location: "Indore, Madhya Pradesh",
    experience: "18+ Years Experience",
    company: "AquaCraft PET Industries Pvt. Ltd.",
  };

  const whatsappMessage = `Hello ${owner.name}, I would like to know more about your PET bottle manufacturing services.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
            Meet The Founder
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading innovation in India's premium PET bottle manufacturing industry.
          </p>
        </div>

        {/* OWNER SECTION */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

          {/* IMAGE */}
          <div className="relative h-[500px] md:h-full">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328d5f8b?w=1000"
              alt="Owner"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-black/50 text-white p-6 w-full">
              <h2 className="text-2xl font-bold">{owner.name}</h2>
              <p>{owner.role}</p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-10">
            <p className="text-emerald-600 font-semibold mb-4">
              {owner.experience}
            </p>

            <div className="space-y-5 text-gray-700 leading-relaxed">

              <p>
                Founder of {owner.company}, Mr. Mehta has built one of the most
                advanced PET bottle manufacturing facilities with automated,
                high-speed production lines.
              </p>

              <p>
                The plant operates under strict hygiene protocols with
                zero-contact processing and ISO-certified quality control systems.
              </p>

              <p>
                Specialized in custom bottle molding, private label branding,
                cap color customization and bulk production solutions.
              </p>

              <p>
                With distribution across multiple states, the company serves
                startups, premium water brands and large distributors.
              </p>

            </div>

            {/* CONTACT */}
            <div className="mt-8 space-y-2 text-gray-600">
              <p>📍 {owner.location}</p>
              <p>📧 {owner.email}</p>
              <p>📞 +{owner.phone}</p>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-4">
              <a
                href={`https://wa.me/${owner.phone}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
              >
                Chat on WhatsApp
              </a>

              <a
                href={`tel:+${owner.phone}`}
                className="border border-emerald-600 text-emerald-700 px-6 py-3 rounded-full hover:bg-emerald-600 hover:text-white transition"
              >
                Call Now
              </a>
            </div>

          </div>
        </div>

        {/* STATS SECTION */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-emerald-600">150K+</h3>
            <p className="text-gray-600 mt-2">Bottles / Day</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-emerald-600">18+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-emerald-600">12+</h3>
            <p className="text-gray-600 mt-2">States Served</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-emerald-600">500+</h3>
            <p className="text-gray-600 mt-2">Clients</p>
          </div>
        </div>

        {/* CERTIFICATION SECTION */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-emerald-700 mb-6">
            Certifications & Quality Standards
          </h3>

          <p className="text-gray-600 max-w-3xl mx-auto">
            ISO 9001 Certified Manufacturing | Food Grade PET Approved |
            Advanced Strength & Clarity Testing | Zero Contamination Production
          </p>
        </div>

      </div>
    </div>
  );
}