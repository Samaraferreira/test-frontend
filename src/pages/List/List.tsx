import React, { useCallback, useEffect, useState } from 'react'
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
    error: ''
  })
  const [search, setSearch] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const handler = setTimeout(() =>
        setSearchTerm(search), 1000);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    getList()
  }, [searchTerm])

  const orderList = useCallback(() => {
    setState(old => ({ ...old, list: old.list.sort((clinic, clinic2) => clinic.name.localeCompare(clinic2.name)) }))
  }, [])

  const getList = async (): Promise<void> => {
    const response = await api.get<ClinicModel[]>('/clinics')

    if (search) {
      const filterClinics = response.data.filter(clinic => {
        const { name } = clinic
        const nameLower = name.toLowerCase()
        const valueSearch = searchTerm.toLowerCase()
        if (nameLower.includes(valueSearch)) {
          return clinic
        }
      })
      setState({ ...state, list: filterClinics })
    } else {
      setState({ ...state, list: response.data })
    }
  }

  return (
    <AppContext.Provider value={{ state, setState }}>
      <div id="list-page">
        <Header />
        <header className="search-header">
          <div className="search-header__content">
            <div className="search-wrap">
              <img className="icon" src={iconSearch} alt="Pesquisar" />
              <input
                type="text"
                placeholder="Pesquisar"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <aside className="filters">
              {/* <button className="filter-wrap">
                <img className="icon" src={iconFilter} alt="Pesquisar" />
                <span>Filtrar</span>
              </button> */}
              <button onClick={orderList} className="filter-wrap">
                <img className="icon" src={iconSort} alt="Ordenação" />
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
