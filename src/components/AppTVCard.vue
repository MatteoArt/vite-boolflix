<script>

import { setLang } from '../function.js';

export default {
    props: {
        TvData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            language: this.TvData.original_language,
        }
    },
    methods: {
        setLang,
    }
}

</script>

<template>

    <div class="tv-item">
        <ul>
            <li>Titolo: {{ TvData.name }}</li>
            <li>Titolo Originale: {{ TvData.original_name }}</li>
            <li class="language">
                <span style="padding-bottom: 1px;">Lingua:</span>
                <img :src="`https://flagsapi.com/${setLang(language.toUpperCase())}/shiny/32.png`"
                :alt="setLang(language.toUpperCase())" :title="setLang(language.toUpperCase())">
            </li>
            <li>Voto: {{ TvData.vote_average }}</li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;

.tv-item {
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