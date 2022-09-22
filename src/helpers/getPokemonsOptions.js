import pokemonApi from "@/api/pokemonApi"

const getPokemons = () => {
    return Array.from(Array(500)).map((_, index) => index + 1)
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    const pokemonsName = await getPokemonNames(mixedPokemons.splice(0, 4))
    return pokemonsName
}

const getPokemonNames = async (pokemons = []) => {
    const promiseArr = pokemons.map((value, index, _) => pokemonApi.get(`/${value}`))
    const pokemonsName = await Promise.all(promiseArr)
    return pokemonsName.map((p, _, __) => ({ id: p.data.id, name: p.data.name }))
}

export default getPokemonOptions