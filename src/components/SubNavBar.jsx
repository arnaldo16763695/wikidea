import { Link } from 'react-router-dom'
import  './css-components/subNavBar.css'

const SubNavBar = () => {
  return (
    <div className={`sub_nav_items`}>
        <Link onClick={() => setIsOpen(!isOpen)} to="/">
          Inicio
        </Link>{" "}
        <Link onClick={() => setIsOpen(!isOpen)} to="/add-article">
          Crear artículo
        </Link>{" "}
        <Link onClick={() => setIsOpen(!isOpen)} to="/list-categories">
          {" "}
          Categorías
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/list-articles">
          {" "}
          Articulos
        </Link>
      </div>
  )
}

export default SubNavBar