export default function WhyChooseUs(){
  const bullets = [
    'Professional AI integration',
    'Fast implementation',
    'Local support (Clifton, NJ)',
    '24/7 availability',
    'Increased efficiency',
    'Real business transformation',
  ]

  return (
    <section className="bg-[#0A1423] py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-white text-2xl md:text-3xl font-semibold">Why Choose Us</h2>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 text-[#7D7D7D]">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#D9A441] inline-block"></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
