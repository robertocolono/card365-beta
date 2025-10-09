"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 px-6 text-center">
      {/* Logo */}
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-yellow-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Card365
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Il marketplace per collezionisti di carte, ora in Beta.  
        Scopri, compra e vendi in modo trasparente.
      </motion.p>

      {/* Main Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Link
          href="/marketplace"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg text-lg shadow-md transition-transform hover:scale-105"
        >
          Entra nel Marketplace
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} Card365 — Beta Version
      </footer>
    </main>
  );
}
