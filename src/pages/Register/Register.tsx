import React, { FormEvent, useState } from 'react';
import { Checkbox, Header, Input } from '@/components';
import './styles.css'
import api from '@/services/api';
import { Link } from 'react-router-dom';

const servicesArray = ['Exames Clínicos', 'Exames Complementares', 'PPRA', 'PCMSO']

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleSelectedServices = (value: string) => {
    if (selectedServices.includes(value)) {
      const updatedSubjects = selectedServices.filter(
        (item) => item !== value,
      )
      setSelectedServices(updatedSubjects)
    } else {
      setSelectedServices((old) => [...old, value])
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const services = selectedServices.toString()

    if (name && email && cep && whatsapp && address && services) {
      try {
        const data = {
          name,
          email,
          cep,
          address,
          whatsapp,
          services
        }

        await api.post('clinics', data)
        setMessage('Cadastro realizado com sucesso!')
        setName('')
        setEmail('')
        setCep('')
        setAddress('')
        setWhatsapp('')
        setSelectedServices([])
      } catch {
        setMessage('Ocorreu um erro, tente novamente!')
      }
    } else {
      setMessage('Preencha todos os campos');
    }
  }

  return (
    <div id="page-register">
      <Header />
      <section className="register-wrap">
        <header className="register__header">
          <h1>Cadastrar Clínica</h1>
        </header>

        <form onSubmit={handleSubmit} className="form">
          <Input
            name="name"
            label="Nome da Clínica"
            placeholder="Nome"
            handleChange={setName}
          />
          <Input
            name="email"
            label="Email"
            placeholder="email@email.com"
            handleChange={setEmail}
          />
          <Input
            name="cep"
            label="CEP"
            placeholder="00000-000"
            handleChange={setCep}
          />
          <Input
            name="address"
            label="Endereço"
            placeholder="Rua, número"
            handleChange={setAddress}
          />
          <Input
            name="whatsapp"
            label="Whatsapp"
            placeholder="(00) 00000-0000"
            handleChange={setWhatsapp}
          />

          <div className="checkbox-wrap">
            <h3>Serviços</h3>
            {servicesArray.map((service, index) => (
              <Checkbox
                key={index}
                value={service}
                onChange={() => handleSelectedServices(service)}
              />
            ))}
          </div>

          <footer>
            {message && <h2 className="message">{message}</h2>}
            <button type="submit" className="submit">
              Realizar cadastro
            </button>
            <Link className="go-back" to="/">Cancelar</Link>
          </footer>
        </form>
      </section>
    </div>
  )
}

export default Register
