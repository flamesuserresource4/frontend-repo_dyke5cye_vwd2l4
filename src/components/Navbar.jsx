import { useMemo } from 'react'

export default function Navbar({ lang, onChangeLang, t }) {
  const languages = useMemo(() => ([
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ]), [])

  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-slate-900/70 border-b border-slate-200/40 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-400 via-amber-500 to-rose-500 shadow-lg shadow-orange-500/30" />
          <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Oriion</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#how" className="text-sm text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.how}</a>
          <a href="#benefits" className="text-sm text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.benefits}</a>
          <a href="#signup" className="text-sm text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.signup}</a>
          <div className="h-5 w-px bg-slate-300/60 dark:bg-white/20" />
          <div className="flex items-center text-sm">
            {languages.map((l, idx) => (
              <button
                key={l.code}
                onClick={() => onChangeLang(l.code)}
                className={`px-2 py-1 rounded transition-colors ${lang === l.code ? 'text-white bg-slate-900 dark:bg-white dark:text-slate-900' : 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white'}`}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
