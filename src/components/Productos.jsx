import { Link } from "react-router-dom";
import { ProductoPrincipal } from "../data/db";

const Productos = ({ filtros }) => {
  // Filtrar productos solo por categoría
  const productosFiltrados = ProductoPrincipal.filter((producto) =>
    !filtros.categoria || producto.category === filtros.categoria
  );

  return (
    <div className="flex flex-wrap w-full gap-5 p-5 pt-10">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((item) => (
          <Link
            to={`/producto/${item.id}`}
            key={item.id}
            style={{ width: item.w }}
            className="mb-10"
          >
            <div
              className="rounded-2xl h-[28rem] cursor-pointer"
              style={{
                backgroundImage: `url(${item.photoModel})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                width: "100%",
              }}
            >
              <div className="flex items-start justify-end w-full h-full p-5 opacity-0 hover:bg-black/10 hover:opacity-100 rounded-2xl">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-2xl cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 py-2">
              <div className="flex gap-2">
                {item.sizes.map((size, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="inline-flex items-center justify-center w-8 h-8 border-2 rounded-full border-[#F9F9F9] cursor-pointer hover:bg-black font-medium text-[#2f2f2f] text-xs hover:text-white"
                  >
                    <p className="">{size}</p>
                  </div>
                ))}
              </div>
              <div className="text-xs font-medium">
                {item.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500 text-lg text-center w-full">No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default Productos;
