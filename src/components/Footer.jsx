export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">Samsa: Monetizing your everyday doubts.</p>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
