import Link from "next/link";
import { useState, useEffect } from "react";
import AnimatedLogo from "./AnimatedLogo";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "About", href: "/about", current: false },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `rgba(12, 12, 12, ${scrolled ? 0.95 : 0.8})`,
        borderBottom: `1px solid rgba(255, 255, 255, ${scrolled ? 0.3 : 0.1})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <AnimatedLogo size={scrolled ? 44 : 48} />
              <div className="flex flex-col transition-opacity duration-200">
                <h1 className="text-2xl font-space font-bold bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent drop-shadow-sm hover:scale-105 transform transition-transform duration-150">
                  Andrea Destajo
                </h1>
                <div className="h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full w-full" />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="">
                <Link
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-transform duration-150 transform hover:-translate-y-1 hover:scale-105 group"
                  href={item.href}
                >
                  <span className="relative z-10 font-inter font-medium text-base">
                    {item.name}
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

                  <div className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 w-0 group-hover:w-4/5 transition-all duration-150 transform -translate-x-1/2" />

                  <div className="absolute inset-0 bg-primary-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                </Link>
              </div>
            ))}

            {/* Enhanced CTA Button */}
            <a
              href="https://www.linkedin.com/in/andrea-destajo-828317139/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden"
            >
              <button className="relative px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-medium text-base transition-transform duration-150 hover:-translate-y-1">
                <span className="relative z-10">Let&apos;s Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 hover:opacity-100 transition-opacity duration-150" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 hover:opacity-100 transition-transform duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
