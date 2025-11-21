export default function HowItWorks({ t }) {
  const steps = [
    t.how.step1,
    t.how.step2,
    t.how.step3,
  ]

  return (
    <section id="how" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {t.how.title}
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-400 to-amber-600 text-white flex items-center justify-center font-bold shadow shadow-orange-500/20">
                {i + 1}
              </div>
              <p className="mt-4 text-slate-700 dark:text-slate-300 text-base">
                {s}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#" className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300/60 dark:border-white/20 hover:bg-white/60 dark:hover:bg-white/10 text-slate-800 dark:text-white transition-colors">
            {t.how.watch}
          </a>
        </div>
      </div>
    </section>
  )
}
