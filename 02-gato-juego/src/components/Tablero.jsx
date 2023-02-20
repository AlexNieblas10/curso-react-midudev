import { Square } from "./Square"

export const Tablero = ({tablero, actualizarElTablero}) => {
    return (
        <section className='game'>
            {
                tablero.map((square, index) => {
                    return (
                        <Square key={index} index={index} actualizarElTablero={actualizarElTablero}>
                            {square}
                        </Square>
                    )
                })
            }
        </section>
    )
}
