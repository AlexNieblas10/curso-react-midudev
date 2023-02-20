import { Square } from "./Square"

export const GanadorModal = ({ganador, emepezarDeNuevo}) => {
    if (ganador === null) return null

    const textoGanador = ganador == false ? 'Empate' : `Gano: ${ganador}`

    return (
        <section className='winner'>
            <div className='text'>
                <h2>{textoGanador}</h2>

                <header className='win'>
                    {ganador && <Square>{ganador}</Square>}
                </header>

                <footer>
                    <button onClick={emepezarDeNuevo}>Empezar de nuevo</button>
                </footer>

            </div>
        </section>
    )
}
