import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Egg, ThermometerSun, CheckCircle, ChevronRight } from 'lucide-react';
import { getHatcheryStatus } from '@/lib/supabase';

export default async function HomePage() {
  const status = await getHatcheryStatus();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        </div>
        <div className="section-container relative py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <span className="gold-badge mb-6 inline-block">Zimbabwean Excellence</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              ELEVATE YOUR{' '}
              <span className="text-yellow-400">POULTRY PRODUCTION</span>{' '}
              WITH M-HATCHERY SERVICES
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8">
              Discover how our state-of-the-art incubators and expert guidance have transformed
              poultry production for farms of all sizes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">
                Our Solutions <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 z-10">
            <Image
              src="/images/eggs_in_incubator.png"
              alt="Incubator hatching chicks"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Live Hatchery Status Banner */}
      <section className="bg-yellow-400">
        <div className="section-container py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600" />
                </span>
                <span className="text-gray-900 font-semibold text-sm uppercase tracking-wide">Live Hatchery Status</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-900 font-medium">
              <span className="flex items-center gap-1.5">
                <Egg className="w-4 h-4" />
                Currently Incubating:{' '}
                <strong>{status.currently_incubating.toLocaleString()} eggs</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <ThermometerSun className="w-4 h-4" />
                Next Hatch Date: <strong>{status.next_hatch_date}</strong>
              </span>
            </div>
            <span className="text-xs text-gray-700 font-medium hidden sm:block">
              Powered by real-time data
            </span>
          </div>
        </div>
      </section>

      {/* Slogan */}
      <section className="bg-yellow-50 py-10 border-b border-yellow-100">
        <div className="section-container text-center">
          <p className="text-2xl sm:text-3xl font-bold text-gray-800 italic">
            "From Egg to Chick – We Make It Happen."
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="gold-badge mb-3">Why M-Hatcheries</span>
            <h2 className="section-title">Built for Zimbabwean Farmers</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              We combine modern technology with hands-on agricultural expertise to give you the best results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🥚', title: 'Up to 95% Hatch Rate', desc: 'Our carefully managed incubation process delivers exceptional hatch rates on quality Road Runner eggs.' },
              { icon: '🐥', title: 'Vaccinated Day-Old Chicks', desc: 'All chicks leave our facility healthy and vaccinated, giving your flock the best possible start.' },
              { icon: '🔧', title: 'Incubator Servicing', desc: 'Full incubator repairs and servicing for Solar and Electric models, keeping your operation running smoothly.' },
              { icon: '☀️', title: 'Solar & Electric Incubators', desc: 'Power-resilient machines with 10-hour temperature insulation during power faults — ideal for Zimbabwe.' },
              { icon: '📋', title: 'Expert Technical Advice', desc: 'From egg selection to poultry management, our experts walk you through every step.' },
              { icon: '💰', title: 'Affordable Hatching Service', desc: 'Bring your own fertilized eggs and we will hatch them for you at industry- leading low rates.' },
            ].map((item) => (
              <div key={item.title} className="card group hover:border-yellow-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16">
        <div className="section-container text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Scale Your Flock?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact us today for pricing, availability, or expert advice on poultry management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-primary">
              View Live Inventory <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            {[
              '✅ Established 2020',
              '✅ Proudly Zimbabwean',
              '✅ Entumbane, Bulawayo',
              '✅ All Chicks Vaccinated',
              '✅ Solar-Ready Incubators',
            ].map((badge) => (
              <span key={badge} className="font-medium">{badge}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
