import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import DropdownMenu from './HomeUi/DropdownMenu';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed  top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm text-white shadow-md">
      <div className="mx-universal flex items-center justify-between px-4 py-3">
                <div className="text-xl font-bold">Whyral.ai</div>
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <a href="#" className="hover:text-brand transition">Home</a>
          <a href="#" className="hover:text-brand transition">About</a>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 hover:text-brand transition"
            >
              Resources <FaChevronDown className="text-xs" />
            </button>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full mt-2 bg-white text-white rounded shadow-md w-48 z-20"
                >
                  <DropdownMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#" className="hover:text-brand transition">Guide</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="hover:text-brand">Login</button>
          <button className="bg-brand hover:bg-brandHover text-black px-4 py-2 rounded transition font-medium">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-sm px-6 py-5 space-y-4"
          >
            <a href="#" className="block hover:text-brand">Home</a>
            <a href="#" className="block hover:text-brand">About</a>

            <div>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 hover:text-brand"
              >
                Resources <FaChevronDown className="text-xs" />
              </button>
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="mt-2 bg-white text-black rounded shadow-md"
                  >
                    <DropdownMenu />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#" className="block hover:text-brand">Guide</a>
            <hr className="border-white/20" />
            <button className="block w-full text-left hover:text-brand">Login</button>
            <button className="w-full bg-brand hover:bg-brandHover text-black px-4 py-2 rounded font-medium transition">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
