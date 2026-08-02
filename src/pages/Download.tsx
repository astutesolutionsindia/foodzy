import { Link } from 'react-router-dom'
import { Smartphone, Apple, Play, Zap, Shield, Truck, Award, Star, Users, MapPin, Heart } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Fast Ordering', desc: 'Order your favourite food in just 3 taps. Checkout takes under 30 seconds.', color: '#D97706', bg: '#FEF3C7' },
  { icon: Shield, title: 'Secure Payments', desc: 'UPI, cards, net banking, and FOODZY Wallet. All transactions secured by 256-bit encryption.', color: '#2563EB', bg: '#EFF6FF' },
  { icon: Truck, title: 'Live Tracking', desc: 'Watch your delivery on a live map. Know exactly when your food arrives.', color: '#006039', bg: '#F0FDF4' },
  { icon: Award, title: 'Exclusive Offers', desc: 'App-only deals, festival offers, and daily discounts available only to app users.', color: '#E53935', bg: '#FEF2F2' },
  { icon: Heart, title: 'Referral Rewards', desc: 'Refer friends and earn FOODZY credits. Share the love and save on every order.', color: '#DB2777', bg: '#FDF2F8' },
  { icon: Star, title: 'AI Recommendations', desc: 'The app learns your taste and suggests restaurants and dishes you will love.', color: '#7C3AED', bg: '#F5F3FF' },
  { icon: Users, title: 'Multiple Languages', desc: 'Available in Hindi, English and regional languages for every user in every town.', color: '#0891B2', bg: '#F0FDFE' },
  { icon: MapPin, title: 'Multiple Addresses', desc: 'Save home, office, and other addresses for quick delivery to any location.', color: '#059669', bg: '#ECFDF5' },
]

const stats = [
  { value: '25,000+', label: 'App Downloads', icon: '📱' },
  { value: '50,000+', label: 'Orders Delivered', icon: '🛵' },
  { value: '200+', label: 'Restaurants', icon: '🍽️' },
  { value: '50+', label: 'Towns & Cities', icon: '🏘️' },
]

const reviews = [
  { name: 'Ananya S.', rating: 5, text: 'Best food app for our town! Finally we have proper delivery.', location: 'Jhansi' },
  { name: 'Vikram P.', rating: 5, text: 'Super fast delivery and the UPI payment is seamless. Love it!', location: 'Banda' },
  { name: 'Meena K.', rating: 5, text: 'The live tracking is amazing. I know exactly when food arrives.', location: 'Sagar' },
]

export default function Download() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#004a2c] via-[#006039] to-[#007a49] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(229,57,53,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 40%)' }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 mb-6">
                <Smartphone size={14} className="text-[#86EFAC]" />
                <span className="text-white text-sm font-semibold">Download FOODZY App</span>
              </div>
              <h1 className="font-display font-black text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Your Favourite Food is Just One{' '}
                <span className="text-[#86EFAC]">Tap Away.</span>
              </h1>
              <p className="text-[#A7F3D0] text-xl mb-10">
                Order from 200+ restaurants, track your delivery live, and enjoy exclusive
                app-only offers — all designed for India's Tier-3 towns.
              </p>

              {/* Store buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#" className="flex items-center gap-3 bg-white text-[#111827] px-6 py-4 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all">
                  <Apple size={24} />
                  <div>
                    <div className="text-[10px] text-[#6B7280]">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-white text-[#111827] px-6 py-4 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all">
                  <Play size={24} fill="currentColor" />
                  <div>
                    <div className="text-[10px] text-[#6B7280]">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </a>
              </div>

              {/* SMS option */}
              <div className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl border border-white/20 max-w-sm">
                <Smartphone size={20} className="text-[#86EFAC]" />
                <div className="flex-1">
                  <div className="text-sm text-white font-medium">Get download link via SMS</div>
                  <div className="text-xs text-[#A7F3D0]">Enter your number below</div>
                </div>
              </div>
              <div className="flex gap-3 mt-3 max-w-sm">
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/15 border border-white/25 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm"
                />
                <button className="px-5 py-3 bg-[#E53935] text-white rounded-xl font-semibold text-sm hover:bg-[#ef5350] transition-colors">
                  Send
                </button>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-90" />
                <div className="relative z-10 w-72 h-[560px] bg-[#111827] rounded-[48px] p-4 shadow-2xl border-4 border-[#222]">
                  <div className="w-full h-full rounded-[36px] overflow-hidden bg-white flex flex-col">
                    <div className="bg-[#006039] p-5 pt-8">
                      <div className="text-white font-display font-black text-xl mb-1">FOODZY</div>
                      <div className="text-[#A7F3D0] text-xs mb-3">India's Local Food Platform</div>
                      <div className="bg-white/20 rounded-xl p-2.5 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        </svg>
                        <span className="text-white/60 text-xs">Find food near you…</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#F8FAFC] p-3">
                      <div className="text-xs font-bold text-[#111827] font-display mb-2">Today's Offers 🔥</div>
                      <div className="bg-gradient-to-r from-[#E53935] to-[#F59E0B] rounded-2xl p-3 mb-3 text-white">
                        <div className="text-xs font-bold">50% OFF on first order!</div>
                        <div className="text-[10px] opacity-80 mt-0.5">Use code: FOODZY50</div>
                      </div>
                      <div className="text-xs font-bold text-[#111827] font-display mb-2">Near You</div>
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="skeleton h-12 rounded-xl mb-2" />
                      ))}
                    </div>
                    <div className="bg-white border-t border-[#E5E7EB] p-3 flex justify-around">
                      {['🏠', '🔍', '📦', '👤'].map((icon, k) => (
                        <div key={k} className="flex flex-col items-center gap-1">
                          <span className="text-lg">{icon}</span>
                          <div className={`w-1 h-1 rounded-full ${k === 0 ? 'bg-[#006039]' : 'bg-transparent'}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                {['🍱', '⭐', '🛵', '💫'].map((e, i) => (
                  <div key={i} className="absolute text-3xl animate-float" style={{ top: `${15 + i * 22}%`, right: i % 2 === 0 ? '-18%' : 'auto', left: i % 2 === 1 ? '-18%' : 'auto', animationDelay: `${i * 0.5}s` }}>{e}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-6 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-display font-black text-3xl text-[#006039]">{s.value}</div>
              <div className="text-sm text-[#6B7280] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-[#111827] mb-4">
              Everything You Need, <span className="gradient-text-green">In One App</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: f.bg }}>
                  <f.icon size={22} style={{ color: f.color }} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#111827] mb-2">{f.title}</h3>
                <p className="text-[#6B7280] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-4xl text-[#111827] mb-4">
              Rated <span className="gradient-text-green">4.8 ★</span> by Thousands
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {reviews.map((r, i) => (
              <div key={i} className="glass rounded-2xl p-6 border border-white/80 shadow-lg">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} size={14} fill="#F59E0B" className="text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#374151] text-sm mb-4">"{r.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#006039] flex items-center justify-center text-white text-xs font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#111827]">{r.name}</div>
                    <div className="text-xs text-[#9CA3AF]">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-6 p-10 bg-gradient-to-br from-[#006039] to-[#007a49] rounded-3xl shadow-2xl">
              <div className="text-white font-display font-black text-2xl">Download FOODZY Now</div>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl font-semibold text-sm hover:-translate-y-1 transition-all">
                  <Apple size={18} /> App Store
                </a>
                <a href="#" className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl font-semibold text-sm hover:-translate-y-1 transition-all">
                  <Play size={18} fill="currentColor" /> Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
