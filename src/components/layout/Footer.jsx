export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20 mt-0">

      <div className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-4 gap-12">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">AquaCraft</h3>
          <p className="text-emerald-200 text-sm leading-6">
            A fully customized PET bottle design platform.
            Select your size, colour, shape and branding.
            Manufacture directly through verified suppliers.
          </p>
        </div>

        {/* Customization */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Customization</h4>
          <ul className="space-y-3 text-emerald-200 text-sm">
            <li>Bottle Size Selection</li>
            <li>Cap Colour Options</li>
            <li>Shape Variants</li>
            <li>Label Designing</li>
          </ul>
        </div>

        {/* Manufacturing */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Manufacturing</h4>
          <ul className="space-y-3 text-emerald-200 text-sm">
            <li>Bulk Production</li>
            <li>Minimum Order Quantity</li>
            <li>Pan India Delivery</li>
            <li>Direct WhatsApp Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact</h4>
          <p className="text-emerald-200 text-sm leading-6">
            📱 +91 XXXXXXXX <br />
            ✉ support@aquacraft.com <br />
            🕒 Mon - Sat | 9AM - 7PM
          </p>
        </div>

      </div>

      <div className="border-t border-emerald-800 text-center py-6 text-emerald-300 text-sm">
        © {new Date().getFullYear()} AquaCraft. All rights reserved.
      </div>
    </footer>
  );
}