import { useState, useEffect } from 'react';
import "./Navbar.css"

const Navbar = () => {
    const [nombre, setNombre] = useState('Rodolfo');
    const [apellido, setApellido] = useState('Lopez')

    // console.log(`Nombre: ${nombre}`)
    // console.log(`Apellido: ${apellido}`)

    const cambiarNombre = () => {
        setNombre('Jorge');
    }

    const cambiarNombreInput = (e) => {
        console.log(e)
    }

    useEffect(() => {
        setNombre('Ocatvio');
    }, [apellido])

    return ( 
        <>
            <h1 className='titulo'>
                Este es el navbar de {nombre}
            </h1>
            <button className='btn btn-success' onClick={cambiarNombre}>
                Cambiar nombre
            </button>

            <button className='btn btn-danger ms-2' onClick={() => setApellido('Garcia')}>
                Cambiar apellido
            </button>

            <input type="text" onChange={(e) => setNombre(e.target.value)} placeholder="nombre" />
            {nombre}
        </>
     );
}
 
export default Navbar;