<template>
    <div>
        <Head headname="즐겨찾기"/>
        <FavoriteList />
    </div>
</template>

<script>
    import {
        Head,
        FavoriteList
    } from '../Component'
    export default {
        name: 'Favorite',
        components: {
            Head,
            FavoriteList
        }
    }
</script>

<style scoped>

</style>