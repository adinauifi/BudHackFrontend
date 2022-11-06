export interface PlataDetails {
    id: number;
    nume: string;
    deadline: string;
    suma: number;
    isPaid: boolean;
}

export const Plati = [
    {id: 1, nume:"Plata impozit pe casa", deadline:"24.12.2022", suma: 300, isPaid: false},
    {id: 2, nume:"Plata impozit pe teren", deadline:"24.03.2023", suma: 900, isPaid: false},
    {id: 3, nume:"Plata impozit pe masina", deadline:"24.05.2023", suma: 600, isPaid: false}
]


export const PlatiPlatite = [
    {id: 1, nume:"Plata impozit pe casa", deadline:"24.12.2022", suma: 300, isPaid: true},
    {id: 2, nume:"Plata impozit pe teren", deadline:"24.03.2023", suma: 900, isPaid: true},
    {id: 3, nume:"Plata impozit pe masina", deadline:"24.05.2023", suma: 600, isPaid: true}
]