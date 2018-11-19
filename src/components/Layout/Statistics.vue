<template>
    <div>
        <Head headname="통계" />
        <StatisticsStringCondition v-on:getStatistics="getStatistics"/>
        <StatisticsDateCondition />
        <StatisticsList />
    </div>
</template>

<script>
    var baseurl = "http://freshntech.cafe24.com"
    import {
        Head,
        StatisticsStringCondition,
        StatisticsDateCondition,
        StatisticsList
    } from '../Component'
    export default {
        name: 'Statistics',
        components: {
            Head,
            StatisticsStringCondition,
            StatisticsDateCondition,
            StatisticsList
        },
        methods: {
            getStatistics(date) {
                this.$http.get(baseurl + '/order/statistics/' + this.store.state.customer.id + '?condition=' + date)
                .then((res) => {
                    this.store.state.statistics = res.data;
                    for(var i =0; i < this.store.state.statistics.orderItemStatics.length; i++){
                        this.store.state.statistics.orderItemStatics[i].itemName = this.b64DecodeUnicode(this.store.state.statistics.orderItemStatics[i].itemName);
                        this.store.state.statistics.orderItemStatics[i].mainProvier = this.b64DecodeUnicode(this.store.state.statistics.orderItemStatics[i].mainProvier);
                        this.store.state.statistics.orderItemStatics[i].origin = this.b64DecodeUnicode(this.store.state.statistics.orderItemStatics[i].origin);
                        this.store.state.statistics.orderItemStatics[i].unit = this.b64DecodeUnicode(this.store.state.statistics.orderItemStatics[i].unit);
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            },
            b64DecodeUnicode(str) {
                return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
                }).join(''))
            },
        }
    }
</script>

<style scoped>

</style>