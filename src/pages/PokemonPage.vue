<template>
  <h1>¿Quién es este pokemón?</h1>
  <PokemonPicture :pokemonId="500"/>
  <PokemonOptions/>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
export default {
    components: { PokemonPicture, PokemonOptions }
}
</script>

<style>

</style>