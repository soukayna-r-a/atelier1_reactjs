import './header.css';
import React from 'react';
const Header = (p) =>{
    return (
        <>
        <nav className='head1'>
            <div className='head2'>
            <img src={p.logo} alt="Logo" />
            <span>
            <h1 className='head3'><b>Titre du site</b></h1>
            <p className='head4'>Notre Slogan</p>   
            </span>
            </div>
        </nav>

            
            
        </>
    );
}
export default Header;