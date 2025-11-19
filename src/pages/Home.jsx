import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import WhyChooseUs from '../components/WhyChooseUs'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-[#0A1423]">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
