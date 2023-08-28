<script>

import { store } from "../store.js";
import AppCard from "./AppCard.vue";

export default {
    components: {
        AppCard,
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <div class="film-container">
        <AppCard v-for="film in store.filmList"
        :filmData="film" :key="film.id"></AppCard>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;

.film-container {
    @include d-flex;
    flex-wrap: wrap;
    row-gap: 15px;
}

</style>