import React from 'react'
import './styles.css'
import { Header, ListItem } from '@/components'
import iconSearch from '@/pages/assets/icons/icon-search.svg'
import iconFilter from '@/pages/assets/icons/icon-filter.svg'
import iconSort from '@/pages/assets/icons/icon-sort.svg'

const List: React.FC = () => {
  return (
    <>
      <Header />
      <header className="search-header">
        <div className="search-header__content">
          <div className="search-wrap">
            <img className="icon" src={iconSearch} alt="Pesquisar"/>
            <input type="text" placeholder="Pesquisar" />
          </div>
          <aside className="filters">
            <button className="filter-wrap">
              <img className="icon" src={iconFilter} alt="Pesquisar"/>
              <span>Filtrar</span>
            </button>
            <button className="filter-wrap">
              <img className="icon" src={iconSort} alt="Pesquisar"/>
              <span>Ordenar</span>
            </button>
          </aside>
        </div>
      </header>
      <div className="container">
        <ul className="clinic-list">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
    </>
  )
}

export default List
