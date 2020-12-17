import React, { useContext } from 'react'
import logo from '@/assets/logo.svg'
import logoSm from '@/assets/logo-sm.svg'
import iconPlus from '@/assets/icons/icon-plus.svg'
import './styles.css'
import { AppContext } from '@/contexts'

const Header: React.FC = () => {
  const { setState } = useContext(AppContext);

  return (
    <header className="header-wrap">
      <div className="header-content">
        <div>
          <picture>
            <source media="(max-width: 600px)" srcSet={logoSm} />
            <img className="logo" src={logo} alt="Clínicas"/>
          </picture>
        </div>
        <button onClick={() => setState(old => ({ ...old, isOpenModal: true }))}>
          <img className="icon" src={iconPlus} alt="Nova Clínica"/>
          Nova Clínica
        </button>
      </div>
    </header>
  )
}

export default Header
