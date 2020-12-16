import React from 'react'
import logo from '@/pages/assets/logo.svg'
import logoSm from '@/pages/assets/logo-sm.svg'
import iconPlus from '@/pages/assets/icons/icon-plus.svg'
import './styles.css'

const Header: React.FC = () => {
  return (
    <header className="header-wrap">
      <div className="header-content">
        <div>
          <picture>
            <source media="(max-width: 600px)" srcSet={logoSm} />
            <img className="logo" src={logo} alt="Clínicas"/>
          </picture>
        </div>
        <button>
          <img className="icon" src={iconPlus} alt="Nova Clínica"/>
          Nova Clínica
        </button>
      </div>
    </header>
  )
}

export default Header
