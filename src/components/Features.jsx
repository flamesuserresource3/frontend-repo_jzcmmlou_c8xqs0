import { Shield, BarChart3, Brain, Factory } from 'lucide-react'

const features = [
  {
    title: 'Risk Simulations',
    description:
      'Stress-test outcomes with Monte Carlo-style runs and scenario planning to understand upside and drawdown.',
    icon: Shield,
  },
  {
    title: 'Forecast Dashboards',
    description:
      'Visualize probabilities, confidence bands, and velocity of change across markets you care about.',
    icon: BarChart3,
  },
  {
    title: 'AI Co-Analyst',
    description:
      'Get structured context and signals from news, stats, and historical analogs before you commit.',
    icon: Brain,
  },
  {
    title: 'B2B & Private Markets',
    description:
      'Spin up internal forecast markets for teams, or access private markets with advanced controls.',
    icon: Factory,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Analytics-first prediction markets
          </h2>
          <p className="mt-3 text-gray-600">
            Decisions over gambling. Information-rich tools to help you earn—and protect—your edge.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
