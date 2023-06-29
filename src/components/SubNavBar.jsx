import { Link } from 'react-router-dom'
import  './css-components/subNavBar.css'

const SubNavBar = (props) => {
  return (
    <div className={`sub_nav_items`}>
        <Link  to="/" className={`${props.fontColor}`} >
          Inicio
        </Link>{" "}
        
        <Link  to="/list-categories" className={`${props.fontColor}`}>
          {" "}
          Todas las categorías
        </Link>
        <Link  to="/list-articles" className={`${props.fontColor}`}>
          {" "}
          Todos los artículos
        </Link>
      </div>
  )
}

export default SubNavBar