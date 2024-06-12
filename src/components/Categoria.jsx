//vamos a importar el hook, para consumirlo en categoria
import useQuiosco from "../hooks/useQuiosco";

export default function Categoria({categoria}) { 
  const {handleClickCategoria, categoriaActual} = useQuiosco();
  const {icono, id, nombre} = categoria;

  const resaltarCategoriaActual = () => categoriaActual.id === id ? "bg-[#202020]" : 'bg-[#121212]';

  return (
    <div 
      className={`${resaltarCategoriaActual()} flex items-center gap-4 p-3 hover:bg-[#202020] cursor-pointer transition duration-300 rounded-xl`}
      onClick={() => handleClickCategoria(id)}
    >
      <img 
        alt="Imagen icono"
        src={`/img/icono_${icono}.png`}
        className="w-12"
        onClick={() => handleClickCategoria(id)}
      />
      <span className="text-lg font-bold cursor-pointer truncate">
        {nombre}
      </span>
    </div>
  );
}
