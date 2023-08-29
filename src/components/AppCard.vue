<script>

import { setLang } from '../function.js';

export default {
    props: {
        filmData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            language: this.filmData.original_language,
        }
    },
    methods: {
        setLang,
    }
}

</script>

<template>
    <div class="film-item">
        <ul>
            <li>Titolo: {{ filmData.title }}</li>
            <li>Titolo Originale: {{ filmData.original_title }}</li>
            <li class="language">
                <span style="padding-bottom: 1px;">Lingua:</span>
                <img :src="`https://flagsapi.com/${setLang(language.toUpperCase())}/shiny/32.png`"
                :alt="setLang(language.toUpperCase())" :title="setLang(language.toUpperCase())">
            </li>
            <li>Voto: {{ filmData.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;

.film-item {
    flex-basis: 20%;
    border: 1px solid black;

    ul {
        list-style-type: none;

        li {
            padding: 3px;
        }

        .language {
            @include d-flex;
            align-items: center;
            gap: 4px;
        }
    }
}
</style>