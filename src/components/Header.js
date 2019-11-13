import React from 'react';
import facebookLogo from '../assets/facebook.png'
function Header() {
    return (
        <header>
            <nav>
                <img src={facebookLogo} alt="" />
                <button>
                    Meu Perfil
                <span className="material-icons">account_circle</span>
                </button>
            </nav>
        </header>
    )
}

export default Header
