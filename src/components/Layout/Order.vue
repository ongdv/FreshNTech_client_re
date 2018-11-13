<template>
    <div>
        <Head headname="주문화면" />
        <OrderList />
    </div>
</template>

<script>
    import {
        Head,
        OrderList
    } from '../Component'
    export default {
        name: 'Order',
        components: {
            Head,
            OrderList
        }
    }
</script>

<style scoped>

</style>