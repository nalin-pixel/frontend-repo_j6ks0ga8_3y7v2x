import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function GetStarted(){
  return (
    <div className="min-h-screen bg-[#0A1423]">
      <Navbar />
      <main className="pt-28 pb-24">
        <section className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Get Started</h1>
          <p className="text-[#7D7D7D] mt-4">Take the first step toward professional AI implementation. Book a call and we’ll walk you through a live demo tailored to your business.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="https://calendly.com/YandA/30min" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[#D9A441] text-black px-6 py-3 text-sm font-medium hover:brightness-110 transition">Book Your Demo Call</a>
            <a href="tel:+1YOURNUMBER" className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/5 transition">Call Now</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
