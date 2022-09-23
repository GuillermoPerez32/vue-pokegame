<template>
  <h1 v-if="!pokemon">Esperando...</h1>

  <div v-else>
    <h1>¿Quién es este pokemón?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemons" :pokemon="pokemon" @selection-pokemon="checkAnwer" />
    <template v-if="showAnswer" class="fade-in">

      <h2>{{message}}</h2>
      <button @click="newGame">Otra Vez</button>
    </template>
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
      showPokemon: false,
      showAnswer: false,
      message: '',

    }
  },
  methods: {
    async getPokemons() {
      this.pokemons = await getPokemonOptions()

      const pokId = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemons[pokId]
    },
    checkAnwer(pokemonId) {
      console.log(`checking ${pokemonId}`);
      this.showPokemon = true;
      const encabezado = this.pokemon.id == pokemonId ? 'Bien!!!' : 'Oh vaya :( !!!'
      this.message = `${encabezado} El pokemon es ${this.pokemon.name}`

      this.showAnswer = true
      console.log('checked');
    },
    async newGame() {
      this.pokemons = []
      this.pokemon = null
      this.showPokemon = false
      this.showAnswer = false
      this.message = ''
      await this.getPokemons()
    }
  },
  mounted() {
    this.getPokemons()
    // console.log(pokemons);
  }
}
</script>

<style>

</style>