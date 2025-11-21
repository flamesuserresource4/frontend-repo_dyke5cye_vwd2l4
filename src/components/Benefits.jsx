export default function Benefits({ t }) {
  const items = [
    t.benefits.item1,
    t.benefits.item2,
    t.benefits.item3,
    t.benefits.item4,
  ]

  return (
    <section id="benefits" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {t.benefits.title}
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((txt, i) => (
            <div key={i} className="rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-6">
              <p className="text-slate-700 dark:text-slate-300 text-base">{txt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
