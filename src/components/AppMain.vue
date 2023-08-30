<script>

import { store } from "../store.js";
import AppCard from "./AppCard.vue";
import AppTVCard from "./AppTVCard.vue";

export default {
    components: {
        AppCard,
        AppTVCard,
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>

<div class="main-container">
    <section class="wrapper">
        <div v-if="store.filmList.length !== 0" class="div-film">
            <h1>Film</h1>
            <div class="film-container">
                <AppCard v-for="film in store.filmList" 
                :filmData="film" :key="film.id"></AppCard>
            </div>
        </div>
    </section>

    <section class="wrapper">
        <div v-if="store.TvList.length !== 0" class="div-tv">
            <h1>Serie TV</h1>
            <div class="tv-container">
                <AppTVCard v-for="tv in store.TvList"
                :TvData="tv" :key="tv.id"></AppTVCard>
            </div>
        </div>
    </section>
</div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;

section {

    &:last-child {
        margin-top: 60px;
    }

    h1 {
        margin: 0 0 10px 6px;
        color: white;
    }
}
.film-container, .tv-container {
    @include d-flex;
    flex-wrap: wrap;
    row-gap: 30px;
}
</style>