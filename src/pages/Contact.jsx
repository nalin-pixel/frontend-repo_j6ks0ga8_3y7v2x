import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you. We will get back to you shortly.')
  }

  return (
    <div className="min-h-screen bg-[#0A1423]">
      <Navbar />
      <main className="pt-28 pb-24">
        <section className="mx-auto max-w-5xl px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Contact</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-4 text-sm text-[#7D7D7D]">
              <p><span className="text-white">Email:</span> YandAImplementation@gmail.com</p>
              <p><span className="text-white">Phone:</span> +1 (placeholder number)</p>
              <p><span className="text-white">Location:</span> Clifton, NJ</p>
              <p><span className="text-white">Hours:</span> Mon–Sat: 8AM–8PM</p>
              <p><span className="text-white">Service Area:</span> Clifton + surrounding counties</p>
              <div className="pt-2 flex flex-col gap-2">
                <a href="tel:+1YOURNUMBER" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-2 text-sm font-medium hover:bg-white/5 transition">Call Now</a>
                <a href="mailto:YandAImplementation@gmail.com" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-2 text-sm font-medium hover:bg-white/5 transition">Email Us</a>
                <a href="https://calendly.com/YandA/30min" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[#D9A441] text-black px-5 py-2 text-sm font-medium hover:brightness-110 transition">Book a Call</a>
              </div>
            </div>
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#7D7D7D] mb-1">Full Name</label>
                  <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white outline-none focus:border-[#D9A441]" />
                </div>
                <div>
                  <label className="block text-xs text-[#7D7D7D] mb-1">Business Name</label>
                  <input name="businessName" value={form.businessName} onChange={handleChange} className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white outline-none focus:border-[#D9A441]" />
                </div>
                <div>
                  <label className="block text-xs text-[#7D7D7D] mb-1">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white outline-none focus:border-[#D9A441]" />
                </div>
                <div>
                  <label className="block text-xs text-[#7D7D7D] mb-1">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white outline-none focus:border-[#D9A441]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-[#7D7D7D] mb-1">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows="5" className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white outline-none focus:border-[#D9A441]"></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button className="inline-flex items-center rounded-full bg-[#D9A441] text-black px-6 py-3 text-sm font-medium hover:brightness-110 transition">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
