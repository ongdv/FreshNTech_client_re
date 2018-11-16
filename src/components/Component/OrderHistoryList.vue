<template>
    <div>
        <b-list-group flush style="overflow:scroll; height:200px;">
                <b-list-group-item v-for="(item, index) in this.store.state.orderList" :key="index">
                <div class="w-100">
                    [{{item.manufacturer}}] {{item.itemName}}
                </div>
                <div style="position:absolute;right:5%;top:10%;h-100;width:5%;text-align:center;" >
                    x
                </div>
                <div class="w-100">
                    <span style="width:65%;color:rgba(190,190,190,0.7);float:left;">{{item.unit}} | {{item.origin}}</span>
                    <span style="float:right;font-weight:bold;">{{nwc(item.price1)}} 원</span>
                </div>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    export default {
        name: 'OrderHistoryList',
        data () {
            return {

            }
        },
        methods: {
            nwc(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
        }
    }
</script>

<style scoped>

</style>