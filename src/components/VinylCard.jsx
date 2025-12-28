import { Link } from "react-router-dom";

export default function VinylCard({ vinyl, onDelete }) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow">
      <div className="h-56 bg-zinc-800 flex items-center justify-center">
        {vinyl.coverImageUrl ? (
          <img
            src={vinyl.coverImageUrl}
            alt={vinyl.album}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-zinc-400">Sem capa</span>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-bold">{vinyl.album}</h3>
        <p className="text-sm text-zinc-400">{vinyl.artist}</p>

        <div className="flex justify-between items-center text-sm">
          <span className="bg-zinc-800 px-2 py-1 rounded">
            {vinyl.coverCondition}
          </span>
          <span>{vinyl.year}</span>
        </div>

        <div className="flex gap-2 pt-2">
          <Link
            to={`/vinyls/edit/${vinyl.id}`}
            className="flex-1 text-center bg-zinc-700 rounded py-1"
          >
            Editar
          </Link>

          <button
            onClick={() => onDelete(vinyl.id)}
            className="flex-1 bg-red-600 rounded py-1"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
