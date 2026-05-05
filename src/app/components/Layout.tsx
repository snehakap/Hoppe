import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Footer } from "./Footer";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Ihr Terrarium", href: "/service" },
    { name: "Unsere Terrarien", href: "/products" },
    { name: "Reptilien", href: "/about" },
    { name: "Soziale Medien", href: "/videos" },
    { name: "Contact", href: "/contact" },
    { name: "Legal", href: "/legal" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#020617] via-[#020617] to-[#0b1220] text-slate-200">

      {/* ================= HEADER ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        
        <div className="max-w-7xl mx-auto px-6 py-4 text-center">

          {/* Logo CENTER */}
          <Link to="/" className="flex justify-center mb-4">
            <img
              src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1777993319/Gecko-Hoppe-080425-RZ06-Chrome_3D_und_grey_TxT_gruen-HQ-150725_vukh7q.jpg"
              alt="Hoppe Logo"
              className="w-[350px] h-30 object-fill"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base md:text-lg tracking-wide transition-all duration-200 pb-1 ${
                  isActive(item.href)
  ? "text-green-500 border-b border-green-500"
  : "text-slate-400 hover:text-green-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-center mt-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0f172a] border-t border-white/10">
            <div className="px-6 py-4 space-y-2 text-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base transition ${
                    isActive(item.href)
                      ? "text-slate-300"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ================= PAGE CONTENT ================= */}
      <main className="pt-36 flex-grow">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
