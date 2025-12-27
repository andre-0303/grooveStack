export default function ConfirmModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-xl p-6 w-full max-w-sm">
        <h3 className="text-lg font-bold">Confirmar exclusão</h3>

        <p className="mt-3 text-zinc-400 text-sm">
          Tem certeza que deseja excluir este vinil? Essa ação não pode ser
          desfeita.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-700"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
