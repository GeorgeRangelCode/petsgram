import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { useCategories } from '../../hooks/useCategories'

export const ListOfCategories = () => {
  const { categories } = useCategories()
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
