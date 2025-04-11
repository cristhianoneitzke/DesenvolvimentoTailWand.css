import { useState } from 'react'

function CadastroUsuario() {
  const [form, setForm] = useState({
    apelido: '',
    email: '',
    nascimento: '',
    senha: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Usuário cadastrado:', form)
    // Aqui você pode enviar os dados para um backend futuramente
    alert('Usuário cadastrado com sucesso!')
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de Usuário</h2>

        <label className="block mb-4">
          <span className="text-gray-700">Apelido</span>
          <input
            type="text"
            name="apelido"
            value={form.apelido}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Data de Nascimento</span>
          <input
            type="date"
            name="nascimento"
            value={form.nascimento}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Senha</span>
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default CadastroUsuario