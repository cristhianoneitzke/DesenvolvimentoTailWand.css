import React, { useState } from "react";

const CadastroProduto = () => {
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    unidade: "",
    quantidade: "",
    dataCadastro: "",
    ativo: false,
    valorUnitario: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produto cadastrado:", formData);
    alert("Produto cadastrado com sucesso!");
    // Aqui você pode salvar em uma API ou localStorage
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
          Cadastro de Produto
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Nome do Produto</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Descrição</label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Unidade</label>
          <input
            type="text"
            name="unidade"
            value={formData.unidade}
            onChange={handleChange}
            placeholder="ex: kg, un, lt"
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Quantidade em Estoque</label>
          <input
            type="number"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Data de Cadastro</label>
          <input
            type="date"
            name="dataCadastro"
            value={formData.dataCadastro}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="ativo"
            checked={formData.ativo}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="font-medium">Produto Ativo</label>
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Valor Unitário de Venda (R$)</label>
          <input
            type="number"
            step="0.01"
            name="valorUnitario"
            value={formData.valorUnitario}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold"
        >
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
};

export default CadastroProduto;