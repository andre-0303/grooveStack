export function Select({ label, options = [], error, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-zinc-300">{label}</label>}

      <select
        {...props}
        className={`rounded-lg bg-zinc-800 text-white p-3 outline-none
        focus:ring-2 focus:ring-green-500
        ${error ? "ring-2 ring-red-500" : ""}`}
      >
        <option value="">Selecione</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
