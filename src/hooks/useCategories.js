import { useState, useEffect } from 'react'

export const useCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data)
      })
  }, [])

  return {
    categories
  }
}
