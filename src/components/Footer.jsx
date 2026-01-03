import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-14">

      {/* TOP */}
      <div
        className="
          max-w-7xl mx-auto px-8 text-sm
          flex flex-col lg:flex-row
          gap-10 md:gap-20 lg:gap-16
        "
      >
        {/* CONTACT */}
        <div>
          <h4 className="font-bold text-black mb-4">CONTACT US</h4>

          <p>📞Toll Free Customer Care</p>
          <p className="mt-2 text-[#551DEF] font-medium">
            +91 9247534848
          </p>

          <p className="mt-6">📧Need live support?</p>
          <p className="mt-2 text-[#551DEF] font-medium">
            <a
              href="mailto:info@marktours.in"
              onClick={(e) => e.stopPropagation()}
              className="hover:underline cursor-pointer"
            >
              {/* support@marktour.com */}
              info@marktours.in
            </a>
          </p>

          <p className="mt-6">📌Location</p>
          <p className="mt-2 text-[#551DEF] font-medium">
            <a
              href="https://www.google.com/maps/search/?api=1&query=405, PSR Prime Towers Road, APHB Colony, Indira Nagar, Gachibowli, Hyderabad, TS 500032, India"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:underline cursor-pointer"
            >
              405, PSR Prime Towers Road, APHB Colony, Indira Nagar,
              Gachibowli, Hyderabad, TS 500032, India
            </a>
          </p>
        </div>
        <div className="w-full lg:w-[780px] h-[300px] lg:h-auto self-stretch">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2720863888385!2d78.3547356!3d17.4466866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bc3378b007%3A0xc9feddc1a9553150!2s405%2C%20PSR%20Prime%20Towers%20Rd%2C%20DLF%20Cyber%20City%2C%20Indira%20Nagar%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500032!5e0!3m2!1sen!2sin!4v1767347886916!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* RIGHT GROUP */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

          {/* COMPANY */}
          <div>
            <h4 className="font-bold text-black mb-4">OUR COMPANY</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Gift Cards</li>
              <li>Magazine</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-bold text-black mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              <li>Contact</li>
              <li>Legal Notice</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold text-black mb-4">OTHER SERVICES</h4>
            <ul className="space-y-2">
              <li>Activity Finder</li>
              <li>Tour List</li>
              <li>Flight Finder</li>
              <li>Cruise Ticket</li>
              <li>Holiday Rental</li>
              <li>Travel Agents</li>
            </ul>
          </div>

          {/* APP */}
          <div>
            <h4 className="font-bold text-black mb-4">MARKTOUR APP</h4>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-2 w-[210px]">
                <img
                  src="/assets/images/Apple.png"
                  alt="Apple Store"
                  className="w-[28px]"
                />
                <div className="text-xs">
                  <p className="text-gray-500">Download on the</p>
                  <p className="font-semibold">Apple Store</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-2 w-[210px]">
                <img
                  src="/assets/images/Playstore.png"
                  alt="Play Store"
                  className="w-[28px]"
                />
                <div className="text-xs">
                  <p className="text-gray-500">Download on the</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

          <div className="flex flex-wrap gap-6">
            <span>© 2022 Marktour. All rights reserved.</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Site Map</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <img
                src="/assets/images/globe.png"
                alt="Language"
                className="w-[18px]"
              />
              English (US)
            </span>

            <div className="flex gap-3">
              {/* <img src="/assets/images/facebook.png" alt="Facebook" className="w-[18px]" /> */}
              <a
                href="https://www.facebook.com/share/r/1KWCivD2wD/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src="/assets/images/facebook.png"
                  alt="Facebook"
                  className="w-[18px] cursor-pointer"
                />
              </a>

              <img src="/assets/images/twitter.png" alt="Twitter" className="w-[18px]" />
              {/* <img src="/assets/images/instagram.png" alt="Instagram" className="w-[18px]" /> */}
              <a
                href="https://www.instagram.com/marktours.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src="/assets/images/instagram.png"
                  alt="Instagram"
                  className="w-[18px] cursor-pointer"
                />
              </a>

              <img src="/assets/images/youtube.png" alt="YouTube" className="w-[18px]" />
            </div>
          </div>

        </div>
      </div>

      {/* Version Number */}
      <div className="fixed bottom-1 right-1 text-[10px] text-gray-500 z-50 opacity-60">
        v1.0.0
      </div>
    </footer>
  );
}