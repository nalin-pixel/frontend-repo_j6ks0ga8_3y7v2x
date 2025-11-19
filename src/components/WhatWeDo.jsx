export default function WhatWeDo(){
  const items = [
    {
      title: 'AI Phone Receptionist',
      desc: 'Instant call handling, appointment booking, FAQs, and lead qualification — fully automated.'
    },
    {
      title: 'Smart Automations',
      desc: 'We build workflow systems for: scheduling, reminders, CRM updates, follow-up sequences, and repetitive task elimination.'
    },
    {
      title: 'Modern Websites',
      desc: 'Fast, clean websites optimized for conversions and integrated with AI systems for content, booking, and customer support.'
    },
  ]

  return (
    <section className="bg-[#0A1423] py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-white text-2xl md:text-3xl font-semibold">What We Do</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              <p className="text-[#7D7D7D] mt-3 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
