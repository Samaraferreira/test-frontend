import React, { useEffect, useState } from 'react'
import './styles.css'
import { Header, ListItem } from '@/components'
import iconSearch from '@/assets/icons/icon-search.svg'
import iconFilter from '@/assets/icons/icon-filter.svg'
import iconSort from '@/assets/icons/icon-sort.svg'
import { ClinicModel } from '@/domain/ClinicModel'
import { AppContext } from '@/contexts'
import api from '@/services/api'

const List: React.FC = () => {
  const [state, setState] = useState({
    list: [] as ClinicModel[],
    error: "",
    isOpenModal: false,
  })

  useEffect(() => {
    getListClinics()
  }, [])

  const getListClinics = async (): Promise<void> => {
    const response = await api.get<ClinicModel[]>('/clinics')
    setState({ ...state, list: response.data })
  }

  return (
    <AppContext.Provider value={{ state, setState }}>
      <div id="list-page">
        <Header />
        <header className="search-header">
          <div className="search-header__content">
            <div className="search-wrap">
              <img className="icon" src={iconSearch} alt="Pesquisar" />
              <input type="text" placeholder="Pesquisar" />
            </div>
            <aside className="filters">
              <button className="filter-wrap">
                <img className="icon" src={iconFilter} alt="Pesquisar" />
                <span>Filtrar</span>
              </button>
              <button className="filter-wrap">
                <img className="icon" src={iconSort} alt="Pesquisar" />
                <span>Ordenar</span>
              </button>
            </aside>
          </div>
        </header>
        <div className="container">
          <ul className="clinic-list">
            {state.list.map((item: ClinicModel) => (
              <ListItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default List;
