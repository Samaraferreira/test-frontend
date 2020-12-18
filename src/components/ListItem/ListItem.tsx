import React from 'react'
import './styles.css'
import iconMaps from '@/assets/icons/icon-maps.svg'
import iconWhatsapp from '@/assets/icons/icon-whatsapp.svg'
import { ClinicModel } from '@/domain/ClinicModel'

type Props = {
  item: ClinicModel
}

const ListItem: React.FC<Props> = ({ item }: Props) => {
  const services = item.services.split(",")

  const cleanWhatsapp = (whatsapp) => {
    const number = whatsapp
      .replace(/[^A-Z\d\s]/gi, "")
      .replace(/ +/, " ")
      .replace(/ /g, "")
    return number
  }

  const verifyService = (service: string) => {
    return !services.includes(service)
  }

  return (
    <li className="item">
      <div className="item__infos">
        <h3>{item.name}</h3>
        <strong>Email: </strong>
        <span>{item.email}</span>
        <div className="address">
          <img className="icon" src={iconMaps} alt="Endereço" />
          <span>{item.address}</span>
        </div>
      </div>
      <aside>
        <div className="badges">
          <div
            className={`badge-wrap ${
              verifyService("Exames Clínicos") ? "badge-wrap--red" : ""
            }`}
          >
            <span>Exame Clínico</span>
          </div>
          <div
            className={`badge-wrap ${
              verifyService("Exames Complementares") ? "badge-wrap--red" : ""
            }`}
          >
            <span>Complementar</span>
          </div>
          <div
            className={`badge-wrap ${
              verifyService("PCMSO") ? "badge-wrap--red" : ""
            }`}
          >
            <span>PCMCO</span>
          </div>
          <div
            className={`badge-wrap ${
              verifyService("PPRA") ? "badge-wrap--red" : ""
            }`}
          >
            <span>PPRA</span>
          </div>
        </div>
        <a
          className="whatsapp"
          target="_blanck"
          href={`https://wa.me/55${cleanWhatsapp(item.whatsapp)}`}
        >
          <img className="icon" src={iconWhatsapp} alt="Whatsapp" />
          Whatsapp
        </a>
      </aside>
    </li>
  )
}

export default ListItem
