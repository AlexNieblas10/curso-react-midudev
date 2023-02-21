import { useEffect, useRef, useState } from "react"

export function useSearch() {
  const firstInput = useRef(true)
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = value === ''
      return
    }

    if (value == '') {
      setError('No se puede buscar peliculas vacias')
      return
    }
    if (value.match(/^\d+$/)) {
      setError('No se puede buscar pelicula con un numero')
      return
    }
    if (value.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [value])

  return { value, setValue, error }
}