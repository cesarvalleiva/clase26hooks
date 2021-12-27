import { useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
    const [nombre, setNombre] = useState('Rodolfo');

    console.log(`Nombre: ${nombre}`)

    const cambiarNombre = () => {
        setNombre('Ocatvio');
    }

    return ( 
        <>
            <h1 className='titulo'>
                Este es el navbar de {nombre}
            </h1>
            <button className='btn btn-success' onClick={() => setNombre("Hectos")}>
                Cambiar nombre
            </button>
        </>
     );
}
 
export default Navbar;