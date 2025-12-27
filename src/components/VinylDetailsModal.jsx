export default function VinylDetailsModal({ vinyl, onClose }) {
  if (!vinyl) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-2xl max-w-lg w-full overflow-hidden">
        <img
          src={vinyl.cover}
          alt={vinyl.album}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold">{vinyl.album}</h2>

          <p className="text-zinc-400">
            {vinyl.artist} • {vinyl.year}
          </p>

          <div className="mt-4 text-sm text-zinc-300 space-y-1">
            <p>
              <strong>Gênero:</strong> {vinyl.genre}
            </p>
            <p>
              <strong>Estado da capa:</strong> {vinyl.coverCondition}
            </p>
            <p>
              <strong>Quantidade:</strong> {vinyl.quantity}
            </p>
            {vinyl.notes && (
              <p>
                <strong>Observações:</strong> {vinyl.notes}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
