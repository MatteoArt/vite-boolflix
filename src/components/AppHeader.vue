<script>

import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <nav>
        <div class="header-title">boolflix</div>
        <div class="input-group">
            <input type="text" name="film" id="film"
            placeholder="Cerca film" v-model="store.searchText">
            <div class="btn" @click="store.fetchFilms(store.searchText)">Cerca</div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;

nav {
    @include d-flex;
    justify-content: space-between;
    padding: 0 10px;

    .header-title {
        text-transform: uppercase;
    }

    .input-group {
        @include d-flex;
        gap: 7px;

        input {
            padding: 5px;
        }
        .btn {
            padding: 5px 8px;
            border: 1px solid black;
            border-radius: 5px;
            background-color: lightgray;
            cursor: pointer;
        }
    }
}
</style>