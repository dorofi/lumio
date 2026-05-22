import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gold-500 flex items-center justify-center font-display font-black text-dark-900 text-xl">
                L
              </div>
              <span className="font-display font-bold text-xl tracking-wide">LUMIO</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Tworzymy nowoczesne rozwiązania cyfrowe dla polskich firm. Strony internetowe, logotypy i obecność w sieci.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase text-white/40 mb-5">Nawigacja</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Strona Główna' },
                { to: '/projekty', label: 'Projekty' },
                { to: '/kontakt', label: 'Kontakt' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/60 hover:text-gold-500 text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase text-white/40 mb-5">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:lumio.contakt@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-gold-500 text-sm transition-colors duration-200"
                >
                  <Mail size={15} className="text-gold-500/60 shrink-0" />
                  lumio.contakt@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+48537647071"
                  className="flex items-center gap-3 text-white/60 hover:text-gold-500 text-sm transition-colors duration-200"
                >
                  <Phone size={15} className="text-gold-500/60 shrink-0" />
                  +48 537 647 071
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin size={15} className="text-gold-500/60 shrink-0" />
                Polska
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} LUMIO. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-white/20 text-xs">
            Tworzenie stron · Logotypy · Google Maps
          </p>
        </div>
      </div>
    </footer>
  )
}
