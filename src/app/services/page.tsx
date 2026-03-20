import Link from 'next/link';
import Image from 'next/image';
import {
  Egg,
  Wrench,
  Lightbulb,
  PackageCheck,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export const metadata = {
  title: 'Our Solutions | M-Hatcheries Services',
  description: 'Explore M-Hatcheries core services: poultry hatchery, incubator servicing, technical advice, and custom hatching for your own fertilized eggs.',
};

const services = [
  {
    icon: <Egg className="w-8 h-8 text-yellow-500" />,
    title: 'Poultry Hatchery Services',
    description:
      'We operate a state-of-the-art hatchery producing high-quality, vaccinated cross-breed Road Runner chicks. Our process ensures optimal temperature control, humidity management, and egg turning schedules for exceptional hatch rates.',
    highlights: [
      'Up to 95% hatch rate on Road Runner eggs',
      'Day-old and one-week-old chicks available',
      'All chicks vaccinated before sale',
      'Bulk orders accommodated',
    ],
  },
  {
    icon: <Wrench className="w-8 h-8 text-yellow-500" />,
    title: 'Incubator Servicing & Repairs',
    description:
      'Keep your incubators running at peak efficiency with our professional servicing and repair service. We work on both Solar and Electric incubators of any capacity, diagnosing and fixing faults quickly to minimise downtime.',
    highlights: [
      'Solar and Electric incubator repairs',
      'Thermostat calibration & fan replacement',
      'Automatic egg turner repairs',
      'Preventive maintenance programmes',
    ],
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: 'Technical Advice – Incubation & Poultry Management',
    description:
      'Our experts share practical knowledge on every aspect of egg incubation and flock management. From first-time hobbyists to experienced commercial farmers, we tailor our guidance to your specific needs.',
    highlights: [
      'Egg selection and storage best practices',
      'Correct cock-to-hen ratios',
      'Temperature & humidity guidelines',
      'Poultry disease prevention strategies',
    ],
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-yellow-500" />,
    title: 'Custom Hatching (Bring Your Own Eggs)',
    description:
      'Have your own fertilized eggs? Bring them to us and we will hatch them for you in our professional incubators at highly affordable charges. This service is perfect for farmers who want to preserve specific breeds or expand their flock economically.',
    highlights: [
      'Affordable per-egg hatching charge',
      'Suitable for Road Runner and exotic breeds',
      'Strict biosecurity protocols',
      'Transparent hatch-rate reporting',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/yellow_chicks.png" alt="Yellow chicks" fill className="object-cover" priority />
        </div>
        <div className="section-container relative z-10">
          <span className="gold-badge mb-4 inline-block">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold max-w-3xl leading-tight">
            Leading While Others Follow{' '}
            <span className="text-yellow-400">In Poultry Industry</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl">
            Comprehensive hatchery solutions for Zimbabwe's farmers — from egg to chick, every step of the way.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="card group hover:border-yellow-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-yellow-100 transition-colors">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mt-auto">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="bg-yellow-400 py-14">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in Any of Our Services?
          </h2>
          <p className="text-gray-700 mb-8 max-w-lg mx-auto">
            Reach out to us for a personalized quote or to discuss how we can help grow your
            poultry operation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
              View Live Inventory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
