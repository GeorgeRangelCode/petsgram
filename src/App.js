import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './components/GlobalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
    </>
  )
}
