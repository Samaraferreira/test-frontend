import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { List, Register } from '@/pages'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
