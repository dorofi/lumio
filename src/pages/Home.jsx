import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
  Globe, Palette, MapPin, ArrowRight, Sparkles,
  Code2, Star, CheckCircle2, Zap, TrendingUp, Shield
} from 'lucide-react'

function useInView(threshold = 0.15) {
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

const services = [
  {
    icon: <Globe size={26} />,
    title: 'Strony Wizytówki',
    desc: 'Profesjonalne strony internetowe, które prezentują Twoją firmę w najlepszym świetle. Szybkie, responsywne i gotowe na każde urządzenie.',
    features: ['Responsywny design', 'Szybkie ładowanie', 'SEO-friendly'],
  },
  {
    icon: <Palette size={26} />,
    title: 'Projektowanie Logotypów',
    desc: 'Unikalny identyfikator wizualny Twojej marki. Tworzymy logotypy, które wyróżniają się na tle konkurencji i budują rozpoznawalność.',
    features: ['Oryginalny projekt', 'Pełny pakiet plików', 'Identyfikacja wizualna'],
  },
  {
    icon: <MapPin size={26} />,
    title: 'Google Maps & Local SEO',
    desc: 'Konfiguracja Google Moja Firma, optymalizacja profilu i pozycjonowanie lokalne – by klienci łatwo Cię znaleźli w Twojej okolicy.',
    features: ['Google Moja Firma', 'Recenzje i opinie', 'Widoczność lokalna'],
  },
  {
    icon: <Code2 size={26} />,
    title: 'Strony na Zamówienie',
    desc: 'Dedykowane rozwiązania webowe dopasowane do specyficznych potrzeb Twojego biznesu. Od prostej wizytówki po rozbudowany serwis.',
    features: ['Indywidualny projekt', 'CMS i zarządzanie', 'Wsparcie techniczne'],
  },
]

const stats = [
  { value: '50+', label: 'Zrealizowanych projektów' },
  { value: '98%', label: 'Zadowolonych klientów' },
  { value: '3 dni', label: 'Średni czas realizacji' },
  { value: '24/7', label: 'Wsparcie i pomoc' },
]

const whyUs = [
  { icon: <Zap size={20} />, title: 'Szybka realizacja', desc: 'Twoja strona gotowa w ciągu kilku dni roboczych.' },
  { icon: <Star size={20} />, title: 'Wysoka jakość', desc: 'Dbamy o każdy detal – od kodu po finalny wygląd.' },
  { icon: <TrendingUp size={20} />, title: 'Wzrost widoczności', desc: 'Strony zoptymalizowane pod SEO i Google Maps.' },
  { icon: <Shield size={20} />, title: 'Bezpieczeństwo', desc: 'Bezpieczne strony z certyfikatem SSL i backupem.' },
]

export default function Home() {
  const [heroRef, heroInView] = useInView(0.1)
  const [servicesRef, servicesInView] = useInView(0.1)
  const [statsRef, statsInView] = useInView(0.2)
  const [whyRef, whyInView] = useInView(0.1)

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 noise-bg pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />

        {/* Floating orbs */}
        <div className="absolute top-32 right-24 w-4 h-4 rounded-full bg-gold-500/60 blur-sm animate-float" />
        <div className="absolute bottom-40 left-20 w-3 h-3 rounded-full bg-gold-500/40 blur-sm animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-16 w-2 h-2 rounded-full bg-gold-400/50 animate-float" style={{ animationDelay: '4s' }} />

        <div
          ref={heroRef}
          className={`max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-semibold tracking-widest uppercase mb-8">
            <Sparkles size={12} />
            Agencja cyfrowa · Polska
          </div>

          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
            <span className="text-white">Twoja firma</span>
            <br />
            <span className="gradient-text text-shadow-gold">w sieci</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Tworzymy strony internetowe, logotypy i konfigurujemy Google Maps dla polskich firm.
            Profesjonalna obecność online — szybko, estetycznie i efektywnie.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/kontakt" className="btn-primary text-base">
              Zacznijmy współpracę
              <ArrowRight size={18} />
            </Link>
            <Link to="/projekty" className="btn-outline text-base">
              Zobacz projekty
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-16 text-sm text-white/40">
            {['Szybka realizacja', 'Ceny bez niespodzianek', 'Wsparcie po wdrożeniu'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold-500/70" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-500/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5 bg-dark-800/50">
        <div
          ref={statsRef}
          className={`max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display font-black text-4xl md:text-5xl gradient-text mb-2">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Nasze usługi</span>
            <h2 className="font-display font-black text-4xl md:text-5xl mt-4 mb-4">
              Co możemy<br />
              <span className="gradient-text">dla Ciebie zrobić?</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Oferujemy kompletny pakiet usług cyfrowych – od projektu wizualnego po wdrożenie i pozycjonowanie.
            </p>
          </div>

          <div
            ref={servicesRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="group card-dark hover:shadow-[0_0_40px_rgba(244,185,66,0.08)] cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-500 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle2 size={14} className="text-gold-500/80 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 px-6 bg-dark-800/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              ref={whyRef}
              className={`transition-all duration-700 ${whyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              <span className="section-tag mb-4">Dlaczego LUMIO?</span>
              <h2 className="font-display font-black text-4xl md:text-5xl mt-4 mb-6">
                Pracujemy tak,<br />
                <span className="gradient-text">jak lubisz</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Rozumiemy, że czas to pieniądz. Dlatego stawiamy na szybką realizację,
                przejrzystą komunikację i efekty, które mówią same za siebie.
              </p>
              <Link to="/kontakt" className="btn-primary">
                Zapytaj o wycenę
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${whyInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {whyUs.map((item, i) => (
                <div key={i} className="card-dark group hover:shadow-[0_0_30px_rgba(244,185,66,0.07)]">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-500 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-dark-700 via-dark-800 to-dark-700 border border-gold-500/20 p-12 md:p-16 text-center overflow-hidden glow-gold">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

            <Sparkles size={32} className="text-gold-500 mx-auto mb-6" />
            <h2 className="font-display font-black text-3xl md:text-5xl mb-4">
              Gotowy na<br />
              <span className="gradient-text">nowy poziom?</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
              Skontaktuj się z nami i otrzymaj bezpłatną wycenę w ciągu 24 godzin.
              Tworzymy strony, które pracują na Twój sukces.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/kontakt" className="btn-primary">
                Bezpłatna wycena
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+48537647071" className="btn-outline">
                +48 537 647 071
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
