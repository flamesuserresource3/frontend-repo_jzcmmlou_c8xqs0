import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">
            <span className="text-indigo-600">Sumsa</span>
            <span className="text-gray-900"> Markets</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#" className="hover:text-gray-900">Sign in</a>
          </nav>
          <a href="#pricing" className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-indigo-700">Join Free</a>
        </div>
      </header>

      <main className="flex-1">
        <div className="pt-16" />
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  )
}

export default App
