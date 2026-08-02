import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Globe, Share2, Link2, CheckCircle } from 'lucide-react'

const contacts = [
  { icon: Phone, label: 'Customer Support', email: 'support@foodzy.in', phone: '+91 98765 43210', hours: 'Mon–Sun: 7am–11pm', color: '#006039', bg: '#F0FDF4' },
  { icon: Mail, label: 'Restaurant Support', email: 'partner@foodzy.in', phone: '+91 98765 43211', hours: 'Mon–Fri: 9am–7pm', color: '#2563EB', bg: '#EFF6FF' },
  { icon: MapPin, label: 'Corporate Office', email: 'hello@foodzy.in', phone: '+91 98765 43212', hours: 'Mon–Fri: 10am–6pm', color: '#7C3AED', bg: '#F5F3FF' },
  { icon: Clock, label: 'Media Enquiries', email: 'media@foodzy.in', phone: '+91 98765 43213', hours: 'Response within 24h', color: '#D97706', bg: '#FEF3C7' },
]

const faqs = [
  { q: 'How do I track my delivery?', a: 'Open the FOODZY app after placing your order. The live tracking screen shows your delivery partner\'s real-time location.' },
  { q: 'My order is late. What should I do?', a: 'Call our 24/7 support line or tap "Help" in the app on your active order. We will resolve it immediately.' },
  { q: 'How can I become a restaurant partner?', a: 'Visit our Partner page and fill out the registration form. Our team will contact you within 24 hours.' },
]

const socials = [
  { icon: Globe, label: 'Instagram', handle: '@foodzy_in', color: '#E1306C' },
  { icon: Share2, label: 'Facebook', handle: 'FOODZY India', color: '#1877F2' },
  { icon: Link2, label: 'LinkedIn', handle: 'FOODZY Technologies', color: '#0A66C2' },
  { icon: Mail, label: 'Email', handle: 'hello@foodzy.in', color: '#006039' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display font-black text-5xl text-[#111827] mb-4">
            We're Here to <span className="gradient-text-green">Help.</span>
          </h1>
          <p className="text-[#6B7280] text-xl">
            Questions, feedback, partnership enquiries — our team is always ready.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contacts.map((c, i) => (
            <div key={i} className="card-hover bg-white rounded-2xl p-6 border border-[#E5E7EB]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: c.bg }}>
                <c.icon size={22} style={{ color: c.color }} />
              </div>
              <h3 className="font-display font-bold text-lg text-[#111827] mb-3">{c.label}</h3>
              <div className="space-y-2 text-sm">
                <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-[#6B7280] hover:text-[#006039] transition-colors">
                  <Mail size={13} />{c.email}
                </a>
                <div className="flex items-center gap-2 text-[#6B7280]">
                  <Phone size={13} />{c.phone}
                </div>
                <div className="flex items-center gap-2 text-[#9CA3AF]">
                  <Clock size={13} />{c.hours}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-display font-black text-3xl text-[#111827] mb-2">Send Us a Message</h2>
            <p className="text-[#6B7280] mb-8">We typically respond within 2–4 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-[#F0FDF4] flex items-center justify-center mb-4">
                  <CheckCircle size={40} className="text-[#22C55E]" fill="currentColor" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#111827] mb-2">Message Sent!</h3>
                <p className="text-[#6B7280]">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2">Name</label>
                    <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#006039] focus:ring-2 focus:ring-[#006039]/10 transition-all placeholder-[#9CA3AF]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2">Phone</label>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#006039] focus:ring-2 focus:ring-[#006039]/10 transition-all placeholder-[#9CA3AF]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-2">Email</label>
                  <input type="email" placeholder="you@email.com" className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#006039] focus:ring-2 focus:ring-[#006039]/10 transition-all placeholder-[#9CA3AF]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#006039] focus:ring-2 focus:ring-[#006039]/10 transition-all bg-white text-[#374151]">
                    <option>Customer Support</option>
                    <option>Restaurant Partnership</option>
                    <option>Delivery Partnership</option>
                    <option>Media Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-2">Message</label>
                  <textarea rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#006039] focus:ring-2 focus:ring-[#006039]/10 transition-all resize-none placeholder-[#9CA3AF]" />
                </div>
                <button onClick={() => setSubmitted(true)} className="btn-primary w-full justify-center py-4">
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* Map placeholder + info */}
          <div>
            <div className="bg-gradient-to-br from-[#F0FDF4] to-[#ECFDF5] rounded-3xl overflow-hidden h-72 mb-8 flex items-center justify-center border border-[#BBF7D0]">
              <div className="text-center">
                <MapPin size={48} className="text-[#006039] mx-auto mb-3" />
                <div className="font-display font-bold text-[#111827]">Corporate Office</div>
                <div className="text-[#6B7280] text-sm mt-1">Jhansi, Uttar Pradesh, India</div>
              </div>
            </div>

            {/* Social */}
            <h3 className="font-display font-bold text-xl text-[#111827] mb-4">Follow FOODZY</h3>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {socials.map((s, i) => (
                <a key={i} href="#" className="flex items-center gap-3 p-3 rounded-xl border border-[#E5E7EB] hover:border-[#006039]/30 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: s.color + '15' }}>
                    <s.icon size={18} style={{ color: s.color }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#111827]">{s.label}</div>
                    <div className="text-xs text-[#9CA3AF]">{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* FAQ */}
            <h3 className="font-display font-bold text-xl text-[#111827] mb-4">Quick Answers</h3>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-4 py-3 text-sm font-semibold text-[#111827] hover:bg-[#F0FDF4] transition-colors">
                    {faq.q}
                  </button>
                  {openFaq === i && <div className="px-4 pb-3 text-sm text-[#6B7280]">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
