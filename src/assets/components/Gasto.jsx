import{ LeadingActions,SwipeableList,SwipeableListItem,SwipeAction,TrailingActions} from 'react-swipeable-list'
import {formatearFecha,formatearCantidad} from '../../helpers'
//Imágenes
import iconoBanquete from '../../img/banquete.svg'
import iconoBelleza from '../../img/belleza.svg'
import iconoCeremonia from '../../img/ceremonia.svg'
import iconoRegalos from '../../img/regalos.svg'
import iconoMusica from '../../img/musica.svg'
import iconoFlores from '../../img/flores.svg'
import iconoFotos from '../../img/fotos.svg'
import iconoInvitaciones from '../../img/invitaciones.svg'
import iconoAnillos from '../../img/anillos.svg'
import iconoNovia from '../../img/novia.svg'
import iconoNovio from '../../img/novio.svg'
import iconoTransporte from '../../img/transporte.svg'
import iconoOtros from '../../img/otros.svg'
import 'react-swipeable-list/dist/styles.css';

const diccionarioIconos ={

    banquete:iconoBanquete,
    belleza: iconoBelleza,
    ceremonia: iconoCeremonia,
    regalos: iconoRegalos,
    musica: iconoMusica,
    flores: iconoFlores,
    fotos: iconoFotos,
    invitaciones: iconoInvitaciones,
    anillos: iconoAnillos,
    novia: iconoNovia,
    novio: iconoNovio,
    transporte: iconoTransporte,
    otros: iconoOtros,
}

const Gasto = ({gasto}) => {

    const{categoria, nombre, cantidad, id, fecha} = gasto;

    const leadingActions= () =>(
      <LeadingActions>
        <SwipeAction onClick={ () => console.log('Editar')}>
          Editar
        </SwipeAction>
      </LeadingActions>      
    )
  
    const trailingActions= () =>(
      <TrailingActions>
        <SwipeAction onClick={ () => console.log('Eliminar')}>
          Eliminar
        </SwipeAction>
      </TrailingActions>
    )
     
    return (
      <SwipeableList className='sombra'>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
        >
          <div className="contenedor_gastos ">
              <div className="gasto">
                  <div className="categoria__gasto">
                      <img src={diccionarioIconos[categoria]} alt="Icono Gasto" />
                      <p>{categoria}</p>
                  </div>

                  <div className="informacion_gasto">
                      <p>
                          Gasto: {''}
                          <span>{(nombre)}</span>
                      </p>

                      <p>
                          Añadido el: {''}
                          <span>{formatearFecha(fecha)}</span>
                      </p>
                  </div>

                  <div className="cantidad__gasto">
                      <p>{formatearCantidad(cantidad)}</p>
                  </div>

                  <div className="opciones__gasto">
                      <button className='editar'>Editar</button>
                      <button className='eliminar'>Eliminar</button>
                  </div>
              </div>
          </div>
        </SwipeableListItem>
      </SwipeableList>
    )
}

export default Gasto
