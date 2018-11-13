<template>
    <div>
        <b-list-group flush style="overflow:scroll; height:300px;">
            <b-list-group-item v-for="(item, index) in this.store.state.orderList" :key="index">
                <div class="w-100">
                    [{{item.manufacturer}}] {{item.itemName}}
                </div>
                <div style="position:absolute;right:5%;top:10%;h-100;width:5%;text-align:center;">
                    x
                </div>
                <div class="w-100">
                    <span style="width:65%;color:rgba(190,190,190,0.7);float:left;">{{item.unit}} | {{item.origin}}</span>
                    <span style="float:right;font-weight:bold;">{{nwc(item.price1)}} 원</span>
                </div>
                <div class="w-100">
                    <b-button-group size="sm">
                        <b-button>-</b-button>
                        <b-button>{{item.qty}}</b-button>
                        <b-button>+</b-button>
                    </b-button-group>
                    <span style="float:right;font-size:1.2em;font-weight:bold;">{{nwc(item.qty * item.price1)}} 원</span>
                </div>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    var baseurl="http://freshntech.cafe24.com";
    export default {
        name: "OrderItemList",
        data () {
            return {

            }
        },
        methods: {
            getFavorite(){

                this.$http.get(baseurl + "/customeritem/" + this.store.state.customer.id)
                .then((res) => {
                    this.store.state.orderList = res.data.customerItemList;
                    this.store.state.orderList.forEach(element => {
                        element.qty = 1;
                    });
                    console.log(this.store.state.orderList);
                })
                .catch((err) => {
                    console.log(err);
                })
            },
            nwc(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
        },
        created() {
            this.getFavorite();
        },
    }
</script>

<style scoped>

</style>