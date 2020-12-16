import React from 'react'
import './styles.css'
import iconMaps from '@/pages/assets/icons/icon-maps.svg'
import iconWhatsapp from '@/pages/assets/icons/icon-whatsapp.svg'

const ListItem: React.FC = () => {
  return (
    <li className="item">
      <div className="item__infos">
        <h3>EHS SOLUÇÕES INTELIGENTES</h3>
        <span>Email:  contato@ehsss.com.br</span>
        <div className="address">
          <img className="icon" src={iconMaps} alt="Endereço"/>
          <span>Rua Barão do Triunfo, 612 / CJ 901</span>
        </div>
      </div>
      <div className="badges">
        <div className="badge-wrap">
          <span>Exame Clínico</span>
        </div>
        <div className="badge-wrap badge-wrap--red">
          <span>Exame Clínico</span>
        </div>
        <div className="badge-wrap">
          <span>Exame Clínico</span>
        </div>
        <div className="badge-wrap badge-wrap--red">
          <span>Exame Clínico</span>
        </div>
      </div>
      <button className="whatsapp">
        <img className="icon" src={iconWhatsapp} alt="Whatsapp"/>
        Whatsapp
      </button>
    </li>
  )
}

export default ListItem
