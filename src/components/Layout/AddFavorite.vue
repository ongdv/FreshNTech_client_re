<template>
    <div>
        <Head headname="즐겨찾기 추가" />
        <FavoriteSearchCondition />
        <addFavoriteList />
    </div>
</template>

<script>
    import {
        FavoriteHead,
        FavoriteSearchCondition,
        addFavoriteList
    } from '../Component';
    export default {
        name: 'AddFavorite',
        components: {
            Head : FavoriteHead,
            FavoriteSearchCondition,
            addFavoriteList
        }
    }
</script>

<style scoped>

</style>