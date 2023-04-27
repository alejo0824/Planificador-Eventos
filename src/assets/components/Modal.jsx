import {useState} from 'react'
import CerrarBTN from '../../img/close.svg'

const Modal = ({setModal,animarModal,setAnimarModal}) => {

    /* Nombre de los campos del formulario */
    const [nombre,setNombre] = useState('');
    const [cantidad,SetCantidad] = useState('');
    const [categoria,setCategoria] = useState('');

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {            
            setModal(false)
        }, 500);
    }

  return (
    <div className='modal'>
        <div className="cerrar__modal">
            <img
                src={CerrarBTN}
                alt="Cerrar Modal"
                onClick={ocultarModal}
            />
        </div>

        <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>Nuevo Gasto</legend>

            <div className="campo">
                <label htmlFor="nombre">Nombre del gasto</label>
                <input
                    type="text"
                    id='nombre'
                    placeholder='Introduce el nombre del gasto'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input
                    type="text"
                    id='cantidad'
                    placeholder='Introduce la cantidad del gasto'
                    value={cantidad}
                    onChange={(e) => SetCantidad(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="nombre">Nombre del gasto</label>
                <select
                    id="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="" disabled>-- Seleccione Categoría --</option>
                    <option value="banquete">Banquete</option>
                    <option value="belleza">Belleza</option>
                    <option value="ceremonia">Ceremonia</option>
                    <option value="regalos">Detalles de Boda</option>
                    <option value="musica">Música</option>
                    <option value="flores">Flores</option>
                    <option value="fotos">Fotos</option>
                    <option value="invitaciones">Invitaciones</option>
                    <option value="anillos">Joyería</option>
                    <option value="novia">Novia y Complementos</option>
                    <option value="novio">Novio y complementos</option>
                    <option value="transporte">Transporte</option>
                    <option value="otros">Otros</option>
                </select>
            </div>

            <input type="submit" value="Añadir Gasto"/>
        </form>
    </div>
  )
}

export default Modal
