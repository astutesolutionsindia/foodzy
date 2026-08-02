import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, ChefHat, Truck, ShoppingBasket, BarChart3, Star, Shield } from 'lucide-react'

const restaurantBenefits = [
  'Lower commissions (up to 60% less than competitors)',
  'AI Smart Ranking for better visibility',
  'Real-time analytics and customer insights',
  'Dedicated marketing campaigns',
  'Menu management dashboard',
  'Verified partner badge',
  'Dedicated local support team',
]

const deliveryBenefits = [
  'Earn ₹15,000–₹25,000 per month',
  'Flexible working hours — your schedule',
  'Weekly payouts, guaranteed on time',
  'Performance bonuses and incentives',
  'Free safety training and support',
  'Transparent earnings history',
]

const steps = [
  { step: '01', title: 'Apply Online', desc: 'Fill out our simple partner application form in under 5 minutes.' },
  { step: '02', title: 'Document Verification', desc: 'Our local team verifies your business documents within 48 hours.' },
  { step: '03', title: 'Menu Setup', desc: 'We help you set up your complete menu with photos and pricing.' },
  { step: '04', title: 'Staff Training', desc: 'Quick training session on the FOODZY restaurant dashboard.' },
  { step: '05', title: 'Go Live!', desc: 'Your restaurant goes live to thousands of hungry customers in your town.' },
  { step: '06', title: 'Grow with FOODZY', desc: 'Get AI insights, marketing support, and analytics to grow your business.' },
]

const successStories = [
  { name: "Razia's Kitchen", owner: 'Razia Begum', location: 'Jhansi', growth: '+340%', metric: 'revenue in 6 months', quote: "FOODZY gave my family restaurant a digital presence. The commission is fair and payments arrive on time every week.", avatar: 'RB', bg: '#006039' },
  { name: 'Lakshmi Home Foods', owner: 'Lakshmi Devi', location: 'Banda', growth: '+180%', metric: 'new customers monthly', quote: "I was a home cook serving 10 families. Now I serve 200+ customers through FOODZY. My income tripled!", avatar: 'LD', bg: '#7C3AED' },
]

const trustBadges = [
  { icon: Shield, label: 'Verified Partner Network', color: '#2563EB' },
  { icon: BarChart3, label: 'Transparent Pricing', color: '#006039' },
  { icon: Star, label: 'AI-Powered Visibility', color: '#D97706' },
  { icon: CheckCircle, label: 'Local Business First', color: '#22C55E' },
]

export default function Partner() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F0FDF4] to-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006039]/10 border border-[#006039]/20 mb-6">
            <span className="text-[#006039] text-sm font-semibold">Partner With FOODZY</span>
          </div>
          <h1 className="font-display font-black text-5xl lg:text-6xl text-[#111827] mb-6 leading-tight">
            Grow Your Business with <span className="gradient-text-green">FOODZY</span>
          </h1>
          <p className="text-[#6B7280] text-xl max-w-2xl mx-auto">
            Join hundreds of local restaurants, home chefs, and stores already thriving
            in Tier-3 towns with FOODZY's platform.
          </p>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Restaurant */}
            <div className="card-hover bg-white rounded-3xl p-8 border border-[#E5E7EB] relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#006039] flex items-center justify-center mb-6">
                <ChefHat size={26} className="text-white" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#F0FDF4] text-[#006039] text-xs font-bold mb-4">Restaurants & Dhabas</div>
              <h3 className="font-display font-black text-2xl text-[#111827] mb-3">Restaurant Partner</h3>
              <p className="text-[#6B7280] mb-6 text-sm">Get your restaurant discovered by thousands of customers in your town.</p>
              <ul className="space-y-2.5 mb-8">
                {restaurantBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <CheckCircle size={15} className="text-[#22C55E] flex-shrink-0 mt-0.5" fill="currentColor" />
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#apply" className="btn-primary w-full justify-center">Register Restaurant <ArrowRight size={15} /></a>
            </div>

            {/* Delivery */}
            <div className="card-hover bg-[#006039] rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full" />
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <Truck size={26} className="text-white" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold mb-4">Delivery Partners</div>
              <h3 className="font-display font-black text-2xl text-white mb-3">Delivery Partner</h3>
              <p className="text-[#A7F3D0] mb-6 text-sm">Earn on your own schedule. Transparent payouts, no hidden deductions.</p>
              <ul className="space-y-2.5 mb-8">
                {deliveryBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white">
                    <CheckCircle size={15} className="text-[#86EFAC] flex-shrink-0 mt-0.5" fill="currentColor" />
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#apply" className="btn-secondary bg-white w-full justify-center">Become Delivery Partner <ArrowRight size={15} /></a>
            </div>

            {/* Home Chef / Grocery */}
            <div className="card-hover bg-white rounded-3xl p-8 border border-[#E5E7EB]">
              <div className="w-14 h-14 rounded-2xl bg-[#FEF3C7] flex items-center justify-center mb-6">
                <ShoppingBasket size={26} className="text-[#D97706]" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#FEF3C7] text-[#D97706] text-xs font-bold mb-4">Home Chefs & Stores</div>
              <h3 className="font-display font-black text-2xl text-[#111827] mb-3">Home Chef / Store</h3>
              <p className="text-[#6B7280] mb-6 text-sm">Run a home kitchen? Grocery store? Bakery? Join FOODZY and reach your neighborhood.</p>
              <ul className="space-y-2.5 mb-8">
                {['Simple onboarding in 24 hours', 'Reach customers nearby instantly', 'Flexible menu and timing', 'Verified home chef badge', 'Premium branding and profile', 'Dedicated growth support'].map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <CheckCircle size={15} className="text-[#D97706] flex-shrink-0 mt-0.5" fill="currentColor" />
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#apply" className="btn-primary w-full justify-center" style={{ background: '#D97706' }}>Apply as Home Chef <ArrowRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-[#111827] mb-4">
              From Application to <span className="gradient-text-green">Going Live in 48 Hours</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative p-6 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] hover:border-[#006039]/30 hover:shadow-lg transition-all">
                <div className="font-display font-black text-5xl text-[#006039]/10 mb-2">{s.step}</div>
                <h3 className="font-display font-bold text-lg text-[#111827] mb-2">{s.title}</h3>
                <p className="text-[#6B7280] text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-[#111827] mb-4">
              Partner <span className="gradient-text-green">Success Stories</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((s, i) => (
              <div key={i} className="card-hover bg-white rounded-3xl p-8 border border-[#E5E7EB]">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0 font-display" style={{ background: s.bg }}>
                    {s.avatar}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#111827]">{s.name}</h3>
                    <p className="text-sm text-[#6B7280]">{s.owner} · {s.location}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-black text-2xl text-[#006039] font-display">{s.growth}</span>
                      <span className="text-sm text-[#6B7280]">{s.metric}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#374151] italic">"{s.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: b.color + '15' }}>
                  <b.icon size={22} style={{ color: b.color }} />
                </div>
                <span className="text-sm font-semibold text-[#374151]">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-4xl text-[#111827] mb-4">Start Your Application</h2>
            <p className="text-[#6B7280]">Takes less than 5 minutes. Our team will call you within 24 hours.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-xl">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {[
                { label: 'Full Name', placeholder: 'Your name', type: 'text' },
                { label: 'Phone Number', placeholder: '+91 98765 43210', type: 'tel' },
                { label: 'Business Name', placeholder: 'Restaurant / Store name', type: 'text' },
                { label: 'Town / City', placeholder: 'Jhansi, UP', type: 'text' },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-semibold text-[#374151] mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#111827] placeholder-[#9CA3AF] focus:border-[#006039] focus:ring-2 focus:ring-[#006039]/10 transition-all"
                  />
                </div>
              ))}
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold text-[#374151] mb-2">Partner Type</label>
              <select className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#111827] focus:border-[#006039] focus:ring-2 focus:ring-[#006039]/10 transition-all bg-white">
                <option>Restaurant Partner</option>
                <option>Delivery Partner</option>
                <option>Home Chef</option>
                <option>Grocery Store</option>
                <option>Pharmacy</option>
                <option>Bakery</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#374151] mb-2">Message (optional)</label>
              <textarea
                rows={3}
                placeholder="Tell us about your business…"
                className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#111827] placeholder-[#9CA3AF] focus:border-[#006039] focus:ring-2 focus:ring-[#006039]/10 transition-all resize-none"
              />
            </div>
            <button className="btn-primary w-full justify-center py-4 text-base">
              Submit Application <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
