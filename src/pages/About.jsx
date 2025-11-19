import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen bg-[#0A1423]">
      <Navbar />
      <main className="pt-28 pb-24">
        <section className="mx-auto max-w-5xl px-6 space-y-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">About</h1>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-[#7D7D7D] leading-relaxed">
            <p>Y&A AI Implementation is a Clifton-based AI and automation agency dedicated to helping businesses work smarter. We specialize in implementing AI phone receptionists, workflow automation systems, and modern websites for small and midsized service businesses.</p>
            <p className="mt-4">Our mission is simple: Give every business access to real AI systems that make operations easier, faster, and more efficient.</p>
            <p className="mt-4">We combine advanced technology with clean execution to deliver solutions that create real, measurable improvements in daily operations.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
