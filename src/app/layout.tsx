import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechFest 2025',
  description: 'Annual Technical Festival',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1f73a6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-charcoal-grey min-h-screen`}>
        <nav className="bg-dark-blue text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold">TechFest 2025</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="hover:text-light-green">Home</a>
                <a href="/about" className="hover:text-light-green">About Us</a>
                <a href="/events" className="hover:text-light-green">Events</a>
                <a href="/speakers" className="hover:text-light-green">Speakers</a>
                <a href="/sponsors" className="hover:text-light-green">Sponsors</a>
                <a href="/team" className="hover:text-light-green">Core Team</a>
                <a href="/testimonials" className="hover:text-light-green">Testimonials</a>
                <a href="/isr" className="hover:text-light-green">ISR</a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-charcoal-grey text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">TechFest 2025</h3>
                <p>Innovation, Technology, and Beyond</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="hover:text-light-green">About Us</a></li>
                  <li><a href="/events" className="hover:text-light-green">Events</a></li>
                  <li><a href="/speakers" className="hover:text-light-green">Speakers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">More</h4>
                <ul className="space-y-2">
                  <li><a href="/sponsors" className="hover:text-light-green">Sponsors</a></li>
                  <li><a href="/team" className="hover:text-light-green">Core Team</a></li>
                  <li><a href="/testimonials" className="hover:text-light-green">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact Us</h4>
                <p>Email: info@techfest2025.com</p>
                <p>Phone: +1 234 567 890</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} TechFest. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
