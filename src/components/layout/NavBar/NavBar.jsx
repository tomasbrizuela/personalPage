import './navBar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    const [status, setStatus] = useState(false)

    const [menu, setMenu] = useState(false)

    let openMenu = () => {
        setMenu(!menu)
    }

    let changeTheme = () => {
        console.log("Hola")
        setStatus(!status)
    }

    return (
        <>
            <nav className={status ? 'navBarStylesDark' : 'navBarStyles'}>
                <div className={status ? 'nav' : 'navDark'}>
                    <img src="https://res.cloudinary.com/dl1e82gxl/image/upload/v1725668887/Dise%C3%B1o_sin_t%C3%ADtulo_1_-modified_win9a3.png" alt="" />
                    <h2 className={status ? 'logoDark' : 'logoLigth'}>Tomás Brizuela</h2>
                </div>
                <div className={status ? 'nav' : 'navDark'}>
                    <ul>
                        <li className='item'><a href="#" className={status ? 'aDark' : 'aLigth'}>CV</a></li>
                        <li className='item'><a href="#" className={status ? 'aDark' : 'aLigth'}>Linkedin</a></li>
                        <li className='item'><a href="#" className={status ? 'aDark' : 'aLigth'}>Portfolio</a></li>
                        <li className='item'><a href="#" className={status ? 'aDark' : 'aLigth'}>Blog</a></li>
                        <li className='item'>< button className="theme" onClick={changeTheme}> <FontAwesomeIcon icon={faToggleOn} /> </button></li>
                        <li className='menu'><FontAwesomeIcon icon={faBars} onClick={openMenu} /></li>
                        <li className={menu ? 'subMenu' : 'subMenuShow'}>
                            <div id='subMenuOptions'>
                                <div className='itemSubMenu'>CV</div>
                                <div className='itemSubMenu'>Linkedin</div>
                                <div className='itemSubMenu'>Portfolio</div>
                                <div className='itemSubMenu'>Blog</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
