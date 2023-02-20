import { useEffect, useState } from 'react'
import { obtenerData } from './obtenerData'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    obtenerData().then(nuevoFact => setFact(nuevoFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
