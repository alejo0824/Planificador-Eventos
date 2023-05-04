import Swal from 'sweetalert2';

export const generarID = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

export const formatearFecha = fecha =>{
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechaNueva.toLocaleDateString('es-Es', opciones);
}

export const alerta = (tipoAlerta, titulo,mensaje) =>{
    Swal.fire({
        icon: tipoAlerta,
        title: titulo,
        text: mensaje,
        timer: 2500           
    })
}

//Método para formatear el presupuesto a moneda
export const formatearCantidad = (cantidad) =>{
        
    return Number(cantidad).toLocaleString('en-US',{
        style:'currency',
        currency:'USD'
    })
}

