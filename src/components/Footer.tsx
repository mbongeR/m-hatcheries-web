import Link from 'next/link';
import { Egg, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-xl flex items-center justify-center">
                <Egg className="w-4 h-4 text-gray-900" />
              </div>
              <span className="font-bold text-white">M-Hatcheries Services</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              From Egg to Chick – We Make It Happen.
            </p>
            <p className="text-xs text-gray-500 mt-3">Proudly Zimbabwean. Est. 2020.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Our Solutions' },
                { href: '/products', label: 'Live Inventory' },
                { href: '/blog', label: 'News & Tips' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <div>
                  <p>+263 772 287 864</p>
                  <p>+263 712 023 451</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <p>Entumbane, Bulawayo, Zimbabwe</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} M-Hatcheries Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
