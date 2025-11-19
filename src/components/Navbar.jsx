import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0A1423]/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#D9A441] to-[#b88a34] shadow-[0_0_0_1px_rgba(217,164,65,0.4)]"></div>
          <div className="text-white">
            <div className="font-semibold tracking-wide">Y&A</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#D9A441]">AI Implementation</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-white' : 'text-[#7D7D7D] hover:text-white'} transition-colors`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href="https://calendly.com/YandA/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[#D9A441] text-black px-4 py-2 text-sm font-medium hover:brightness-110 transition"
          >
            Book a Call
          </a>
        </nav>

        <button onClick={() => setOpen((o) => !o)} className="md:hidden text-white p-2">
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0A1423]/95">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm ${isActive ? 'text-white' : 'text-[#7D7D7D] hover:text-white'} transition-colors`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href="https://calendly.com/YandA/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#D9A441] text-black px-4 py-2 text-sm font-medium hover:brightness-110 transition"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
