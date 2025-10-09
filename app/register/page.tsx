export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold mb-2">Crea Account</h1>
      <p className="text-gray-500 mb-6">
        Registrati per iniziare a vendere o collezionare carte.
      </p>
      <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition">
        Registrati
      </button>
    </div>
  );
}
