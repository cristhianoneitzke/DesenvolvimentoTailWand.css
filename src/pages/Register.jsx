export default function Register() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cadastro</h2>
      <input className="w-full p-2 border mb-4 rounded-md" type="text" placeholder="Nome" />
      <input className="w-full p-2 border mb-4" type="email" placeholder="Email" />
      <input className="w-full p-2 border mb-4" type="password" placeholder="Senha" />
      <button className="bg-blue-500 text-white p-2 w-full">Cadastrar</button>
    </div>
  );
}
