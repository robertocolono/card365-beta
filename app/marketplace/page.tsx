"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MarketplacePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-neutral-900 px-6 text-center">
      {/* Titolo */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Marketplace
      </motion.h1>

      {/* Descrizione */}
      <motion.p
        className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Benvenuto nel marketplace di Card365.  
        Qui potrai acquistare, vendere e scoprire nuove carte da collezione.  
        (La sezione è in costruzione 🚧)
      </motion.p>

      {/* Pulsante ritorno */}
      <Link
        href="/"
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition-transform hover:scale-105"
      >
        Torna alla Home
      </Link>
    </main>
  );
}
