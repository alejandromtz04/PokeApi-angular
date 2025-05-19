export interface dataPokemon {
    name: string,
    url: string
}


export interface PokemonInterface {
    count: number,
    next: string | null,
    previous: string | null,
    results: dataPokemon[]
}