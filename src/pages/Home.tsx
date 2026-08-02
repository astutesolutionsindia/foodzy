import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, MapPin, Zap, Shield, ChefHat, ShoppingBasket, Pill, Star,
  ArrowRight, CheckCircle, Download, Smartphone, Apple, Play,
  Heart, Clock, Truck, Award, Users, TrendingUp, ChevronDown,
  ChevronRight, Package, Flower2, Milk, Beef, Bread, Gift,
  Quote, ChevronLeft, Mic, SlidersHorizontal
} from 'lucide-react'

// Scroll reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// Animated counter
function Counter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0
        const duration = 1800
        const step = end / (duration / 16)
        const timer = setInterval(() => {
          start = Math.min(start + step, end)
          setCount(Math.floor(start))
          if (start >= end) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end])
  return <span ref={ref}>{prefix}{count.toLocaleString('en-IN')}{suffix}</span>
}

const searchSuggestions = ['Biryani', 'Pizza', 'Momos', 'Bakery', 'Chicken', 'Paneer', 'Groceries', 'Medicine']

const features = [
  { icon: Zap, title: 'Lightning Fast Delivery', desc: 'Orders delivered in 30–45 minutes across your town, even in remote areas.', color: '#F59E0B', bg: '#FEF9EE' },
  { icon: Shield, title: 'Verified Local Partners', desc: 'Every restaurant, home chef and store is verified by our local team.', color: '#2563EB', bg: '#EFF6FF' },
  { icon: ChefHat, title: 'Home Chefs', desc: 'Discover authentic home-cooked meals from talented cooks in your community.', color: '#8B5CF6', bg: '#F5F3FF' },
  { icon: ShoppingBasket, title: 'Grocery & Essentials', desc: 'Fresh vegetables, dairy, bakery and pharmacy — all in one app.', color: '#006039', bg: '#F0FDF4' },
  { icon: TrendingUp, title: 'Lower Commissions', desc: 'We charge up to 60% lower commissions so local businesses earn more.', color: '#E53935', bg: '#FEF2F2' },
  { icon: Package, title: 'Pickup Options', desc: 'Order ahead and pick up from your favourite local restaurant or store.', color: '#0891B2', bg: '#F0FDFE' },
]

const services = [
  { icon: '🍱', label: 'Food', color: '#FEF3C7', iconColor: '#D97706' },
  { icon: '🛒', label: 'Grocery', color: '#ECFDF5', iconColor: '#059669' },
  { icon: '🥦', label: 'Fruits & Veggies', color: '#F0FDF4', iconColor: '#16A34A' },
  { icon: '🥩', label: 'Meat', color: '#FEF2F2', iconColor: '#DC2626' },
  { icon: '🥐', label: 'Bakery', color: '#FFF7ED', iconColor: '#EA580C' },
  { icon: '🥛', label: 'Dairy', color: '#EFF6FF', iconColor: '#2563EB' },
  { icon: '💊', label: 'Pharmacy', color: '#F5F3FF', iconColor: '#7C3AED' },
  { icon: '🎁', label: 'Gifts', color: '#FDF2F8', iconColor: '#DB2777' },
  { icon: '🌸', label: 'Flowers', color: '#FFF0F3', iconColor: '#F43F5E' },
]

const restaurants = [
  {
    name: "Razia's Kitchen",
    cuisine: 'Mughlai · Biryani',
    rating: 4.8,
    reviews: 342,
    time: '28-35 min',
    distance: '1.2 km',
    badge: '⭐ AI Recommended',
    badgeColor: '#006039',
    img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&h=400&fit=crop&auto=format',
    tag: 'Pure Veg',
    tagColor: '#22C55E',
    verified: true,
  },
  {
    name: 'Shree Ganesh Dhaba',
    cuisine: 'North Indian · Thali',
    rating: 4.6,
    reviews: 218,
    time: '20-30 min',
    distance: '0.8 km',
    badge: '🔥 Trending',
    badgeColor: '#E53935',
    img: 'https://images.unsplash.com/photo-1630851840633-f96999247032?w=600&h=400&fit=crop&auto=format',
    tag: 'Veg',
    tagColor: '#22C55E',
    verified: true,
  },
  {
    name: 'Café Nakshatra',
    cuisine: 'Bakery · Coffee · Snacks',
    rating: 4.9,
    reviews: 189,
    time: '15-25 min',
    distance: '0.5 km',
    badge: '❤️ Loved by Families',
    badgeColor: '#DB2777',
    img: 'https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=600&h=400&fit=crop&auto=format',
    tag: 'Non-Veg',
    tagColor: '#E53935',
    verified: true,
  },
]

const testimonials = [
  {
    name: 'Sunita Yadav',
    role: 'Customer · Jhansi',
    text: "FOODZY brought world-class food delivery to our small town. I can now order fresh groceries and hot biryani right at my doorstep. The app is so simple to use!",
    rating: 5,
    avatar: 'SY',
    avatarBg: '#006039',
  },
  {
    name: 'Ramesh Gupta',
    role: 'Restaurant Owner · Banda',
    text: "Since joining FOODZY, my restaurant visibility has tripled. The commission is much lower than other platforms, and the support team actually picks up when I call.",
    rating: 5,
    avatar: 'RG',
    avatarBg: '#2563EB',
  },
  {
    name: 'Arjun Singh',
    role: 'Delivery Partner · Lalitpur',
    text: "The earnings are transparent and payouts are on time every week. The app shows me the best routes and I make around ₹18,000 per month working flexible hours.",
    rating: 5,
    avatar: 'AS',
    avatarBg: '#E53935',
  },
  {
    name: 'Priya Sharma',
    role: 'Home Chef · Chitrakoot',
    text: "I never imagined selling my home-cooked food online. FOODZY set up my profile in one day. Now I get 20+ orders weekly and have my own small business!",
    rating: 5,
    avatar: 'PS',
    avatarBg: '#8B5CF6',
  },
]

const faqs = [
  { q: 'Which towns does FOODZY serve?', a: 'FOODZY currently serves 50+ district headquarters, tehsil towns and villages across Uttar Pradesh, Madhya Pradesh, and Rajasthan. We are rapidly expanding to new towns every month.' },
  { q: 'Can I order directly from the website?', a: 'The website lets you discover restaurants, browse menus, and save favourites. All ordering is done through the FOODZY mobile app, which offers live tracking, secure payments, and exclusive offers.' },
  { q: 'How do I become a restaurant partner?', a: 'Click "Partner With Us" and fill out the registration form. Our local team will verify your business within 48 hours and get your restaurant live on FOODZY.' },
  { q: 'Is there a minimum order value?', a: 'Minimum order values vary by restaurant and are clearly shown before checkout in the app. There is no platform-level minimum order.' },
  { q: 'How long does delivery take?', a: 'Most orders are delivered in 25–45 minutes depending on the restaurant, distance and time of day. You can track your delivery live in the app.' },
  { q: 'Is FOODZY available in my village?', a: 'We are expanding to villages and rural areas. Enter your location in the app to check current availability. If we are not yet in your area, register your interest and we will notify you.' },
]

const stats = [
  { value: 200, suffix: '+', label: 'Restaurants' },
  { value: 50, suffix: '+', label: 'Towns Covered' },
  { value: 25000, suffix: '+', label: 'Happy Customers' },
  { value: 500, suffix: '+', label: 'Delivery Partners' },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestionIndex, setSuggestionIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [favs, setFavs] = useState<Set<number>>(new Set())

  const heroRef = useReveal()
  const whyRef = useReveal()
  const servicesRef = useReveal()
  const restaurantsRef = useReveal()
  const townRef = useReveal()
  const downloadRef = useReveal()
  const partnerRef = useReveal()
  const testimonialsRef = useReveal()
  const faqRef = useReveal()

  useEffect(() => {
    const interval = setInterval(() => {
      setSuggestionIndex((i) => (i + 1) % searchSuggestions.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const toggleFav = (i: number) => {
    setFavs((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDF4] via-[#F8FAFC] to-[#FEF9EE]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0,96,57,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(229,57,53,0.08) 0%, transparent 50%)',
          }}
        />
        {/* Floating food emojis background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['🍱', '🛵', '🥘', '🌿', '🥐', '⚡'].map((emoji, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-10 animate-float"
              style={{
                left: `${10 + i * 16}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 0.4}s`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div ref={heroRef} className="reveal">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006039]/10 border border-[#006039]/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#006039] animate-pulse" />
              <span className="text-[#006039] text-sm font-semibold font-display">India's Premium Tier-3 Food Platform</span>
            </div>

            <h1 className="font-display font-black text-5xl lg:text-[64px] leading-[1.08] tracking-tight text-[#111827] mb-6">
              Delicious Food.{' '}
              <span className="gradient-text-green">Trusted Local</span>{' '}
              Stores.{' '}
              <span className="gradient-text-red">Delivered</span>{' '}
              Across Your Town.
            </h1>

            <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-xl">
              FOODZY connects residents of Tier-3 towns, tehsils, and villages with
              local restaurants, home chefs, and stores — bringing world-class delivery
              to every corner of India.
            </p>

            {/* Search bar */}
            <div className="relative mb-8 group">
              <div className="absolute inset-0 rounded-full bg-[#006039]/15 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center bg-white rounded-full shadow-xl shadow-black/8 border border-[#E5E7EB] overflow-hidden transition-all group-focus-within:border-[#006039]/50 group-focus-within:shadow-[0_0_0_4px_rgba(0,96,57,0.08),0_20px_40px_rgba(0,0,0,0.08)]">
                <div className="pl-5 pr-3">
                  <Search size={20} className="text-[#6B7280]" />
                </div>
                <input
                  type="text"
                  className="flex-1 py-4 text-[#111827] placeholder-[#9CA3AF] bg-transparent font-medium focus:outline-none"
                  placeholder={`Search "${searchSuggestions[suggestionIndex]}"…`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex items-center gap-2 pr-3">
                  <button className="p-2 rounded-full hover:bg-[#F3F4F6] transition-colors">
                    <Mic size={18} className="text-[#9CA3AF]" />
                  </button>
                  <div className="w-px h-6 bg-[#E5E7EB]" />
                  <div className="flex items-center gap-1.5 px-3 text-sm text-[#6B7280] cursor-pointer hover:text-[#006039] transition-colors">
                    <MapPin size={15} />
                    <span>My Town</span>
                  </div>
                  <Link to="/discover" className="btn-primary py-2.5 px-5 text-sm rounded-full">
                    Search
                  </Link>
                </div>
              </div>
            </div>

            {/* Popular searches */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <span className="text-xs text-[#9CA3AF] font-medium mr-1">Popular:</span>
              {['Biryani', 'Pizza', 'Thali', 'Momos', 'Sweets'].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-[#E5E7EB] text-[#374151] hover:border-[#006039] hover:text-[#006039] hover:bg-[#F0FDF4] transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to="/download" className="btn-primary text-base py-4 px-7">
                <Smartphone size={18} />
                Download App
              </Link>
              <Link to="/discover" className="btn-secondary text-base py-4 px-7">
                Explore Restaurants
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['#006039', '#2563EB', '#E53935', '#8B5CF6'].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-sm text-[#6B7280]"><b className="text-[#111827]">25,000+</b> happy customers</span>
              </div>
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={14} fill="#F59E0B" className="text-[#F59E0B]" />
                ))}
                <span className="text-sm text-[#6B7280] ml-1"><b className="text-[#111827]">4.8</b> rating</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Large circle */}
            <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#006039]/10 to-[#E53935]/6 animate-rotate-slow" />

            {/* Center illustration */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl animate-float">
                <img
                  src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=640&h=640&fit=crop&auto=format"
                  alt="Delicious biryani from a local restaurant"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -top-8 -left-16 glass rounded-2xl p-3 shadow-xl animate-float-delayed">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#006039] flex items-center justify-center">
                    <Zap size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111827]">Fast Delivery</div>
                    <div className="text-xs text-[#6B7280]">28 min avg</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-14 glass rounded-2xl p-3 shadow-xl animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B] flex items-center justify-center">
                    <Star size={18} className="text-white" fill="white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111827]">Top Rated</div>
                    <div className="text-xs text-[#6B7280]">4.8 ★ avg</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-20 glass rounded-2xl p-3 shadow-xl animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E53935] flex items-center justify-center">
                    <Truck size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111827]">200+ Restaurants</div>
                    <div className="text-xs text-[#6B7280]">Verified partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
          <span className="text-xs text-[#9CA3AF] font-medium">Scroll to explore</span>
          <ChevronDown size={18} className="text-[#9CA3AF]" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#006039] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-black text-4xl text-white font-display mb-1">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#86EFAC] text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY FOODZY ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={whyRef} className="reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] mb-4">
              <span className="text-[#006039] text-sm font-semibold">Why Choose FOODZY?</span>
            </div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#111827] mb-4">
              Built Different. <span className="gradient-text-green">Built for You.</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              We are not just another food app. FOODZY is built ground-up for India's
              Tier-3 towns — with lower fees, better service, and a genuine commitment
              to local communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-3xl p-7 border border-[#E5E7EB] group cursor-default"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: feat.bg }}
                >
                  <feat.icon size={24} style={{ color: feat.color }} />
                </div>
                <h3 className="font-display font-bold text-xl text-[#111827] mb-3">{feat.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={servicesRef} className="reveal text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] mb-4">
              <span className="text-[#D97706] text-sm font-semibold">All Services</span>
            </div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#111827] mb-4">
              Everything You Need,{' '}
              <span className="gradient-text-red">Delivered Fast</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              From hot meals to fresh produce, medicines to flowers — FOODZY delivers it all to your door.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-4">
            {services.map((svc, i) => (
              <Link
                key={i}
                to="/discover"
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-[#E5E7EB] hover:border-[#006039]/30 hover:shadow-lg hover:-translate-y-1 transition-all group"
                style={{ background: svc.color }}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">{svc.icon}</span>
                <span className="text-xs font-semibold text-[#374151] text-center leading-tight">{svc.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED RESTAURANTS ── */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div ref={restaurantsRef} className="reveal flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] mb-4">
                <span className="text-[#006039] text-sm font-semibold">Featured Restaurants</span>
              </div>
              <h2 className="font-display font-black text-4xl lg:text-5xl text-[#111827]">
                Loved by Your <span className="gradient-text-green">Neighbours</span>
              </h2>
            </div>
            <Link to="/discover" className="btn-secondary text-sm py-3 px-6">
              View All <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((r, i) => (
              <div key={i} className="card-hover bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* AI badge */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: r.badgeColor }}
                  >
                    {r.badge}
                  </div>
                  {/* Fav */}
                  <button
                    onClick={() => toggleFav(i)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Heart
                      size={16}
                      className={favs.has(i) ? 'text-[#E53935] fill-[#E53935]' : 'text-white'}
                    />
                  </button>
                  {/* Veg/NonVeg tag */}
                  <div
                    className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: r.tagColor }}
                  >
                    {r.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-lg text-[#111827]">{r.name}</h3>
                        {r.verified && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE]">
                            <CheckCircle size={10} className="text-[#2563EB]" fill="currentColor" />
                            <span className="text-[10px] font-semibold text-[#2563EB]">Verified</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-[#6B7280] mt-0.5">{r.cuisine}</p>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#F0FDF4]">
                      <Star size={13} fill="#22C55E" className="text-[#22C55E]" />
                      <span className="text-sm font-bold text-[#111827]">{r.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-3 text-xs text-[#9CA3AF]">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{r.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{r.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={12} />
                      <span>{r.reviews} reviews</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Link to="/discover" className="flex-1 btn-primary py-2.5 text-sm justify-center">
                      Browse Menu
                    </Link>
                    <Link
                      to="/download"
                      className="px-4 py-2.5 rounded-[14px] border border-[#E5E7EB] text-sm font-medium text-[#6B7280] hover:border-[#006039] hover:text-[#006039] transition-colors"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT FOR YOUR TOWN ── */}
      <section className="py-24 px-6 bg-[#006039] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div ref={townRef} className="reveal grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 mb-6">
                <MapPin size={14} className="text-[#86EFAC]" />
                <span className="text-white text-sm font-semibold">Built for Bharat</span>
              </div>
              <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Great food from{' '}
                <span className="text-[#86EFAC]">the people you know</span>,
                delivered faster than ever.
              </h2>
              <p className="text-[#A7F3D0] text-lg leading-relaxed mb-8">
                While larger platforms focus only on metros, FOODZY is dedicated to
                Tier-3 towns, district headquarters, tehsil towns, and villages. We
                believe every community deserves premium food delivery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🏘️', text: 'District Headquarters' },
                  { icon: '🌾', text: 'Tehsil Towns' },
                  { icon: '🏡', text: 'Villages' },
                  { icon: '🛤️', text: 'Rural Communities' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 rounded-2xl p-4 border border-white/10">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white font-semibold text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized map visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Background circle */}
                <div className="absolute inset-0 rounded-full bg-white/5 border-2 border-white/10" />
                <div className="absolute inset-8 rounded-full bg-white/5 border border-white/10" />

                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-3">🗺️</div>
                    <div className="text-white font-bold text-lg font-display">India's Towns</div>
                    <div className="text-[#86EFAC] text-sm">Connected by FOODZY</div>
                  </div>
                </div>

                {/* Markers */}
                {[
                  { label: 'Jhansi', x: '20%', y: '25%', active: true },
                  { label: 'Banda', x: '75%', y: '20%', active: true },
                  { label: 'Lalitpur', x: '30%', y: '70%', active: true },
                  { label: 'Sagar', x: '65%', y: '72%', active: false },
                  { label: 'Datia', x: '50%', y: '15%', active: false },
                ].map((marker, i) => (
                  <div
                    key={i}
                    className="absolute flex flex-col items-center gap-1"
                    style={{ left: marker.x, top: marker.y, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="relative">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-white ${marker.active ? 'bg-[#22C55E]' : 'bg-[#F59E0B]'}`}
                      />
                      {marker.active && (
                        <div className="absolute inset-0 rounded-full bg-[#22C55E] animate-ping opacity-60" />
                      )}
                    </div>
                    <div className="px-2 py-0.5 rounded-full bg-white/90 text-xs font-bold text-[#006039] whitespace-nowrap shadow-lg">
                      {marker.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD APP ── */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div ref={downloadRef} className="reveal grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF2F2] border border-[#FECACA] mb-6">
                <Smartphone size={14} className="text-[#E53935]" />
                <span className="text-[#E53935] text-sm font-semibold">Download the App</span>
              </div>
              <h2 className="font-display font-black text-4xl lg:text-5xl text-[#111827] mb-6 leading-tight">
                Your Favourite Food is Just{' '}
                <span className="gradient-text-red">One Tap Away.</span>
              </h2>
              <p className="text-[#6B7280] text-lg mb-8">
                Download FOODZY and get access to 200+ restaurants, real-time tracking,
                secure UPI payments, exclusive offers, and more — all designed for your town.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Zap, label: 'Fast Ordering', desc: '3 taps to checkout' },
                  { icon: Shield, label: 'Secure Payments', desc: 'UPI, cards, wallet' },
                  { icon: Truck, label: 'Live Tracking', desc: 'Real-time GPS' },
                  { icon: Award, label: 'Exclusive Offers', desc: 'Daily deals' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                    <div className="w-9 h-9 rounded-xl bg-[#006039]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-[#006039]" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#111827]">{item.label}</div>
                      <div className="text-xs text-[#9CA3AF]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/download" className="flex items-center gap-3 bg-[#111827] text-white px-6 py-3.5 rounded-2xl hover:bg-black transition-colors hover:-translate-y-1 hover:shadow-xl transition-all">
                  <Apple size={22} />
                  <div className="text-left">
                    <div className="text-[10px] text-[#9CA3AF]">Download on the</div>
                    <div className="font-bold text-sm">App Store</div>
                  </div>
                </Link>
                <Link to="/download" className="flex items-center gap-3 bg-[#111827] text-white px-6 py-3.5 rounded-2xl hover:bg-black transition-colors hover:-translate-y-1 hover:shadow-xl transition-all">
                  <Play size={22} fill="white" />
                  <div className="text-left">
                    <div className="text-[10px] text-[#9CA3AF]">Get it on</div>
                    <div className="font-bold text-sm">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Phone mockup visual */}
            <div className="flex justify-center items-center relative">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#006039]/20 to-[#E53935]/15 blur-3xl rounded-full scale-90" />

                {/* Phone frame */}
                <div className="relative z-10 w-72 h-[560px] bg-[#111827] rounded-[48px] p-4 shadow-2xl border-4 border-[#222]">
                  <div className="w-full h-full rounded-[36px] overflow-hidden bg-white">
                    {/* App screen mockup */}
                    <div className="h-full flex flex-col">
                      <div className="bg-[#006039] p-4 pt-6">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-[#A7F3D0] text-xs">Good morning,</div>
                            <div className="text-white font-bold font-display">Sunita ☀️</div>
                          </div>
                          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                            <Bell size={16} className="text-white" />
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-2.5 flex items-center gap-2">
                          <Search size={14} className="text-white/70" />
                          <span className="text-white/70 text-xs">Search food, restaurants…</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-[#F8FAFC] p-3 overflow-hidden">
                        <div className="text-xs font-bold text-[#111827] font-display mb-2">Featured Today</div>
                        <div className="rounded-2xl overflow-hidden mb-3 shadow-md">
                          <img
                            src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&h=160&fit=crop&auto=format"
                            alt="Featured restaurant"
                            className="w-full h-28 object-cover"
                          />
                        </div>
                        {[1, 2].map((j) => (
                          <div key={j} className="skeleton h-14 rounded-xl mb-2" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating food emojis */}
                {['🍱', '🥘', '🛵', '⭐'].map((emoji, i) => (
                  <div
                    key={i}
                    className="absolute text-3xl animate-float"
                    style={{
                      top: `${10 + i * 25}%`,
                      right: i % 2 === 0 ? '-20%' : 'auto',
                      left: i % 2 === 1 ? '-20%' : 'auto',
                      animationDelay: `${i * 0.6}s`,
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER ── */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div ref={partnerRef} className="reveal text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] mb-4">
              <span className="text-[#2563EB] text-sm font-semibold">Become a Partner</span>
            </div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#111827] mb-4">
              Grow Your Business with <span className="gradient-text-green">FOODZY</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Restaurant */}
            <div className="card-hover bg-white rounded-3xl p-8 border border-[#E5E7EB] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F0FDF4] to-transparent rounded-bl-full" />
              <div className="w-14 h-14 rounded-2xl bg-[#006039] flex items-center justify-center mb-6">
                <ChefHat size={26} className="text-white" />
              </div>
              <h3 className="font-display font-black text-2xl text-[#111827] mb-3">Restaurant Partner</h3>
              <p className="text-[#6B7280] mb-6">Join 200+ verified restaurants already growing with FOODZY in Tier-3 towns.</p>
              <ul className="space-y-3 mb-8">
                {['Lower commissions (up to 60% less)', 'AI Smart Ranking visibility', 'Analytics & customer insights', 'Marketing campaigns & support', 'Menu management dashboard'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#374151]">
                    <CheckCircle size={16} className="text-[#22C55E] flex-shrink-0" fill="currentColor" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/partner" className="btn-primary w-full justify-center">
                Register Restaurant <ArrowRight size={16} />
              </Link>
            </div>

            {/* Delivery */}
            <div className="card-hover bg-[#006039] rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full" />
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <Truck size={26} className="text-white" />
              </div>
              <h3 className="font-display font-black text-2xl text-white mb-3">Delivery Partner</h3>
              <p className="text-[#A7F3D0] mb-6">Earn flexibly on your schedule. Transparent payouts, no hidden deductions.</p>
              <ul className="space-y-3 mb-8">
                {['Earn ₹15,000–₹25,000/month', 'Flexible working hours', 'Weekly payouts guaranteed', 'Performance bonuses & incentives', 'Dedicated partner support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle size={16} className="text-[#86EFAC] flex-shrink-0" fill="currentColor" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/partner" className="btn-secondary w-full justify-center bg-white">
                Become Delivery Partner <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div ref={testimonialsRef} className="reveal text-center mb-12">
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#111827] mb-4">
              Loved Across <span className="gradient-text-green">Every Town</span>
            </h2>
            <p className="text-[#6B7280] text-lg">Real stories from customers, restaurant owners, and delivery partners.</p>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto gap-6 no-scrollbar scroll-snap-x pb-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="scroll-snap-item flex-shrink-0 w-80 lg:w-96 glass rounded-3xl p-7 border border-white/80 shadow-xl"
                >
                  <Quote size={28} className="text-[#006039]/20 mb-4" fill="currentColor" />
                  <p className="text-[#374151] leading-relaxed mb-6 text-[15px]">{t.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ background: t.avatarBg }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-[#111827] text-sm">{t.name}</div>
                        <div className="text-xs text-[#9CA3AF]">{t.role}</div>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} size={13} fill="#F59E0B" className="text-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <div ref={faqRef} className="reveal text-center mb-14">
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#111827] mb-4">
              Frequently Asked <span className="gradient-text-green">Questions</span>
            </h2>
            <p className="text-[#6B7280] text-lg">Got questions? We have answers.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="font-semibold text-[#111827] pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#6B7280] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? '200px' : '0' }}
                >
                  <div className="px-6 pb-6 text-[#6B7280] leading-relaxed">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#004a2c] via-[#006039] to-[#004a2c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)' }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4">
            Ready to Experience <span className="text-[#86EFAC]">FOODZY?</span>
          </h2>
          <p className="text-[#A7F3D0] text-lg mb-10">Join thousands of happy customers in towns across India.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/download" className="btn-red py-4 px-8 text-base">
              <Smartphone size={18} /> Download the App
            </Link>
            <Link to="/discover" className="btn-secondary py-4 px-8 text-base">
              Browse Restaurants <ArrowRight size={16} />
            </Link>
            <Link to="/partner" className="flex items-center gap-2 px-8 py-4 rounded-[18px] border border-white/30 text-white text-base font-semibold hover:bg-white/10 transition-all">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Fix missing Bell import
function Bell({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}
