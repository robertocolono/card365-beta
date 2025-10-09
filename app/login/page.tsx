export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold mb-2">Login</h1>
      <p className="text-gray-500 mb-6">
        Accedi per gestire i tuoi ordini e le tue vendite.
      </p>
      <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition">
        Accedi con Email
      </button>
    </div>
  );
}
