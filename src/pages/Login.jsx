import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", email, senha);
    alert("Login realizado!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;