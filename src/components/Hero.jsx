import Spline from '@splinetool/react-spline'

export default function Hero({ t }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_600px_at_50%_-100px,rgba(255,163,26,0.25),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 py-16 lg:py-24 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.hero.title}
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#signup" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-black transition-colors shadow-lg shadow-slate-900/10">
              {t.hero.cta}
            </a>
            <a href="#how" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300/60 dark:border-white/20 text-slate-800 dark:text-white hover:bg-white/60 dark:hover:bg-white/10 transition-colors">
              {t.hero.secondary}
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {t.hero.videoLabel}: https://www.youtube.com/watch?v=mO_1rmAdxJk
          </p>
        </div>

        <div className="h-[360px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-white/50 dark:bg-slate-900/40">
          <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
