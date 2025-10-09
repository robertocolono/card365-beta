import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4 text-yellow-600">Card365</h1>
      <p className="text-gray-700 max-w-lg mb-6">
        Il marketplace per collezionisti di carte, ora in Beta. Scopri, compra e
        vendi in modo trasparente.
      </p>
      <Link
        href="/marketplace"
        className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition"
      >
        Entra nel Marketplace
      </Link>

      <p className="mt-10 text-gray-400 text-sm">
        © 2025 Card365 — Beta Version
      </p>
    </div>
  );
}
