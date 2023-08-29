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
            <h2>Film</h2>
            <div class="film-container">
                <AppCard v-for="film in store.filmList" 
                :filmData="film" :key="film.id"></AppCard>
            </div>
        </div>
    </section>

    <section class="wrapper">
        <div v-if="store.TvList.length !== 0" class="div-tv">
            <h2>Serie TV</h2>
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

.main-container {
    max-width: 1100px;
    margin: auto;
}
section {

    &:last-child {
        margin-top: 60px;
    }

    h2 {
        text-align: center;
    }
}
.film-container, .tv-container {
    @include d-flex;
    justify-content: center;
    column-gap: 25px;
    flex-wrap: wrap;
    row-gap: 30px;
    margin: auto;
}
</style>