import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VinylForm from "../components/VinylForm";
import { getVinylById, updateVinyl } from "../services/api";

export default function EditVinyl() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vinyl, setVinyl] = useState(null);

  useEffect(() => {
    async function loadVinyl() {
      try {
        const data = await getVinylById(id);
        setVinyl(data);
      } catch (err) {
        console.error("Erro ao buscar vinil", err);
      }
    }

    loadVinyl();
  }, [id]);

  async function handleUpdate(data) {
    try {
      await updateVinyl(id, {
        ...data,
        year: Number(data.year),
        quantity: Number(data.quantity),
      });

      navigate("/vinyls");
    } catch (err) {
      alert("Erro ao atualizar vinil");
      console.error(err);
    }
  }

  if (!vinyl) {
    return <p className="text-zinc-400">Carregando vinil...</p>;
  }

  return (
    <section className="max-w-xl">
      <h2 className="text-2xl font-bold mb-6">Editar Vinil</h2>
      <VinylForm initialData={vinyl} onSubmit={handleUpdate} />
    </section>
  );
}
