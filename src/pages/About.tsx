import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.12 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const timeline = [
  { year: '2023', title: 'The Idea', desc: "Two friends from Jhansi asked: why can't Tier-3 India get the same great delivery experience as metros?" },
  { year: 'Jan 2024', title: 'First Restaurant', desc: 'Partnered with 5 local restaurants in Jhansi. First delivery completed in 22 minutes.' },
  { year: 'Mar 2024', title: 'First 100 Customers', desc: 'Word spread fast. 100 happy customers in our first town within 60 days.' },
  { year: 'Jun 2024', title: '10 Towns', desc: 'Expanded to 10 tehsil towns across Bundelkhand region. 50+ restaurant partners.' },
  { year: 'Oct 2024', title: '1,000 Deliveries/Day', desc: 'Hit our first major milestone. 1,000 deliveries per day across multiple towns.' },
  { year: '2025', title: 'Expanding India', desc: 'Now in 50+ towns. Building India\'s first premium Tier-3 food ecosystem.' },
]

const values = [
  { icon: '🏘️', title: 'Community First', desc: 'Every decision we make asks: does this help local businesses and residents?' },
  { icon: '🤝', title: 'Trust', desc: 'We verify every partner. Your safety and satisfaction is non-negotiable.' },
  { icon: '💡', title: 'Innovation', desc: 'We bring world-class technology to places that have been overlooked for too long.' },
  { icon: '💚', title: 'Local First', desc: 'We champion local restaurants, home chefs, and small businesses over chains.' },
  { icon: '📊', title: 'Transparency', desc: 'No hidden commissions. No surprises. What you see is exactly what you get.' },
  { icon: '⚡', title: 'Reliability', desc: 'Fast, consistent, dependable. We show up every single day for our communities.' },
]

const team = [
  { name: 'Arun Sharma', role: 'Co-Founder & CEO', location: 'Jhansi', initials: 'AS', bg: '#006039' },
  { name: 'Priya Verma', role: 'Co-Founder & CTO', location: 'Bangalore', initials: 'PV', bg: '#2563EB' },
  { name: 'Rajesh Kumar', role: 'Head of Operations', location: 'Lucknow', initials: 'RK', bg: '#7C3AED' },
  { name: 'Sunita Gupta', role: 'Head of Partnerships', location: 'Jhansi', initials: 'SG', bg: '#E53935' },
]

export default function About() {
  const heroRef = useReveal()
  const missionRef = useReveal()
  const valuesRef = useReveal()
  const teamRef = useReveal()

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#004a2c] via-[#006039] to-[#007a49] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)' }}
        />
        <div className="max-w-4xl mx-auto text-center relative" ref={heroRef}>
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 mb-6">
              <span className="text-white text-sm font-semibold">Our Story</span>
            </div>
            <h1 className="font-display font-black text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Built for Every Town <span className="text-[#86EFAC]">That Matters.</span>
            </h1>
            <p className="text-[#A7F3D0] text-xl max-w-2xl mx-auto">
              We started FOODZY because we believed every town in India deserves
              world-class food delivery — not just the metros.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={missionRef} className="reveal grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] mb-5">
                <span className="text-[#006039] text-sm font-semibold">Our Mission</span>
              </div>
              <h2 className="font-display font-black text-4xl text-[#111827] mb-6 leading-tight">
                Empowering Local Businesses. <span className="gradient-text-green">Connecting Communities.</span>
              </h2>
              <div className="space-y-4">
                {[
                  'Empower local restaurants, home chefs and stores',
                  'Support Small Town India with world-class technology',
                  'Deliver Happiness to every door in every town',
                  'Create meaningful employment for delivery partners',
                  'Promote technology adoption in Tier-3 markets',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#22C55E] flex-shrink-0 mt-0.5" fill="currentColor" />
                    <span className="text-[#374151]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#006039] rounded-3xl p-8 text-white mb-6">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="font-display font-bold text-2xl mb-3">Our Vision</h3>
                <p className="text-[#A7F3D0] leading-relaxed">
                  Become India's largest Tier-3 local commerce platform — connecting
                  50,000+ local businesses with 10 million customers across 5,000 towns
                  by 2030.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '200+', label: 'Restaurants' },
                  { value: '50+', label: 'Towns Covered' },
                  { value: '25K+', label: 'Customers' },
                  { value: '500+', label: 'Delivery Partners' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-[#E5E7EB] text-center">
                    <div className="font-display font-black text-3xl text-[#006039] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#6B7280]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-[#111827] mb-4">
              Our <span className="gradient-text-green">Journey</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#E5E7EB]" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#006039] border-4 border-[#F8FAFC] flex items-center justify-center z-10 relative">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex-1 hover:border-[#006039]/30 hover:shadow-lg transition-all">
                    <div className="text-xs font-bold text-[#006039] mb-1">{item.year}</div>
                    <h3 className="font-display font-bold text-lg text-[#111827] mb-2">{item.title}</h3>
                    <p className="text-[#6B7280] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div ref={valuesRef} className="reveal text-center mb-14">
            <h2 className="font-display font-black text-4xl text-[#111827] mb-4">
              What We <span className="gradient-text-green">Stand For</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-xl text-[#111827] mb-2">{v.title}</h3>
                <p className="text-[#6B7280] text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={teamRef} className="reveal text-center mb-14">
            <h2 className="font-display font-black text-4xl text-[#111827] mb-4">
              The <span className="gradient-text-green">Team</span>
            </h2>
            <p className="text-[#6B7280] text-lg">Built by people who care deeply about India's Tier-3 communities.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="card-hover bg-white rounded-3xl p-6 border border-[#E5E7EB] text-center glass">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 font-display"
                  style={{ background: member.bg }}
                >
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-lg text-[#111827]">{member.name}</h3>
                <p className="text-sm text-[#006039] font-semibold mt-1">{member.role}</p>
                <p className="text-xs text-[#9CA3AF] mt-1">📍 {member.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#006039]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl text-white mb-4">Join the FOODZY Revolution</h2>
          <p className="text-[#A7F3D0] mb-8">Be part of India's most exciting food story in Tier-3 towns.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/download" className="btn-red py-4 px-8">Download App <ArrowRight size={16} /></Link>
            <Link to="/partner" className="btn-secondary py-4 px-8 bg-white">Become a Partner</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
