import { useParams, useNavigate } from "react-router-dom";
import VinylForm from "../components/VinylForm";

export default function EditVinyl() {
  const { id } = useParams();
  const navigate = useNavigate();

  // mock (depois vem da API)
  const vinyl = {
    artist: "Pink Floyd",
    album: "The Dark Side of the Moon",
    year: 1973,
    genre: "Rock",
    coverCondition: "Near Mint",
    quantity: 1,
    notes: "Clássico absoluto",
  };

  function handleUpdate(data) {
    console.log("Atualizar vinil", id, data);
    navigate("/vinyls");
  }

  return (
    <section className="max-w-xl">
      <h2 className="text-2xl font-bold mb-6">Editar Vinil</h2>

      <VinylForm initialData={vinyl} onSubmit={handleUpdate} />
    </section>
  );
}
