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
            //array contenente tutte le possibili dimensioni dell'immagine
            imgSize: [
                "w92",
                "w154",
                "w185",
                "w342",
                "w500",
                "w780",
                "original"
            ],

        }
    },
    methods: {
        setLang,
    }
}

</script>

<template>
    <div class="tv-item">
        <div class="img-container">
            <img class="img-poster"
            :src="`https://image.tmdb.org/t/p/${imgSize[2]+TvData.poster_path}`"
            :alt="TvData.name + ' poster'">
        </div>
        <div class="info">
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
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;

.tv-item {
    flex-basis: 185px;
    max-width: 185px;
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
.img-poster {
    height: 278px;
}
.img-container {
    overflow: hidden;
}
</style>