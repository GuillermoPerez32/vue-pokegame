<template>
  <h1 v-if="!pokemon">Esperando...</h1>

  <div v-else>
  <h1>¿Quién es este pokemón?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemons" :pokemon="pokemon" />
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from '@/helpers/getPokemonsOptions';
export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemons: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async getPokemons() {
      this.pokemons = await getPokemonOptions()
      
      const pokId = Math.floor(Math.random() * 4 )
      this.pokemon = this.pokemons[pokId]
    }
  },
  mounted(){
    this.getPokemons()
    // console.log(pokemons);
  }
}
</script>

<style>

</style>