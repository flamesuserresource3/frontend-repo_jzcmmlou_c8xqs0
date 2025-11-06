import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Freemium',
    price: '$0',
    description: 'Get started with core signals and context.',
    features: [
      'Brief event analysis and context',
      'Conventional money-making system',
      'Community markets access',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$29/mo',
    description: 'Full-stack forecasting and equity retention.',
    features: [
      'Risk simulations & forecast dashboards',
      'AI assistant for predictions',
      'Private markets & B2B access',
      'Equity retention on losses and opt-outs',
    ],
    cta: 'Upgrade',
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Pricing</h2>
          <p className="mt-3 text-gray-600">
            Choose a plan to start forecasting your world.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border ${tier.highlighted ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-200'} bg-white p-8 shadow-sm`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="text-3xl font-extrabold text-gray-900">{tier.price}</p>
              </div>
              <p className="mt-2 text-gray-600">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-semibold transition ${tier.highlighted ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-900 text-white hover:bg-black'}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
