export default function Games() {
  const games = [
    {
      name: "PSP",
      description:
        "PlayStation Portable (PSP) é um console portátil desenvolvido pela Sony.",
    },
    {
      name: "Nintendo 64",
      description:
        "Nintendo 64 é um console de videogame doméstico lançado pela Nintendo.",
    },
    {
      name: "SNES",
      description:
        "Super Nintendo Entertainment System (SNES) é um console de 16 bits da Nintendo.",
    },
    {
      name: "Game Boy Advance",
      description: "Game Boy Advance (GBA) é um console portátil da Nintendo.",
    },
    {
      name: "Mega Drive",
      description: "Mega Drive é um console de videogame doméstico da Sega.",
    },
    // Adicione mais jogos conforme necessário
  ];

  return (
    <div className="flex flex-col p-4 h-full">
      <div>
        <h1 className="text-2xl font-bold text-white">Plataformas</h1>
        <p className="text-white">
          Escolha uma plataforma para ver os jogos disponíveis.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {games.map((game) => (
          <div
            key={game.name}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow"
          >
            <h2 className="text-lg font-semibold text-white mb-2">
              {game.name}
            </h2>
            <p className="text-gray-300 text-center">{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
