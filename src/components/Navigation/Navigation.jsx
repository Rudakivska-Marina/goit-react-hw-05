import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
import clsx from "clsx" 

const buildLinkClass = ({isActive}) => {return clsx(css.link, isActive && css.active)}

export function Navigation(){
    return(
        <div className={css.box}>
<nav className={css.nav}>
  <NavLink to='/' className={buildLinkClass}>Home</NavLink>
  <NavLink to='/movies' className={buildLinkClass}>Movies</NavLink> 
</nav>
        </div>
    )
}