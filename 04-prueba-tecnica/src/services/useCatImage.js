import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ') // el split me hace un array del fact con la indicacion en el parametro en este caso un espacio para despues recuperar las palabras 0 - 3 con slice y despues unirlas con join

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImage(url)
      })
  }, [fact])

  return { image }
}
