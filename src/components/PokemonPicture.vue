<template>
    <img class="hidden-pokemon" :src="imgSrc" alt="" v-if="!is_hidden">
    <img class="" :src="imgSrc" alt="" v-if="is_hidden">
</template>

<script>
export default {

    props: {
        pokemonId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            is_hidden: false,
        }
    },
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        },
    }
}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>