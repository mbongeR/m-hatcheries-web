import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'M-Hatcheries Services | Premium Poultry Hatchery in Zimbabwe',
  description: 'M-Hatcheries Services – Proudly Zimbabwean. Specializing in high-quality poultry hatchery solutions, incubator sales & repairs, and expert technical advice. Based in Entumbane, Bulawayo.',
  keywords: 'poultry hatchery Zimbabwe, Road Runner chicks, incubators, day-old chicks, egg incubation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
