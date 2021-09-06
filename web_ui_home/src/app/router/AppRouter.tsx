import React from "react";
import { BrowserRouter } from "react-router-dom"
import { Route } from "."

const App = React.lazy(() => import('App'));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  )
}