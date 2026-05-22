import { useRef, useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const contactInfo = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'lumio.contakt@gmail.com',
    href: 'mailto:lumio.contakt@gmail.com',
    desc: 'Odpisujemy w ciągu 24h',
  },
  {
    icon: <Phone size={22} />,
    label: 'Telefon',
    value: '+48 537 647 071',
    href: 'tel:+48537647071',
    desc: 'Pon–Pt, 9:00–18:00',
  },
  {
    icon: <MapPin size={22} />,
    label: 'Lokalizacja',
    value: 'Polska',
    href: null,
    desc: 'Działamy zdalnie w całym kraju',
  },
]

const services = [
  'Strona wizytówka',
  'Sklep internetowy',
  'Projektowanie logotypu',
  'Google Maps / GMB',
  'Pozycjonowanie lokalne',
  'Inne',
]

export default function Contact() {
  const [headerRef, headerInView] = useInView(0.1)
  const [formRef, formInView] = useInView(0.05)
  const [infoRef, infoInView] = useInView(0.05)

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="fixed top-1/3 right-0 w-96 h-96 rounded-full bg-gold-500/4 blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-64 h-64 rounded-full bg-gold-500/4 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="section-tag mb-4">Kontakt</span>
          <h1 className="font-display font-black text-5xl md:text-6xl mt-4 mb-5">
            Porozmawiajmy<br />
            <span className="gradient-text">o Twoim projekcie</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Napisz do nas lub zadzwoń. Bezpłatna wycena w ciągu 24 godzin – bez zobowiązań.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div
            ref={formRef}
            className={`lg:col-span-3 transition-all duration-700 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {submitted ? (
              <div className="h-full bg-dark-800 border border-gold-500/20 rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <CheckCircle2 size={36} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-3">Wiadomość wysłana!</h3>
                  <p className="text-white/50 leading-relaxed max-w-sm">
                    Dziękujemy za kontakt. Odezwiemy się do Ciebie w ciągu 24 godzin roboczych.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                  className="btn-outline text-sm"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-dark-800 border border-white/5 rounded-2xl p-8 space-y-5"
              >
                <h2 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
                  <MessageSquare size={20} className="text-gold-500" />
                  Wyślij wiadomość
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jan Kowalski"
                      className="w-full bg-dark-700 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold-500/50 focus:bg-dark-600 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jan@firma.pl"
                      className="w-full bg-dark-700 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold-500/50 focus:bg-dark-600 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+48 000 000 000"
                      className="w-full bg-dark-700 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold-500/50 focus:bg-dark-600 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">
                      Interesuje mnie
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-dark-700 border border-white/8 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500/50 focus:bg-dark-600 transition-all duration-200 appearance-none"
                    >
                      <option value="" className="bg-dark-700">Wybierz usługę...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-dark-700">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2 tracking-wide uppercase">
                    Wiadomość *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Opisz swój projekt lub zadaj pytanie..."
                    className="w-full bg-dark-700 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold-500/50 focus:bg-dark-600 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-primary justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Wyślij wiadomość
                    </>
                  )}
                </button>

                <p className="text-white/25 text-xs text-center">
                  Odpowiadamy w ciągu 24 godzin. Bez spamu, bez zobowiązań.
                </p>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div
            ref={infoRef}
            className={`lg:col-span-2 space-y-5 transition-all duration-700 delay-200 ${infoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Contact cards */}
            {contactInfo.map((item, i) => (
              <div key={i} className="card-dark group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-1 tracking-wide uppercase font-medium">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-white hover:text-gold-500 transition-colors text-sm block mb-1"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-white text-sm block mb-1">{item.value}</span>
                    )}
                    <span className="text-white/40 text-xs">{item.desc}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Working hours */}
            <div className="card-dark">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={18} className="text-gold-500" />
                <span className="font-semibold text-sm">Godziny pracy</span>
              </div>
              <div className="space-y-2">
                {[
                  { day: 'Poniedziałek – Piątek', hours: '9:00 – 18:00' },
                  { day: 'Sobota', hours: '10:00 – 14:00' },
                  { day: 'Niedziela', hours: 'Zamknięte' },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between text-sm">
                    <span className="text-white/50">{row.day}</span>
                    <span className={row.hours === 'Zamknięte' ? 'text-white/30' : 'text-gold-500/80'}>{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Promise card */}
            <div className="rounded-2xl bg-gradient-to-br from-gold-500/15 to-gold-600/5 border border-gold-500/25 p-6">
              <h4 className="font-display font-bold text-base mb-3">Nasza obietnica</h4>
              <ul className="space-y-2.5">
                {[
                  'Bezpłatna wycena w 24h',
                  'Bez ukrytych kosztów',
                  'Wsparcie po wdrożeniu',
                  'Gwarancja zadowolenia',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <CheckCircle2 size={14} className="text-gold-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
