import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Signup from './components/Signup'
import Footer from './components/Footer'

function App() {
  const translations = useMemo(() => ({
    ru: {
      nav: { how: 'Как это работает', benefits: 'Преимущества', signup: 'Регистрация' },
      hero: {
        title: 'ИИ-чатбот, который отвечает за вас 24/7',
        subtitle: 'Обрабатывает запросы, консультирует, продаёт и принимает обращения без менеджера',
        cta: 'Создать бота бесплатно',
        secondary: 'Узнать больше',
        videoLabel: 'Видео',
      },
      how: {
        title: 'Как работает Oriion',
        step1: 'Пользователь подключает сайт или соцсети',
        step2: 'Загружает информацию о бизнесе',
        step3: 'Oriion обучается и начинает общаться с клиентами',
        watch: 'Смотреть видео о работе Oriion',
      },
      benefits: {
        title: 'Преимущества',
        item1: 'Работает 24/7',
        item2: 'Не ошибается',
        item3: 'Улучшает конверсию',
        item4: 'Обрабатывает вопросы мгновенно',
      },
      signup: {
        title: 'Начните бесплатно',
        subtitle: 'Создайте аккаунт, подключите источники и запустите бота за несколько минут.',
        email: 'Email',
        password: 'Пароль',
        cta: 'Создать аккаунт',
        success: 'Готово! Мы отправили письмо с подтверждением.',
      },
      footer: { contacts: 'Контакты', privacy: 'Политика конфиденциальности' },
    },
    en: {
      nav: { how: 'How it works', benefits: 'Benefits', signup: 'Sign up' },
      hero: {
        title: 'AI chatbot that replies for you 24/7',
        subtitle: 'Handles requests, consults, sells and captures inquiries without a manager',
        cta: 'Create a bot for free',
        secondary: 'Learn more',
        videoLabel: 'Video',
      },
      how: {
        title: 'How Oriion works',
        step1: 'Connect your website or social networks',
        step2: 'Upload your business information',
        step3: 'Oriion trains and starts chatting with customers',
        watch: 'Watch how Oriion works',
      },
      benefits: {
        title: 'Benefits',
        item1: 'Works 24/7',
        item2: 'Makes no mistakes',
        item3: 'Improves conversion',
        item4: 'Answers instantly',
      },
      signup: {
        title: 'Get started free',
        subtitle: 'Create an account, connect sources and launch your bot in minutes.',
        email: 'Email',
        password: 'Password',
        cta: 'Create account',
        success: 'Done! We sent a confirmation email.',
      },
      footer: { contacts: 'Contacts', privacy: 'Privacy Policy' },
    },
  }), [])

  const [lang, setLang] = useState('ru')
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Navbar lang={lang} onChangeLang={setLang} t={t} />

      <main>
        <Hero t={t} />
        <HowItWorks t={t} />
        <Benefits t={t} />
        <Signup t={t} />
      </main>

      <Footer t={t} />
    </div>
  )
}

export default App
