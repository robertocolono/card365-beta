'use client';

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { lang, t, setLang } = useLanguage();

  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-300">
      <Link href="/" className="text-2xl font-bold text-yellow-600">
        Card365
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/marketplace" className="hover:text-yellow-500">
          {t("marketplace")}
        </Link>
        <Link href="/register" className="hover:text-yellow-500">
          {t("createAccount")}
        </Link>
        <Link href="/login" className="hover:text-yellow-500">
          {t("login")}
        </Link>

        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          <option value="en">EN</option>
          <option value="it">IT</option>
          <option value="ja">日本語</option>
        </select>
      </div>
    </nav>
  );
}
