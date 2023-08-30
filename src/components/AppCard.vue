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
    <div class="film-item">
        <div class="img-container">
            <img class="img-poster" 
            :src="`https://image.tmdb.org/t/p/${imgSize[2]+filmData.poster_path}`"
            :alt="filmData.title">
        </div>
        <div class="info">
            <ul>
                <li>Titolo: {{ filmData.title }}</li>
                <li>Titolo Originale: {{ filmData.original_title }}</li>
                <li class="language">
                    <span style="padding-bottom: 1px;">Lingua:</span>
                    <img :src="`https://flagsapi.com/${setLang(language.toUpperCase())}/shiny/32.png`"
                        :alt="setLang(language.toUpperCase())" :title="setLang(language.toUpperCase())">
                </li>
                <li class="vote">
                    <span>Voto:</span>
                    <div class="stars-empty"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;


.film-item {
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

        .vote {
            @include d-flex;

            .stars-empty {
                position: relative;


            }
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