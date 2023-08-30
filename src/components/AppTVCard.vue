<script>

import { setLang, getStarRating } from '../function.js';

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
            imgDefault: "default.webp"
        }
    },
    methods: {
        setLang,
        getStarRating,
        getPath(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        },
        getImgUrl() {
            //se il poster_path è null, metto un immagine di default
            if (!this.TvData.poster_path) {
                const path = this.getPath(this.imgDefault);
                return path;
            }

            const start_path = "https://image.tmdb.org/t/p/";
            const res_path = `${this.imgSize[3]}`;
            const end_path = `${this.TvData.poster_path}`;

            return start_path + res_path + end_path;
        }
    }
}

</script>

<template>
    <div class="tv-item">
        <div class="img-container">
            <img class="img-poster"
            :src="getImgUrl()"
            :alt="TvData.name + ' poster'">
            <div class="info">
            <ul>
                <li><span>Titolo:</span> {{ TvData.name }}</li>
                <li><span>Titolo Originale:</span> {{ TvData.original_name }}</li>
                <li class="language">
                    <span style="padding-bottom: 1px;">Lingua:</span>
                    <img :src="`https://flagsapi.com/${setLang(language.toUpperCase())}/shiny/32.png`"
                        :alt="setLang(language.toUpperCase())" :title="setLang(language.toUpperCase())">
                </li>
                <li class="vote">
                    <span>Voto:</span>
                    <div class="stars-empty">
                        <div class="stars-filled"
                        :style="`width: ${getStarRating(TvData.vote_average)}%`"></div>
                    </div>
                </li>
                <li class="overview">
                    <p><span>Overview: </span> {{ TvData.overview }} </p>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/_variables.scss" as *;

.tv-item {
    flex-basis: calc((#{$a} / 4) - #{$b});
    margin: 0 5px;

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
.img-container {
position: relative;
img.img-poster {
    width: 100%;
}
}
.img-container:hover .info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 15px;
    font-weight: 600;
}
.info {
    display: none;
    padding: 45px 10px 15px;
    overflow: auto;

    span {
        font-weight: 600;
        font-size: 17px;
        color: lightgoldenrodyellow;
    }
}
</style>