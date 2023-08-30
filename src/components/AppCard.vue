<script>

import { setLang, getStarRating } from '../function.js';

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
        getStarRating,
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
                    <div class="stars-empty">
                        <div class="stars-filled"
                        :style="`width: ${getStarRating(filmData.vote_average)}%`"></div>
                    </div>
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
            align-items: center;
            gap: 4px;

            .stars-empty {
                position: relative;
                font-family: FontAwesome;

                &::before {
                    content: "\f006 \f006 \f006 \f006 \f006";
                    color: #FFBD00;
                }
            }

            .stars-filled {
                position: absolute;
                top: 0;
                left: 0;
                white-space: nowrap;
                overflow: hidden;
                width: 0;

                &::before {
                    content: "\f005 \f005 \f005 \f005 \f005";
                    color: #FFBD00;
                }
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