<template>
    <div>
        <Head headname="주문화면" />
        <OrderList />
        <OrderDate />
        <OrderAddress />
        <OrderRequest />
    </div>
</template>

<script>
    import {
        Head,
        OrderList,
        OrderItemList,
        OrderDate,
        OrderAddress,
        OrderRequest
    } from '../Component'
    export default {
        name: 'Order',
        components: {
            Head,
            OrderList,
            OrderDate,
            OrderAddress,
            OrderRequest
        }
    }
</script>

<style scoped>

</style>