import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Checkbox, Header, Input } from '@/components'
import api from '@/services/api'
import './styles.css'
import Axios from 'axios'

const servicesArray = ['Exames Clínicos', 'Exames Complementares', 'PPRA', 'PCMSO']

const Register: React.FC = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [cep, setCep] = useState('00000000')
  const [whatsapp, setWhatsapp] = useState('')
  const [message, setMessage] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  useEffect(() => {
    const handler = setTimeout(() => {
      Axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => setCity(response.data.localidade))
        .catch(() => setCity(''))
    }, 900)

    return () => clearTimeout(handler)
  }, [cep]);

  const handleSelectedServices = (value: string) => {
    if (selectedServices.includes(value)) {
      const updatedSubjects = selectedServices.filter((item) => item !== value)
      setSelectedServices(updatedSubjects)
    } else {
      setSelectedServices((old) => [...old, value])
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
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
        history.push('/')
      } catch {
        setMessage('Ocorreu um erro, tente novamente!')
      }
    } else {
      setMessage('Preencha todos os campos')
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
            readOnly={true}
            name="cidade"
            label="Cidade"
            placeholder="Cidade"
            value={city || ''}
            handleChange={setCity}
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
