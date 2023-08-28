<script>

export default {
    props: {
        filmData: {
            type: Object,
            required: true
        }
    }
}

</script>

<template>
    <div class="film-item">
        <ul>
            <li>Titolo: {{ filmData.title }}</li>
            <li>Titolo Originale: {{ filmData.original_title }}</li>
            <li>Lingua: {{ filmData.original_language }}</li>
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
    }
}
</style>