import { Input } from "./ui/Input";
import { Select } from "./ui/Select";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";

export default function VinylForm({ initialData = {}, onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Artista"
        name="artist"
        defaultValue={initialData.artist}
        required
      />

      <Input
        label="Álbum"
        name="album"
        defaultValue={initialData.album}
        required
      />

      <Input
        label="Ano de lançamento"
        name="year"
        type="number"
        defaultValue={initialData.year}
      />

      <Input label="Gênero" name="genre" defaultValue={initialData.genre} />

      <Select
        label="Estado da capa"
        name="coverCondition"
        defaultValue={initialData.coverCondition}
        options={["Muito bom", "Bom", "Ruim", "Péssimo"]}
      />

      <Input
        label="Quantidade de discos"
        name="quantity"
        type="number"
        defaultValue={initialData.quantity || 1}
      />

      <Textarea
        label="Observações"
        name="notes"
        defaultValue={initialData.notes}
      />

      <Button type="submit">Salvar</Button>
    </form>
  );
}
