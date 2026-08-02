import { Link } from 'react-router-dom'
import { Globe, Share2, Link2, Smartphone, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About FOODZY', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Food Delivery', href: '/discover' },
    { label: 'Grocery', href: '/discover' },
    { label: 'Pharmacy', href: '/discover' },
    { label: 'Bakery', href: '/discover' },
    { label: 'Flowers', href: '/discover' },
  ],
  Partner: [
    { label: 'Restaurant Partner', href: '/partner' },
    { label: 'Delivery Partner', href: '/partner' },
    { label: 'Home Chef', href: '/partner' },
    { label: 'Franchise', href: '/franchise' },
    { label: 'Grocery Store', href: '/partner' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
}

const socials = [
  { icon: Globe, href: '#', label: 'Instagram' },
  { icon: Share2, href: '#', label: 'Facebook' },
  { icon: Link2, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="font-display font-black text-2xl mb-2">Stay in the loop</h3>
              <p className="text-[#9CA3AF]">Get the latest offers, restaurant additions, and local news.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 lg:w-72 px-4 py-3 rounded-2xl bg-white/8 border border-white/15 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#006039] focus:bg-white/12 transition-all"
              />
              <button className="btn-primary py-3 px-5 text-sm whitespace-nowrap">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-[#006039] flex items-center justify-center">
                <span className="text-white font-black text-sm font-display">F</span>
              </div>
              <span className="font-black text-xl tracking-tight font-display">
                FOOD<span className="text-[#86EFAC]">ZY</span>
              </span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
              India's first premium food ecosystem dedicated to Tier-3 towns, district
              headquarters, tehsils, and villages. Connecting communities through
              great food and trusted local businesses.
            </p>
            <div className="space-y-3 text-sm text-[#9CA3AF]">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#006039]" />
                <a href="mailto:hello@foodzy.in" className="hover:text-white transition-colors">hello@foodzy.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#006039]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#006039] mt-0.5 flex-shrink-0" />
                <span>Jhansi, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-display font-bold text-sm text-white mb-4">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#6B7280]">
            © 2025 FOODZY Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-xl bg-white/6 hover:bg-[#006039] flex items-center justify-center text-[#6B7280] hover:text-white transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
