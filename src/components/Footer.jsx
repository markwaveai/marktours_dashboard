import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm text-gray-600">

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-black mb-4">CONTACT US</h4>
          <p>Toll Free Customer Care</p>
          <p className="mt-2">+123 456 7890</p>
          <br />
          <p>need support?</p>
          <p className="mt-2 text-blue-600">support@marktour.com</p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold text-black mb-4">OUR COMPANY</h4>
          <p>About Us</p>
          <p className="mt-2">Careers</p>
          <p className="mt-2">Blog</p>
          <p className="mt-2">Magazine</p>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="font-semibold text-black mb-4">SUPPORT</h4>
          <p>Contact</p>
          <p className="mt-2">Legal Notice</p>
          <p className="mt-2">Privacy Policy</p>
          <p className="mt-2">Terms & Conditions</p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold text-black mb-4">OTHER SERVICES</h4>
          <p>Activity Finder</p>
          <p className="mt-2">Tour List</p>
          <p className="mt-2">Flight Finder</p>
          <p className="mt-2">Holiday Rental</p>
        </div>

        {/* MARKTOUR APP */}
        <div>
          <h4 className="font-semibold text-black mb-4">MARKTOUR APP</h4>

          {/* Apple */}
          <div className="flex items-center gap-3 bg-gray-200 rounded-lg px-4 py-2 mb-3 w-[210px]">
            <span>🍎</span>
            <div className="text-xs leading-tight">
              <p className="text-gray-500">Download on the</p>
              <p className="font-semibold text-black">Apple Store</p>
            </div>
          </div>

          {/* Google */}
          <div className="flex items-center gap-3 bg-gray-200 rounded-lg px-4 py-2 w-[210px]">
            <span>▶️</span>
            <div className="text-xs leading-tight">
              <p className="text-gray-500">Download on the</p>
              <p className="font-semibold text-black">Google Play</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">

          <div className="flex flex-wrap items-center gap-4">
            <span>© 2022 Marktour. All rights reserved.</span>
            <span className="cursor-pointer hover:text-black">Privacy</span>
            <span className="cursor-pointer hover:text-black">Terms</span>
            <span className="cursor-pointer hover:text-black">Site Map</span>
          </div>

          <div className="flex items-center gap-6">
            <span>🌐 English (US)</span>
            <div className="flex gap-3">
              <span>f</span>
              <span>🐦</span>
              <span>📷</span>
              <span>▶</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
