import { logements } from "./data";


export const getLogements = () => {
    return logements;
};

export const getLogementById = (id) => {
    return logements.find((logement) => logement.id === id);
};