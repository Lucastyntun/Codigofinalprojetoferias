import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Credenciais inválidas. Acesso restrito ao administrador.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <button
          onClick={handleLogout}
          className="absolute top-6 right-6 bg-neutral-800 text-neutral-300 px-4 py-2 rounded hover:bg-neutral-700 transition-colors cursor-pointer text-sm"
        >
          Terminar Sessão
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-lg shadow-md p-8 border border-neutral-200">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-neutral-800">Acesso Administrativo</h1>
          <p className="text-sm text-neutral-500 mt-1">Área restrita</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Utilizador
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent bg-neutral-50 text-neutral-800"
              placeholder="Nome de utilizador"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Palavra-passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent bg-neutral-50 text-neutral-800"
              placeholder="Palavra-passe"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-3 py-2 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-neutral-800 text-white py-2.5 rounded-md hover:bg-neutral-700 transition-colors cursor-pointer font-medium"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
