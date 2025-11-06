import { Rocket, LineChart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-indigo-700 text-sm font-medium">
              <Rocket className="h-4 w-4" />
              Launch your prediction edge
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Sumsa: Decisions over Gambling
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Monetize your everyday doubts. Predict what happens in sports, weather, politics, and more—guided by real analysis, not vibes. Earn when you’re right, retain equity when you’re not.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700 transition"
              >
                Get Started Free
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
              <LineChart className="h-4 w-4" />
              Built for clarity: analytics first, markets second.
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white/70 backdrop-blur shadow-xl ring-1 ring-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Sample Forecast</p>
                  <h3 className="text-2xl font-bold text-gray-900">Election Turnout</h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-600 text-sm font-medium">
                  68% probability
                </span>
              </div>
              <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-emerald-600" />
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>• AI-assisted signal checks</li>
                <li>• Confidence intervals with scenario stress-tests</li>
                <li>• Equity retention if the market turns against you</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
