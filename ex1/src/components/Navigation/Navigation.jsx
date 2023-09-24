import './navigation.css';
import React from 'react';
function Navigation(){
    return(
        <>
        <div className='navi'>
            <ul>
                <li><a href='/'>Accueil</a></li>
                <li><a href='/'>Page 1</a></li>
                <li><a href='/'>Page 2</a></li>
                <li><a href='/'>Page 3</a></li>
                <li><a href='/'>Page 4</a></li>
                <li><a href='/'>Page 5</a></li>
                <li><a href='/'>Page 6</a></li>
            </ul>
        </div>      
        </>
    );
}
export default Navigation;