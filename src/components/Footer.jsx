export default function Footer({ t }) {
  return (
    <footer className="py-10 border-t border-slate-200/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">© Oriion 2025</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors">{t.footer.contacts}</a>
          <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors">{t.footer.privacy}</a>
        </nav>
      </div>
    </footer>
  )
}
