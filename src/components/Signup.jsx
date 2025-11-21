import { useState } from 'react'

export default function Signup({ t }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Simple local submit to satisfy requirement of ready-to-host static page
    setSubmitted(true)
  }

  return (
    <section id="signup" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {t.signup.title}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-xl">{t.signup.subtitle}</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 p-6 backdrop-blur">
            <div className="grid gap-4">
              <label className="grid gap-1">
                <span className="text-sm text-slate-700 dark:text-slate-300">{t.signup.email}</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-11 px-3 rounded-lg border border-slate-300/60 dark:border-white/20 bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-sm text-slate-700 dark:text-slate-300">{t.signup.password}</span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-11 px-3 rounded-lg border border-slate-300/60 dark:border-white/20 bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                />
              </label>

              <button type="submit" className="mt-2 h-11 rounded-lg bg-slate-900 text-white hover:bg-black transition-colors shadow-lg shadow-slate-900/10">
                {t.signup.cta}
              </button>

              {submitted && (
                <p className="text-sm text-green-600">{t.signup.success}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
