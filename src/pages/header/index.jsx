import React, { useState } from 'react';
import './style.scss';

function Header(){
    let [slid,setSlid] = useState('slider')

    return (
        <header className='container box'>        
        <nav className={slid}>
            <a onClick={()=>{
                setSlid('slidLeft')
            }}>Close Menu</a>
            <a href="#food" onClick={()=>{
                setSlid('slidLeft')
            }}>Food</a>
            <a href="#about" onClick={()=>{
                setSlid('slidLeft')
            }}>About</a>
        </nav>
            <div className='bar-box' onClick={()=>{
                setSlid('slidRight')
            }}><i className="fa-solid fa-bars"></i></div>
            <div><h3>My Food</h3></div>
            <div><h3>Mail</h3></div>
        </header>
    )
}
export default Header;