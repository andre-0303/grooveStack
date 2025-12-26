import { useState } from "react";

export default function CreateVinyl() {
  const [formData, setFormData] = useState({
    artist: "",
    album: "",
    year: "",
    genre: "",
    coverCondition: "",
    quantity: 1,
    notes: "",
    coverImage: null,
    preview: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setFormData(prev => ({
      ...prev,
      coverImage: file,
      preview: URL.createObjectURL(file),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // aqui depois você envia pra API
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-zinc-900 rounded-2xl p-8 shadow-lg"
      >
        <h1 className="text-2xl font-bold text-white mb-6">
          Cadastrar Vinil
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input label="Artista" name="artist" onChange={handleChange} />
          <Input label="Álbum" name="album" onChange={handleChange} />
          <Input label="Ano de lançamento" name="year" type="number" onChange={handleChange} />
          <Input label="Gênero" name="genre" onChange={handleChange} />

          <Select
            label="Estado da capa"
            name="coverCondition"
            onChange={handleChange}
            options={["Mint", "Near Mint", "Very Good", "Good", "Poor"]}
          />

          <Input
            label="Quantidade de discos"
            name="quantity"
            type="number"
            min={1}
            onChange={handleChange}
          />
        </div>

        <div className="mt-5">
          <label className="text-sm text-zinc-300">Observações</label>
          <textarea
            name="notes"
            rows="3"
            onChange={handleChange}
            className="w-full mt-1 rounded-lg bg-zinc-800 text-white p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mt-6 flex items-center gap-6">
          <label className="cursor-pointer bg-zinc-800 px-4 py-2 rounded-lg text-sm text-white hover:bg-zinc-700">
            Upload da capa
            <input type="file" hidden accept="image/*" onChange={handleImage} />
          </label>

          {formData.preview && (
            <img
              src={formData.preview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-lg border border-zinc-700"
            />
          )}
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-xl"
        >
          Salvar Vinil
        </button>
      </form>
    </div>
  );
}

/* COMPONENTES REUTILIZÁVEIS */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm text-zinc-300">{label}</label>
      <input
        {...props}
        className="w-full mt-1 rounded-lg bg-zinc-800 text-white p-3 outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="text-sm text-zinc-300">{label}</label>
      <select
        {...props}
        className="w-full mt-1 rounded-lg bg-zinc-800 text-white p-3 outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">Selecione</option>
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
