import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services(){
  return (
    <div className="min-h-screen bg-[#0A1423]">
      <Navbar />
      <main className="pt-28 pb-24">
        <section className="mx-auto max-w-5xl px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Services</h1>
          <div className="mt-10 space-y-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-white text-2xl font-semibold">AI Phone Receptionist</h2>
              <p className="text-[#7D7D7D] mt-3">Our flagship solution. A fully automated phone system that answers instantly, books appointments, handles FAQs, qualifies leads, and provides a consistent customer experience — 24/7.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-white text-2xl font-semibold">Business Automations</h2>
              <p className="text-[#7D7D7D] mt-3">Custom workflows that automate your repetitive tasks: Scheduling, reminders, customer follow-ups, CRM actions, data handling, notifications, and internal operations.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-white text-2xl font-semibold">Website Creation</h2>
              <p className="text-[#7D7D7D] mt-3">Clean, modern websites designed specifically for small and midsized service businesses — optimized for conversions, integrated with AI, and built for scalability.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-white text-2xl font-semibold">AI Consulting</h2>
              <p className="text-[#7D7D7D] mt-3">We analyze your operations and guide you through strategic AI adoption. Perfect for businesses that want to implement AI the right way.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
