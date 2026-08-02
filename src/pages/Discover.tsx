import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, SlidersHorizontal, Star, Clock, Heart, CheckCircle, Mic, ChevronDown, X } from 'lucide-react'

const filters = ['All', 'Veg', 'Non-Veg', 'Fast Delivery', 'Open Now', 'Offers', 'Home Chef', 'Verified', 'Bakery', 'Pharmacy', 'Pickup', 'Grocery']

const aiBadges: Record<string, { label: string; color: string }> = {
  recommended: { label: '⭐ AI Recommended', color: '#006039' },
  trending: { label: '🔥 Trending', color: '#E53935' },
  family: { label: '❤️ Loved by Families', color: '#DB2777' },
  fast: { label: '⚡ Fast Delivery', color: '#2563EB' },
  value: { label: '🏆 Best Value', color: '#D97706' },
  healthy: { label: '🥗 Healthy Choice', color: '#059669' },
  local: { label: '🥘 Local Favourite', color: '#7C3AED' },
}

const allRestaurants = [
  { name: "Razia's Kitchen", cuisine: 'Mughlai · Biryani', rating: 4.8, reviews: 342, time: '28-35 min', distance: '1.2 km', badge: 'recommended', img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&h=350&fit=crop&auto=format', tag: 'Pure Veg', open: true, verified: true },
  { name: 'Shree Ganesh Dhaba', cuisine: 'North Indian · Thali', rating: 4.6, reviews: 218, time: '20-30 min', distance: '0.8 km', badge: 'trending', img: 'https://images.unsplash.com/photo-1630851840633-f96999247032?w=500&h=350&fit=crop&auto=format', tag: 'Veg', open: true, verified: true },
  { name: 'Café Nakshatra', cuisine: 'Bakery · Coffee · Snacks', rating: 4.9, reviews: 189, time: '15-25 min', distance: '0.5 km', badge: 'family', img: 'https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=500&h=350&fit=crop&auto=format', tag: 'Non-Veg', open: true, verified: true },
  { name: 'Meera Sweets & Chaat', cuisine: 'Street Food · Sweets', rating: 4.5, reviews: 412, time: '18-28 min', distance: '2.1 km', badge: 'local', img: 'https://images.unsplash.com/photo-1728745118618-941ec839208f?w=500&h=350&fit=crop&auto=format', tag: 'Veg', open: true, verified: true },
  { name: "Lakshmi's Home Kitchen", cuisine: 'Home Chef · South Indian', rating: 4.7, reviews: 98, time: '35-45 min', distance: '1.8 km', badge: 'healthy', img: 'https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0?w=500&h=350&fit=crop&auto=format', tag: 'Pure Veg', open: false, verified: true },
  { name: 'Bundelkhand Grill House', cuisine: 'BBQ · Kebabs · Biryani', rating: 4.4, reviews: 156, time: '30-40 min', distance: '3.2 km', badge: 'value', img: 'https://images.unsplash.com/photo-1714611626323-5ba6204453be?w=500&h=350&fit=crop&auto=format', tag: 'Non-Veg', open: true, verified: false },
]

const collections = [
  { name: 'Best Biryani', emoji: '🍚', count: 12, color: '#FEF3C7' },
  { name: 'Late Night', emoji: '🌙', count: 8, color: '#EFF6FF' },
  { name: 'Family Meals', emoji: '👨‍👩‍👧', count: 15, color: '#F0FDF4' },
  { name: 'Budget Friendly', emoji: '💰', count: 20, color: '#FDF2F8' },
  { name: 'Home Chefs', emoji: '👩‍🍳', count: 7, color: '#FFF7ED' },
  { name: 'Healthy Choice', emoji: '🥗', count: 9, color: '#ECFDF5' },
]

export default function Discover() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [favs, setFavs] = useState<Set<number>>(new Set())
  const [search, setSearch] = useState('')

  const toggleFav = (i: number) => {
    setFavs((prev) => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n })
  }

  const filtered = allRestaurants.filter((r) =>
    search === '' || r.name.toLowerCase().includes(search.toLowerCase()) || r.cuisine.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F0FDF4] to-[#F8FAFC] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-black text-4xl lg:text-5xl text-[#111827] mb-4">
            Discover Amazing Food <span className="gradient-text-green">Around You</span>
          </h1>
          <p className="text-[#6B7280] text-lg mb-8">
            Explore verified local restaurants, home chefs and grocery stores in your town.
          </p>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-6 group">
            <div className="flex items-center bg-white rounded-full shadow-xl border border-[#E5E7EB] overflow-hidden group-focus-within:border-[#006039]/50 transition-all">
              <div className="pl-5 pr-3"><Search size={20} className="text-[#9CA3AF]" /></div>
              <input
                type="text"
                className="flex-1 py-4 text-[#111827] placeholder-[#9CA3AF] bg-transparent focus:outline-none"
                placeholder="Search restaurants, food, cuisine…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="flex items-center gap-2 pr-4">
                <button className="p-2 rounded-full hover:bg-[#F3F4F6] transition-colors">
                  <Mic size={18} className="text-[#9CA3AF]" />
                </button>
                <button className="p-2 rounded-full hover:bg-[#F3F4F6] transition-colors">
                  <SlidersHorizontal size={18} className="text-[#9CA3AF]" />
                </button>
                <div className="flex items-center gap-1 px-3 py-2 bg-[#F0FDF4] rounded-full text-sm text-[#006039] font-medium">
                  <MapPin size={13} />
                  <span>My Town</span>
                  <ChevronDown size={13} />
                </div>
              </div>
            </div>
          </div>

          {/* Trending searches */}
          <div className="flex flex-wrap justify-center gap-2">
            {['Pizza', 'Momos', 'Burger', 'Biryani', 'Chinese', 'South Indian', 'Bakery', 'Tea'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearch(tag)}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-[#E5E7EB] text-[#374151] hover:border-[#006039] hover:text-[#006039] transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Filter chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f
                  ? 'bg-[#006039] text-white shadow-md'
                  : 'bg-white border border-[#E5E7EB] text-[#374151] hover:border-[#006039] hover:text-[#006039]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Collections */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-2xl text-[#111827] mb-5">Featured Collections</h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {collections.map((col, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 p-5 rounded-2xl cursor-pointer border border-[#E5E7EB] hover:border-[#006039]/30 hover:-translate-y-1 hover:shadow-lg transition-all"
                style={{ background: col.color }}
              >
                <div className="text-4xl mb-2">{col.emoji}</div>
                <div className="font-bold text-sm text-[#111827] font-display">{col.name}</div>
                <div className="text-xs text-[#6B7280] mt-1">{col.count} places</div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurant grid */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display font-bold text-2xl text-[#111827]">
            {search ? `Results for "${search}"` : 'All Restaurants'}{' '}
            <span className="text-[#9CA3AF] font-normal text-lg">({filtered.length})</span>
          </h2>
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <span>Sort by:</span>
            <button className="flex items-center gap-1 font-medium text-[#006039]">
              Relevance <ChevronDown size={14} />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, i) => {
            const badge = aiBadges[r.badge]
            return (
              <div key={i} className="card-hover bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: badge.color }}
                  >
                    {badge.label}
                  </div>
                  <button
                    onClick={() => toggleFav(i)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Heart size={16} className={favs.has(i) ? 'text-[#E53935] fill-[#E53935]' : 'text-white'} />
                  </button>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div
                      className="px-2 py-0.5 rounded-full text-xs font-bold text-white"
                      style={{ background: r.tag === 'Non-Veg' ? '#E53935' : '#22C55E' }}
                    >
                      {r.tag}
                    </div>
                    {!r.open && (
                      <div className="px-2 py-0.5 rounded-full text-xs font-bold text-white bg-black/60">
                        Closed
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-[17px] text-[#111827]">{r.name}</h3>
                        {r.verified && (
                          <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#EFF6FF]">
                            <CheckCircle size={10} className="text-[#2563EB]" fill="currentColor" />
                            <span className="text-[9px] font-bold text-[#2563EB]">Verified</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-[#6B7280] mt-0.5">{r.cuisine}</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-xl bg-[#F0FDF4]">
                      <Star size={12} fill="#22C55E" className="text-[#22C55E]" />
                      <span className="text-sm font-bold text-[#111827]">{r.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-xs text-[#9CA3AF]">
                    <div className="flex items-center gap-1"><Clock size={11} /><span>{r.time}</span></div>
                    <div className="flex items-center gap-1"><MapPin size={11} /><span>{r.distance}</span></div>
                    <span>{r.reviews} reviews</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Link to="/download" className="flex-1 btn-primary py-2.5 text-sm justify-center">Browse Menu</Link>
                    <Link to="/download" className="px-4 py-2.5 rounded-[14px] border border-[#E5E7EB] text-sm font-medium text-[#6B7280] hover:border-[#006039] hover:text-[#006039] transition-colors">
                      Order →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-gradient-to-r from-[#006039] to-[#007a49] rounded-3xl p-10 text-center">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="font-display font-black text-2xl text-white mb-3">Love what you see?</h3>
          <p className="text-[#A7F3D0] mb-6">Download FOODZY App to order in seconds. Real-time tracking, secure payments, exclusive deals.</p>
          <Link to="/download" className="btn-red py-3 px-8 inline-flex">
            Download FOODZY App
          </Link>
        </div>
      </div>
    </div>
  )
}
