import './Nav.scss'
import { NavLink } from 'react-router-dom'

export function Nav() {
  return (
    <>
    <nav>
      <ul className='navList'>
        <NavLink to="/">Overview</NavLink>
        <NavLink to="/examples/">Examples</NavLink>
      </ul>
    </nav>
    </>
  )
}
