import { WINNER_COMBOS } from "../constants/constants";

export const algunGanador = (tableroPorVer) => {
    for (const combos of WINNER_COMBOS) {
        const a = combos[0];
        const b = combos[1];
        const c = combos[2];
        if (
            tableroPorVer[a] &&
            tableroPorVer[a] === tableroPorVer[b] &&
            tableroPorVer[a] === tableroPorVer[c]
        ) {
            return tableroPorVer[a];
        }
    }
    return null;
};

export const finDelJuego = (nuevoTablero) => {
    return nuevoTablero.every((square) => square !== null);
};
