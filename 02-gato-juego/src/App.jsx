import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from "./constants/constants"
import { algunGanador } from './logic/board'
import { GanadorModal } from './components/GanadorModal'
import { finDelJuego } from './logic/board'
import { InicioDelJuego } from './components/InicioDelJuego'
import { Tablero } from './components/Tablero'
import { Turnos } from './components/Turnos'

const App = () => {

  const [tablero, setTablero] = useState(() => {
    const tableroFromStorage = window.localStorage.getItem('tablero')
    return tableroFromStorage ? JSON.parse(tableroFromStorage) : Array(9).fill(null)
  })
  const [ganador, setGanador] = useState(null)
  const [turno, setTurno] = useState(() => {
    const turnoFromStorage = window.localStorage.getItem('turno')
    return turnoFromStorage ?? TURNS.x
  })


  const emepezarDeNuevo = () => {
    setTablero(Array(9).fill(null))
    setGanador(null)
    setTurno(TURNS.x)
    window.localStorage.removeItem('tablero')
    window.localStorage.removeItem('turno')
  }



  const actualizarElTablero = (index) => {
    const nuevoTablero = [...tablero]
    if (tablero[index] == TURNS.x || tablero[index] == TURNS.o || ganador == TURNS.x || ganador == TURNS.o) {
      return
    }
    else {
      nuevoTablero[index] = turno
      setTablero(nuevoTablero)

      const nuevoTurno = turno == TURNS.x ? TURNS.o : TURNS.x
      setTurno(nuevoTurno)


      const nuevoGanador = algunGanador(nuevoTablero)
      setGanador(nuevoGanador)

      window.localStorage.setItem('tablero', JSON.stringify(nuevoTablero))
      window.localStorage.setItem('turno', nuevoTurno)

      if (nuevoGanador == TURNS.x || nuevoGanador == TURNS.o) {
        confetti()
        setGanador(() => {
          return nuevoGanador
        })
      } else if (finDelJuego(nuevoTablero)) {
        setGanador(false)
      }
    }
  }

  return (
    <main className='board'>
      <InicioDelJuego emepezarDeNuevo={emepezarDeNuevo} />

      <Tablero tablero={tablero} actualizarElTablero={actualizarElTablero} />

      <Turnos turno={turno} />

      <section>

        <GanadorModal ganador={ganador} emepezarDeNuevo={emepezarDeNuevo}></GanadorModal>

      </section>
    </main>
  )
}


export default App

