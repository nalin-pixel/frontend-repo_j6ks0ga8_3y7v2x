import Spline from '@splinetool/react-spline'

export default function Hero(){
  return (
    <section className="relative pt-32 md:pt-36 lg:pt-40 pb-20 bg-[#0A1423] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,164,65,0.12),transparent_60%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Never Miss a Call Again.
          </h1>
          <p className="mt-6 text-[#7D7D7D] text-lg md:text-xl max-w-xl">
            AI systems, workflow automation, and digital transformation for small and midsized businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://calendly.com/YandA/30min" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[#D9A441] text-black px-6 py-3 text-sm font-medium hover:brightness-110 transition">
              Book a Call
            </a>
            <a href="tel:+1YOURNUMBER" className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/5 transition">
              Call Now
            </a>
          </div>
        </div>
        <div className="relative h-[340px] sm:h-[420px] md:h-[520px] lg:h-[560px] order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
