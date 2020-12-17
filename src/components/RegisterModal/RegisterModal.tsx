import { AppContext } from '@/contexts';
import React, { useContext } from 'react';
import './styles.css'
import iconClose from '@/assets/icons/icon-close.svg'

const RegisterModal: React.FC = () => {
  const { setState } = useContext(AppContext);

  return (
    <section className="register-modal">
      <header className="register-modal__header">
        <h2>Cadastrar Clínica</h2>
        <button onClick={() => setState(old => ({ ...old, isOpenModal: false }))} className="register-modal__close">
          <img src={iconClose} alt="Fechar modal" />
        </button>
      </header>

      <form className="form">
        <div className="input-block">
          <label htmlFor="name">Nome da Clínica</label>
          <input
            type="text"
            placeholder="Nome da Clínica"
            name="name"
            id="name"
          />
        </div>
        <div className="input-block">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" name="email" id="email" />
        </div>
        <div className="input-block">
          <label htmlFor="cep">CEP</label>
          <input type="text" placeholder="00000-000" name="cep" id="cep" />
        </div>
        <div className="input-block">
          <label htmlFor="cep">Whatsapp</label>
          <input
            type="text"
            placeholder="(00) 00000-0000"
            name="whatsapp"
            id="whatsapp"
          />
        </div>
        <div className="checkbox-wrap">
          <h3>Serviços prestados</h3>
          <div className="checkbox-block">
            <input value="Exames Clínicos" type="checkbox" />
            <label>Exames Clínicos</label>
          </div>
          <div className="checkbox-block">
            <input value="Exames Complementares" type="checkbox" />
            <label>Exames Complementares</label>
          </div>
          <div className="checkbox-block">
            <input value="PPRA" type="checkbox" />
            <label>PPRA</label>
          </div>
          <div className="checkbox-block">
            <input value="PCMSO" type="checkbox" />
            <label>PCMSO</label>
          </div>
        </div>
        <button type="submit" className="submit">
          Realizar cadastro
        </button>
      </form>
    </section>
  )
}

export default RegisterModal
