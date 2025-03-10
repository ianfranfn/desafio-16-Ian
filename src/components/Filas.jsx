import Swal from "sweetalert2";
import convertirAPesos from "../utils/convertirAPesos"
import { Link, useNavigate } from "react-router"

const Fila = ({ producto, borrarProducto, setProductoAEditar }) => { // Se recibe el producto, la función borrarProducto y la función setProductoAEditar

    const navigate = useNavigate() // Se inicializa el hook useNavigate

    const handleEliminar = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const handleEditar = (producto) => {
        setProductoAEditar(producto)
    }

    const handleVer = (id) => {
        navigate(`/productos/detalle/${id}`)
    }

    return (
        <tr className="bg-white border-b border-gray-200">
            <td className="px-6 py-4">{producto.nombre}</td>
            <td className="px-6 py-4">{producto.categoria}</td>
            <td className="px-6 py-4">{convertirAPesos(producto.precio)}</td>
            <td className="px-6 py-4">
                <button
                onClick={() => handleVer(producto.id)}
                >
                    
                </button>
            </td>
        </tr>
    )

}

