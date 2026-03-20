import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | M-Hatcheries Services',
  description: 'Get in touch with M-Hatcheries Services in Entumbane, Bulawayo. Call +263 772 287 864 or +263 712 023 451 for chick orders, incubator inquiries, and expert advice.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="section-container">
          <span className="gold-badge mb-4 inline-block">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold max-w-2xl leading-tight">
            Contact <span className="text-yellow-400">M-Hatcheries Services</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl">
            Have a question, need a quote, or want to place an order? Reach out — we respond quickly.
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
