import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

export default function VinylCard({ vinyl, onDelete }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
      {/* Imagem */}
      <div className="h-48 bg-zinc-800">
        {vinyl.cover ? (
          <img
            src={vinyl.cover}
            alt={vinyl.album}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-500">
            Sem capa
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{vinyl.album}</h3>
        <p className="text-sm text-zinc-400 truncate">{vinyl.artist}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
            {vinyl.coverCondition}
          </span>

          <span className="text-xs text-zinc-400">{vinyl.year}</span>
        </div>

        {/* Ações */}
        <div className="mt-4 flex gap-2">
          <Link
            to={`/vinyls/edit/${vinyl.id}`}
            className="flex-1 text-center text-sm py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600"
          >
            Editar
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="flex-1 text-sm py-2 rounded-lg bg-red-600"
          >
            Excluir
          </button>

          <ConfirmModal
            open={open}
            onClose={() => setOpen(false)}
            onConfirm={() => onDelete(vinyl.id)}
          />
        </div>
      </div>
    </div>
  );
}
