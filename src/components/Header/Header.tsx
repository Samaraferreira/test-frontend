import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import logoSm from '@/assets/logo-sm.svg'
import iconPlus from '@/assets/icons/icon-plus.svg'
import './styles.css'

const Header: React.FC = () => {
  return (
    <header className="header-wrap">
      <div className="header-content">
        <Link to="/">
          <picture>
            <source media="(max-width: 600px)" srcSet={logoSm} />
            <img className="logo" src={logo} alt="Clínicas"/>
          </picture>
        </Link>
        <Link to="/register" className="header-content__btn">
          <img className="icon" src={iconPlus} alt="Nova Clínica"/>
          Nova Clínica
        </Link>
      </div>
    </header>
  )
}

export default Header
