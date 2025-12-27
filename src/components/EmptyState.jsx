import { Link } from "react-router-dom";
import { Button } from "./ui/Button";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <span className="text-5xl">📀</span>

      <h2 className="mt-6 text-2xl font-bold">Nenhum vinil cadastrado</h2>

      <p className="mt-3 text-zinc-400 max-w-md">
        Sua coleção ainda está vazia. Comece cadastrando seus primeiros discos e
        organize tudo em um só lugar.
      </p>

      <div className="mt-8">
        <Link to="/vinyls/new">
          <Button>Cadastrar primeiro vinil</Button>
        </Link>
      </div>
    </div>
  );
}
