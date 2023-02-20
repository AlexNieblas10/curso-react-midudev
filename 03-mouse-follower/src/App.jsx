import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [activar, setActivar] = useState(false)
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosicion({ x: clientX, y: clientY })
    }
    if (activar) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      console.log('Limpio')
    }
  }, [activar])
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: ' 50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${posicion.x}px, ${posicion.y}px)`
      }}
      />
      <button onClick={() => {
        setActivar(!activar)
      }}
      >{activar ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
