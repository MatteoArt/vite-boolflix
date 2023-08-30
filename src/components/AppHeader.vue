<script>

import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            menuList: [
                "Home",
                "Serie Tv",
                "Film",
                "Originali",
                "Aggiunti di recente",
                "La mia lista"
            ]
        }
    }
}

</script>

<template>
    <nav>
        <div class="logo-menu-wrapper">
            <div class="nav-logo">
                <img src="https://image.tmdb.org/t/p/w92/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="netflix logo">
            </div>
            <div class="menu">
                <ul>
                    <li v-for="menuItem in menuList">
                        {{ menuItem }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="input-group">
            <input type="text" name="film" id="film" placeholder="Cerca film e serie tv" v-model="store.searchText"
                @keyup.enter="store.fetchFilmsAndTv(store.searchText)">
            <div class="btn" @click="store.fetchFilmsAndTv(store.searchText)">
                <i class="fa-solid fa-magnifying-glass fa-sm"></i>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;

nav {
    @include d-flex;
    justify-content: space-between;
    padding: 18px 12px;
    background-color: #1B1B1B;

    .logo-menu-wrapper {
        @include d-flex;
        gap: 30px;
        align-items: center;
    }

    .menu {
        @include d-flex;
    }
    ul {
        list-style-type: none;
        @include d-flex;
        align-items: center;
        gap: 15px;

        li {
            color: white;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;

            &:hover {
                color: lightgoldenrodyellow;
            }
        }
    }
    .input-group {
        @include d-flex;
        gap: 5px;

        input {
            padding: 5px;
        }

        .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            border-radius: 3px;
            background-color: #28a745;
            color: white;
            cursor: pointer;

            &:hover {
                background-color: #218838;
            }
        }
    }
}
</style>