import { Square } from "./Square"
import { TURNS } from "../constants/constants"

export const Turnos = ({turno}) => {
    return (
        <section className='turn'>
            <Square estaSeleccionado={turno == TURNS.x}>{TURNS.x}</Square>
            <Square estaSeleccionado={turno == TURNS.o}>{TURNS.o}</Square>
        </section>
    )
}
