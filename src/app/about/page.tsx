import { Users, Star, Leaf, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | M-Hatcheries Services',
  description: 'Learn about M-Hatcheries Services – a proudly Zimbabwean business based in Entumbane, Bulawayo, dedicated to high-quality poultry hatchery solutions since 2020.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/free_range_chickens.png" alt="Free range chickens" fill className="object-cover" priority />
        </div>
        <div className="section-container relative z-10">
          <span className="gold-badge mb-4 inline-block">Our Story</span>
          <h1 className="section-title text-white text-4xl sm:text-5xl font-extrabold max-w-2xl">
            About M-Hatcheries Services
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl">
            Proudly Zimbabwean. Community-rooted. Committed to the future of poultry farming.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="gold-badge mb-4 inline-block">Who We Are</span>
              <h2 className="section-title mb-6">A Zimbabwean Hatchery Built on Trust</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  M-Hatcheries Services is a proudly Zimbabwean local business based in the heart of the
                  community, specializing in high-quality poultry hatchery solutions. Established in{' '}
                  <strong className="text-gray-900">2020</strong>, the company is dedicated to supporting
                  farmers and poultry enthusiasts by providing reliable, affordable, and professional services.
                </p>
                <p>
                  Based in <strong className="text-gray-900">Entumbane, Bulawayo</strong>, we serve clients
                  across the region with tailored solutions for poultry producers of all sizes — from backyard
                  farmers to large commercial operations.
                </p>
                <p>
                  Our team brings hands-on experience in egg incubation, chick rearing, and incubator
                  technology — combining modern equipment with deep agricultural knowledge.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2020', label: 'Year Founded' },
                { value: '95%', label: 'Hatch Rate' },
                { value: '5,000', label: 'Max Egg Capacity' },
                { value: '100%', label: 'Vaccinated Chicks' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center"
                >
                  <p className="text-3xl font-extrabold text-yellow-600">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="gold-badge mb-3">Our Commitment</span>
            <h2 className="section-title">Standards We Live By</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Delivering the highest standards in poultry production through continuous innovation
              and an unwavering commitment to our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-7 h-7 text-yellow-500" />,
                title: 'Quality First',
                desc: 'We maintain rigorous standards at every stage — from egg selection through to chick delivery.',
              },
              {
                icon: <Users className="w-7 h-7 text-yellow-500" />,
                title: 'Community-Focused',
                desc: 'We are embedded in our community, understanding the real needs of local farmers and households.',
              },
              {
                icon: <Leaf className="w-7 h-7 text-yellow-500" />,
                title: 'Continuous Innovation',
                desc: 'From developing hardier breeds to improving incubator technology, we never stop advancing.',
              },
              {
                icon: <Star className="w-7 h-7 text-yellow-500" />,
                title: 'Affordable Excellence',
                desc: 'We believe every farmer deserves access to professional hatchery services at fair prices.',
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="flex justify-center mb-4 w-14 h-14 bg-yellow-50 rounded-2xl mx-auto items-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-yellow-400">
        <div className="section-container text-center">
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            "Our mission is to empower Zimbabwean farmers with world-class hatchery technology and
            expertise — making quality poultry production accessible to all."
          </p>
          <p className="mt-4 text-gray-700 font-medium">— M-Hatcheries Services Team</p>
        </div>
      </section>
    </div>
  );
}
