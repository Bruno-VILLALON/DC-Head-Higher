import { useState } from 'react';
import { Link } from 'react-scroll'

import './style.scss';
import logo from '../../assets/images/logo-white.png';

const Navbar = () => {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);


    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <Link to='home' smooth={true} duration={1000} delay={150} className='logo'>
                <img src={logo} alt='logo'></img>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='home' smooth={true} duration={1000} delay={150} >Accueil</Link></li>
                <li><Link to='staff' smooth={true} duration={1000} delay={150} >Staff</Link></li>
                <li><Link to='listen' smooth={true} duration={1000} delay={150} >Ecouter</Link></li>
                <li><Link to='actu' smooth={true} duration={1000} delay={150} >Actu</Link></li>
                <li><Link to='contact' smooth={true} duration={1000} delay={150} >Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar