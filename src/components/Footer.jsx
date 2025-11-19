export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/5 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-semibold tracking-wide">Y&A AI Implementation</div>
          <p className="text-[#7D7D7D] text-sm mt-2">Clifton, NJ • Premium AI consulting and automation implementation.</p>
        </div>
        <nav className="col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <a href="/" className="text-[#7D7D7D] hover:text-white">Home</a>
          <a href="/services" className="text-[#7D7D7D] hover:text-white">Services</a>
          <a href="/about" className="text-[#7D7D7D] hover:text-white">About</a>
          <a href="/contact" className="text-[#7D7D7D] hover:text-white">Contact</a>
        </nav>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-xs text-[#7D7D7D]">
          <p>© {new Date().getFullYear()} Y&A AI Implementation. All rights reserved.</p>
          <p>Premium. Corporate. Sleek.</p>
        </div>
      </div>
    </footer>
  )
}
