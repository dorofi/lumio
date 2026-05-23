import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Globe, Palette, MapPin, ArrowRight, Sparkles } from 'lucide-react'

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

const categories = ['Wszystkie', 'Strony WWW', 'Logotypy', 'Google Maps']

const projects = [
  {
    id: 1,
    category: 'Strony WWW',
    title: 'FinSecure',
    subtitle: 'Doradztwo ubezpieczeniowe i finansowe',
    desc: 'Profesjonalne doradztwo ubezpieczeniowe i finansowe dla osób prywatnych oraz firm. 15+ lat doświadczenia, 2400 zadowolonych klientów, 30+ towarzystw w portfolio. Kompleksowa obsługa: ubezpieczenia komunikacyjne, majątkowe, na życie, firmowe, turystyczne oraz doradztwo finansowe. Licencjonowany broker KNF, szybka i bezpieczna obsługa, wsparcie na każdym etapie.',
    tags: ['Strona WWW', 'Ubezpieczenia', 'Doradztwo', 'Finanse'],
    gradient: 'from-orange-500/20 to-red-600/10',
    icon: <img src="/images/finsecure.png" alt="FinSecure" className="w-28 h-16 object-contain bg-white rounded-md shadow" />,
    color: 'text-orange-400',
  },
  {
    id: 2,
    category: 'Logotypy',
    title: 'TechFlow Solutions',
    subtitle: 'Firma IT',
    desc: 'Kompletna identyfikacja wizualna – logotyp, kolorystyka firmowa i zestaw brandingowy.',
    tags: ['Branding', 'Logo', 'CI/CD'],
    gradient: 'from-blue-500/20 to-indigo-600/10',
    icon: '⚡',
    color: 'text-blue-400',
  },
  {
    id: 3,
    category: 'Google Maps',
    title: 'Kawiarnia Złota Filiżanka',
    subtitle: 'Gastronomia · Kraków',
    desc: 'Konfiguracja Google Moja Firma, optymalizacja profilu i zdobycie pierwszych recenzji.',
    tags: ['GMB', 'Local SEO', 'Mapy'],
    gradient: 'from-amber-500/20 to-yellow-600/10',
    icon: '☕',
    color: 'text-amber-400',
  },
  {
    id: 4,
    category: 'Strony WWW',
    title: 'Marta Kowalska – Psycholog',
    subtitle: 'Gabinet psychologiczny',
    desc: 'Spokojna, profesjonalna strona wizytówka z systemem rezerwacji terminów online.',
    tags: ['HTML', 'CSS', 'Booking'],
    gradient: 'from-teal-500/20 to-green-600/10',
    icon: '🌿',
    color: 'text-teal-400',
  },
  {
    id: 5,
    category: 'Logotypy',
    title: 'QuickClean',
    subtitle: 'Usługi sprzątania',
    desc: 'Świeży, nowoczesny logotyp z całym pakietem materiałów wizualnych gotowych do druku.',
    tags: ['Branding', 'Print', 'Ilustracja'],
    gradient: 'from-cyan-500/20 to-sky-600/10',
    icon: '✨',
    color: 'text-cyan-400',
  },
  {
    id: 6,
    category: 'Strony WWW',
    title: 'MegaBud – Budownictwo',
    subtitle: 'Firma budowlana · Warszawa',
    desc: 'Wielosekcyjna strona firmowa z galerią realizacji, formularzem wyceny i danymi referencyjnymi.',
    tags: ['React', 'Form', 'Gallery'],
    gradient: 'from-stone-500/20 to-zinc-600/10',
    icon: '🏗️',
    color: 'text-stone-400',
  },
]

const categoryIcons = {
  'Strony WWW': <Globe size={14} />,
  'Logotypy': <Palette size={14} />,
  'Google Maps': <MapPin size={14} />,
}

export default function Projects() {
  const [active, setActive] = useState('Wszystkie')
  const [headerRef, headerInView] = useInView(0.1)
  const [gridRef, gridInView] = useInView(0.05)

  const filtered = active === 'Wszystkie' ? projects : projects.filter(p => p.category === active)

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="section-tag mb-4">Portfolio</span>
          <h1 className="font-display font-black text-5xl md:text-6xl mt-4 mb-5">
            Nasze <span className="gradient-text">projekty</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Przeglądaj wybrane realizacje. Każdy projekt to unikalne wyzwanie i satysfakcjonujący efekt.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-gold-500 text-dark-900 shadow-[0_0_20px_rgba(244,185,66,0.35)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {categoryIcons[cat]}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="group bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-gold-500/25 transition-all duration-400 hover:shadow-[0_0_40px_rgba(244,185,66,0.07)] cursor-default"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Card visual */}
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 noise-bg" />
                <span className="text-5xl select-none group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </span>
                <div className={`absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-900/60 backdrop-blur-sm text-xs font-medium ${project.color}`}>
                  {categoryIcons[project.category]}
                  {project.category}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="text-white/40 text-xs mb-1 tracking-wide">{project.subtitle}</div>
                <h3 className="font-display font-bold text-lg mb-3">{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-white/50 text-xs border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="text-gold-500/60 text-xs font-medium tracking-wide uppercase flex items-center gap-1.5">
                    <ExternalLink size={12} />
                    Projekt zrealizowany
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-dark-800 border border-white/5 mb-8">
            <Sparkles size={18} className="text-gold-500" />
            <span className="text-white/60 text-sm">Masz projekt w głowie? Zrealizujmy go razem!</span>
          </div>
          <br />
          <Link to="/kontakt" className="btn-primary">
            Zamów swój projekt
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  )
}
