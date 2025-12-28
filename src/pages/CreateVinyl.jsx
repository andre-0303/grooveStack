import { useState } from "react";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { createVinyl } from "../services/api";

export default function CreateVinyl() {
  const [formData, setFormData] = useState({
    artist: "",
    album: "",
    year: "",
    genre: "",
    coverCondition: "",
    quantity: 1,
    notes: "",
    coverImageUrl: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createVinyl({
        ...formData,
        year: Number(formData.year),
        quantity: Number(formData.quantity),
      });

      alert("🎶 Vinil cadastrado com sucesso!");

      setFormData({
        artist: "",
        album: "",
        year: "",
        genre: "",
        coverCondition: "",
        quantity: 1,
        notes: "",
        coverImageUrl: "",
      });
    } catch (err) {
      console.error(err);
      alert("Erro ao cadastrar vinil");
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-3 py-6 sm:px-4 sm:py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl mx-auto bg-zinc-900 rounded-2xl p-4 sm:p-8 shadow-lg"
      >
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-5">
          Cadastrar Vinil
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Artista"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />

          <Input
            label="Álbum"
            name="album"
            value={formData.album}
            onChange={handleChange}
          />

          <Input
            label="Ano de lançamento"
            name="year"
            type="number"
            value={formData.year}
            onChange={handleChange}
          />

          <Input
            label="Gênero"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />

          <Select
            label="Estado da capa"
            name="coverCondition"
            value={formData.coverCondition}
            onChange={handleChange}
            options={["Muito bom", "Bom", "Ruim", "Péssimo"]}
          />

          <Input
            label="Quantidade de discos"
            name="quantity"
            type="number"
            min={1}
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="mt-5">
          <label className="text-sm text-zinc-300">Observações</label>
          <textarea
            name="notes"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
            className="w-full mt-1 rounded-lg bg-zinc-800 text-white p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mt-5">
          <Input
            label="URL da capa do disco"
            name="coverImageUrl"
            placeholder="https://..."
            value={formData.coverImageUrl}
            onChange={handleChange}
          />
        </div>

        {formData.coverImageUrl && (
          <div className="mt-4">
            <p className="text-sm text-zinc-400 mb-2">Preview da capa</p>
            <img
              src={formData.coverImageUrl}
              alt="Capa do vinil"
              className="w-32 h-32 object-cover rounded-lg border border-zinc-700"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        )}

        <button
          type="submit"
          className="mt-8 w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 sm:py-3.5 rounded-xl"
        >
          Salvar Vinil
        </button>
      </form>
    </div>
  );
}
