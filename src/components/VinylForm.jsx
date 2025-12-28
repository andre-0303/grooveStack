import { useEffect, useState } from "react";
import { Input } from "./ui/Input";
import { Select } from "./ui/Select";

export default function VinylForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    artist: "",
    album: "",
    year: "",
    genre: "",
    coverCondition: "",
    quantity: 1,
    notes: "",
    coverImageUrl: "",
  });

  // 🔁 quando editar, preenche o formulário
  useEffect(() => {
    if (initialData?.id) {
      setForm({
        artist: initialData.artist || "",
        album: initialData.album || "",
        year: initialData.year || "",
        genre: initialData.genre || "",
        coverCondition: initialData.coverCondition || "",
        quantity: initialData.quantity || 1,
        notes: initialData.notes || "",
        coverImageUrl: initialData.coverImageUrl || "",
      });
    }
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      ...form,
      year: Number(form.year),
      quantity: Number(form.quantity),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Artista"
        name="artist"
        value={form.artist}
        onChange={handleChange}
      />
      <Input
        label="Álbum"
        name="album"
        value={form.album}
        onChange={handleChange}
      />
      <Input
        label="Ano"
        name="year"
        type="number"
        value={form.year}
        onChange={handleChange}
      />
      <Input
        label="Gênero"
        name="genre"
        value={form.genre}
        onChange={handleChange}
      />

      <Select
        label="Estado da capa"
        name="coverCondition"
        value={form.coverCondition}
        onChange={handleChange}
        options={["Muito bom", "Bom", "Ruim", "Péssimo"]}
      />

      <Input
        label="Quantidade"
        name="quantity"
        type="number"
        min={1}
        value={form.quantity}
        onChange={handleChange}
      />

      <Input
        label="URL da capa"
        name="coverImageUrl"
        value={form.coverImageUrl}
        onChange={handleChange}
        placeholder="https://..."
      />

      {form.coverImageUrl && (
        <img
          src={form.coverImageUrl}
          alt="Preview"
          className="w-32 h-32 object-cover rounded border border-zinc-700"
        />
      )}

      <div>
        <label className="text-sm text-zinc-300">Observações</label>
        <textarea
          name="notes"
          rows="3"
          value={form.notes}
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-zinc-800 text-white p-3 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-xl"
      >
        Salvar
      </button>
    </form>
  );
}
