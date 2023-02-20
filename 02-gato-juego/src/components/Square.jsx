export const Square = ({ children, estaSeleccionado, actualizarElTablero, index }) => {
    const className = `square ${estaSeleccionado ? 'is-selected' : ''}`

    const clickTablero = () => {
        actualizarElTablero(index)
    }

    return (
        <div className={className} onClick={clickTablero}>
            {children}
        </div>
    )
}