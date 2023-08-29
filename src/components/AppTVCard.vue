<script>

export default {
    props: {
        TvData: {
            type: Object,
            required: true
        }
    }
}

</script>

<template>

    <div class="tv-item">
        <ul>
            <li>Titolo: {{ TvData.name }}</li>
            <li>Titolo Originale: {{ TvData.original_name }}</li>
            <li>Lingua: {{ TvData.original_language }}</li>
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
    }
}
</style>