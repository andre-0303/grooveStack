import { useEffect, useState } from "react";
import VinylCard from "../components/VinylCard";
import EmptyState from "../components/EmptyState";
import { getVinyls } from "../services/api";
import { deleteVinyl } from "../services/api";

export default function VinylList() {
  const [vinyls, setVinyls] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadVinyls() {
    try {
      const data = await getVinyls();
      setVinyls(data);
    } catch (err) {
      console.error("Erro ao buscar vinis", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadVinyls();
  }, []);

  async function handleDelete(id) {
    const confirm = window.confirm("Deseja excluir este vinil?");
    if (!confirm) return;

    try {
      await deleteVinyl(id);
      setVinyls((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      alert("Erro ao excluir vinil");
      console.error(err);
    }
  }

  if (loading) {
    return <p className="text-zinc-400">Carregando coleção...</p>;
  }

  if (vinyls.length === 0) {
    return <EmptyState />;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Minha Coleção</h2>

      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {vinyls.map((vinyl) => (
          <VinylCard key={vinyl.id} vinyl={vinyl} onDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}
