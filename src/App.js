import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './components/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}
