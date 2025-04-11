import { useState } from "react";
import axios from "axios";

function Clima() {
  // Estado para armazenar os dados do clima
  const [cidade, setCidade] = useState("Guarapuava");
  const [temperatura, setTemperatura] = useState(null);
  const [umidade, setUmidade] = useState(null);
  const [erro, setErro] = useState("");

  const apiKey = "SUA_API_KEY_AQUI"; // Substitua pela sua chave da API

  // Função para consultar o clima
  const consultarClima = async () => {
    try {
      const resposta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setTemperatura(resposta.data.main.temp);
      setUmidade(resposta.data.main.humidity);
      setErro("");
    } catch (err) {
      setErro("Não foi possível obter o clima. Tente novamente.");
      setTemperatura(null);
      setUmidade(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Consulta de Clima</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Cidade</label>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={consultarClima}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Consultar Clima
        </button>

        {erro && <p className="mt-4 bg-blue-500">{erro}</p>}

        {temperatura !== null && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold">Temperatura Atual: {temperatura}°C</p>
            <p className="text-lg">Umidade: {umidade}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Clima;