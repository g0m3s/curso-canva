import React, {useState, createRef} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Header() {

    const [isChecked,setIsChecked] = useState(false)

    const menuMobile = createRef()

    function showMenuMobile() {

        if (isChecked)
            menuMobile.current.style.display = 'none'
        else
            menuMobile.current.style.display = 'flex'
        
    }

  return (

    <div>

            <header>

                <div className='logo' >

                    <Link to='/'> <img src='' alt="LogoAurea" /> </Link>

                </div>

                <div className='menu' >

                    <ul>

                        <li> <Link to='/' > Início </Link> </li>
                        <li> <Link to='/'> Sobre mim </Link> </li>
                        <li> <a href='/'> Serviços </a> </li>
                        <li> <Link to='/'> Contato </Link> </li>
                        <li> <Link to='/'> Blog </Link> </li>

                    </ul>
                    
                </div>

                <div className="sandwich" >

                    <input type="checkbox" id="checkbox" onClick={ () => {

                        setIsChecked(!isChecked);
                        showMenuMobile()

                    }} />

                    <label htmlFor="checkbox" >

                        <span></span>
                        <span></span>
                        <span></span>

                    </label>

                </div>

            </header>

            <div className='menu-mobile' ref = {menuMobile} >

                <ul>

                    <li> <Link to='/' > Início </Link> </li>
                    <li> <Link to='/'> Quem Somos </Link> </li>
                    <li> <Link to='/'> Serviços </Link> </li>
                    <li> <Link to='/'> Contato </Link> </li>
                    <li> <Link to='/'> Blog </Link> </li>

                </ul>

            </div>

        </div>
  );
}

export default Header;
