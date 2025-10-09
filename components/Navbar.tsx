'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"en" | "it" | "jp">("en");
  const [isLogged, setIsLogged] = useState(false);

  const translations = {
    en: {
      marketplace: "Marketplace",
      createAccount: "Create Account",
      login: "Login",
      sell: "Become a Seller",
      logout: "Logout",
    },
    it: {
      marketplace: "Marketplace",
      createAccount: "Crea Account",
      login: "Accedi",
      sell: "Diventa Venditore",
      logout: "Esci",
    },
    jp: {
      marketplace: "マーケットプレイス",
      createAccount: "アカウント作成",
      login: "ログイン",
      sell: "販売者になる",
      logout: "ログアウト",
    },
  };

  const t = translations[lang];
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(pathname === "/");
  }, [pathname]);

  if (isHome) return null;

  return (
    <nav className="w-full bg-white border-b border-neutral-200 py-4 px-8 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-500">
          Card365
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link href="/marketplace" className="hover:text-yellow-500 transition">
            {t.marketplace}
          </Link>

          {!isLogged ? (
            <>
              <Link href="/register" className="hover:text-yellow-500 transition">
                {t.createAccount}
              </Link>
              <Link href="/login" className="hover:text-yellow-500 transition">
                {t.login}
              </Link>
            </>
          ) : (
            <>
              <Link href="/sell" className="hover:text-yellow-500 transition">
                {t.sell}
              </Link>
              <button
                onClick={() => setIsLogged(false)}
                className="hover:text-red-500 transition"
              >
                {t.logout}
              </button>
            </>
          )}

          {/* Language Switcher */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as "en" | "it" | "jp")}
            className="border border-neutral-300 rounded-md px-2 py-1 text-sm bg-white"
          >
            <option value="en">EN</option>
            <option value="it">IT</option>
            <option value="jp">JP</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
