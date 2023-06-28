import { Link } from 'react-router-dom'
import  './css-components/subNavBar.css'

const SubNavBar = () => {
  return (
    <div className={`sub_nav_items`}>
        <Link  to="/">
          Inicio
        </Link>{" "}
        
        <Link  to="/list-categories">
          {" "}
          Todas las categorías
        </Link>
        <Link  to="/list-articles">
          {" "}
          Todos los artículos
        </Link>
      </div>
  )
}

export default SubNavBar