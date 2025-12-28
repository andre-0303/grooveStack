import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Music, Disc, BarChart } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh]">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Organize sua coleção de
        <span className="block text-green-500 mt-2">discos de vinil</span>
      </h1>

      {/* Subtítulo */}
      <p className="mt-6 max-w-xl text-zinc-400 text-lg">
        Controle artistas, álbuns, estado da  capa e detalhes da sua coleção em
        um único lugar. Simples, rápido e feito para colecionadores.
      </p>

      {/* Ações */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link to="/vinyls">
          <Button>Ver minha coleção</Button>
        </Link>

        <Link to="/vinyls/new">
          <Button variant="secondary">Cadastrar novo vinil</Button>
        </Link>
      </div>

      {/* Detalhes visuais */}
      <div className="mt-14 flex gap-6 text-zinc-500 text-sm">
        <span className="flex items-center gap-2">
          <Music className="w-4 h-4" />
          Organização
        </span>

        <span className="flex items-center gap-2">
          <Disc className="w-4 h-4" />
          Coleção
        </span>

        <span className="flex items-center gap-2">
          <BarChart className="w-4 h-4" />
          Controle
        </span>
      </div>
    </section>
  );
}
