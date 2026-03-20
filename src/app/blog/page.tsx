import { Newspaper, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'News & Poultry Tips | M-Hatcheries Services',
  description: 'Latest news and expert poultry tips from M-Hatcheries Services. Learn about new breeds, incubation best practices, and poultry management.',
};

export default function BlogPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="section-container">
          <span className="gold-badge mb-4 inline-block">Knowledge Hub</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold max-w-2xl leading-tight">
            News & <span className="text-yellow-400">Poultry Tips</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl">
            Stay informed with the latest developments in poultry farming and proven expert
            advice from our hatchery team.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-10">
            <Newspaper className="w-5 h-5 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
          </div>

          <article className="card border-l-4 border-l-yellow-400 max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="gold-badge">New Breed</span>
              <span className="bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                Research & Development
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
              The Hornbill-Type: A New Hardy Breed
            </h3>
            <div className="prose prose-sm text-gray-600 max-w-none space-y-4">
              <p>
                M-Hatcheries Services is proud to announce a major breakthrough in local poultry
                development — the emergence of the{' '}
                <strong className="text-gray-900">"Hornbill-Type"</strong>, a new generation of
                poultry developed through the successful cross-breeding of exotic chicken varieties
                with the resilient Zimbabwe Road Runner.
              </p>
              <p>
                This innovative cross-breeding programme was designed to address one of the most
                persistent challenges facing local poultry farmers: disease susceptibility and
                climate resilience. The Hornbill-Type demonstrates an exceptionally high degree of
                disease tolerance, having been observed to thrive in conditions that would typically
                stress conventional breeds.
              </p>
              <p>
                The breed is capable of withstanding the harsh climatic conditions common in
                Zimbabwe — including heat stress, variable rainfall seasons, and variable feed
                availability — while maintaining strong growth rates and meat quality. Early results
                from our breeding programme show survival rates significantly above industry averages
                for free-range and semi-intensive farming systems.
              </p>
              <p>
                This development aligns with M-Hatcheries' commitment to{' '}
                <strong className="text-gray-900">continuous innovation</strong> and to empowering
                local farmers with superior genetics that do not rely on expensive imported breeds
                or specialised housing.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs text-gray-400">Published by M-Hatcheries Research Team · March 2026</div>
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">
                Enquire About This Breed <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-10">
            <BookOpen className="w-5 h-5 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">Incubation Best Practices</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Egg Selection Tips */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center text-sm font-bold">1</span>
                Egg Collection & Selection
              </h3>
              <ul className="space-y-3">
                {[
                  { tip: 'Collect eggs daily — ideally up to 3 times per day', detail: 'Fresh eggs have higher hatch rates. Frequent collection reduces exposure to temperature extremes and contaminants.' },
                  { tip: 'Never incubate cracked eggs', detail: 'Cracked shells compromise the sterile environment needed for embryo development and can contaminate your entire batch.' },
                  { tip: 'Select clean, medium-sized, normal-shaped eggs', detail: 'Avoid very round, very elongated, or oversized eggs. Abnormal shapes often indicate developmental irregularities.' },
                  { tip: 'Do not wash eggs before incubation', detail: 'The natural bloom (cuticle) on the egg surface protects against bacteria. Washing removes this protective layer.' },
                ].map((item) => (
                  <li key={item.tip} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.tip}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flock Management Tips */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center text-sm font-bold">2</span>
                Flock & Breeding Management
              </h3>
              <ul className="space-y-3">
                {[
                  { tip: 'Maintain the correct cock-to-hen ratio', detail: 'For Road Runners and cross-breeds, a ratio of 1 cock to 8–10 hens is ideal for consistent fertilization rates without stressing the hens.' },
                  { tip: 'Rotate cocks periodically', detail: 'Introducing a new cock every few months maintains genetic diversity and high fertility rates across your flock.' },
                  { tip: 'Store unset eggs at 15–18°C', detail: 'If you cannot incubate eggs immediately, store them pointed-end down in a cool, humid environment for up to 7 days maximum.' },
                  { tip: 'Monitor your incubator temperature daily', detail: 'Optimal incubation temperature is 37.5–38°C (99.5°F). Even small deviations over 24 hours can significantly reduce hatch rates.' },
                ].map((item) => (
                  <li key={item.tip} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.tip}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-base">Quick Reference: Key Incubation Numbers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { value: '21 days', label: 'Incubation Period (Chicken)' },
                { value: '37.5°C', label: 'Ideal Temperature' },
                { value: '55–65%', label: 'Ideal Humidity' },
                { value: '3×/day', label: 'Egg Turning Frequency' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-3 border border-yellow-100">
                  <p className="text-lg font-extrabold text-yellow-600">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
