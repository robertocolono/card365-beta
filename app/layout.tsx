import "./globals.css";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../contexts/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black">
        <LanguageProvider>
          <Navbar />
          <main className="p-6">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
