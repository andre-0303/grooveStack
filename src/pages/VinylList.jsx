import { useState } from "react";
import VinylCard from "../components/VinylCard";
import EmptyState from "../components/EmptyState";

export default function VinylList() {
  const [vinyls, setVinyls] = useState([
    {
      id: 1,
      artist: "Pink Floyd",
      album: "The Dark Side of the Moon",
      year: 1973,
      coverCondition: "Near Mint",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
    },
  ]);

  function handleDelete(id) {
    setVinyls((prev) => prev.filter((v) => v.id !== id));
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
