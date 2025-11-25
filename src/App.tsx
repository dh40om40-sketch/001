import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { label: 'من نحن', href: '#about' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'فروعنا', href: '#locations' },
    { label: 'آراء العملاء', href: '#testimonials' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">أ</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  أفكار عصرية
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  للديكورات والطاقة البديلة
                </p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Locations />
        <Testimonials />
        <LeadForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
