import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Smartphone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Discover', href: '/discover' },
  { label: 'Services', href: '/#services' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 glass shadow-lg shadow-black/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#006039] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-sm font-display">F</span>
            </div>
            <span className="font-black text-xl text-[#111827] tracking-tight font-display">
              FOOD<span className="text-[#006039]">ZY</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.href
                    ? 'text-[#006039] bg-[#006039]/8'
                    : 'text-[#374151] hover:text-[#006039] hover:bg-[#006039]/6'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl text-sm font-medium text-[#374151] hover:text-[#006039] hover:bg-[#006039]/6 transition-all"
            >
              Login
            </Link>
            <Link
              to="/download"
              className="btn-primary text-sm py-2.5 px-5"
            >
              <Smartphone size={15} />
              Download App
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[#374151] hover:bg-[#006039]/8 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 glass shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === link.href
                    ? 'text-[#006039] bg-[#006039]/10'
                    : 'text-[#374151] hover:text-[#006039] hover:bg-[#006039]/6'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Link to="/login" className="btn-secondary text-sm py-3 justify-center">
                Login
              </Link>
              <Link to="/download" className="btn-primary text-sm py-3 justify-center">
                <Smartphone size={15} />
                Download App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
