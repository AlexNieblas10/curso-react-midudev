import { useCatImage } from './services/useCatImage'
import { APIimg } from './services/constants'
import { useCatFact } from './services/useCatFact'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main style={{ display: 'grid', placeItems: 'center' }}>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Cambiar el fact
      </button>
      {fact && <p>{fact}</p>}
      {image && <img src={`${APIimg}${image}`} alt={`Imagen extraida usando las primeras 3 palabras de ${fact}`} />}
    </main>
  )
}
