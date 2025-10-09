import "./globals.css";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Card365 Beta",
  description: "Marketplace for collectible cards - Beta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ⚠️ Rimuoviamo il check client-side: lo gestiamo direttamente dentro Navbar
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-neutral-50 text-neutral-900`}>
        {/* La Navbar decide da sola se mostrarsi o meno */}
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
