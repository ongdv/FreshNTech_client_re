<template>
    <div>
        <div class="w-100 bg-light" style="margin-top:10px;">
                <b-list-group class="border-0">
                    <b-list-group-item class="border-0 bg-light">
                            <div style="font-size: 1.1em;font-weight:bold;text-align:center;width:100%">
                                <b-form-select v-model="historyDate" :options="historyDateOption" class="mb-3" style="width:45%" />    
                                <b-form-select v-model="condition" :options="conditionOption" class="mb-3" style="width:45%" />
                            </div>
                    </b-list-group-item>
                </b-list-group>    
            </div>

    </div>
</template>

<script>
    export default {
        name: 'HistoryCondition',
        data() {
            return {
                historyDate: '7',
                condition: '전체',
                historyDateOption: [
                    {value: '7', text: '지난 7일'},
                    {value: '30', text: '지난 30일'},
                    {value: '365', text: '지난 1년'},
                ],
                conditionOption: [
                    {value: '전체', text: '전체상태'},
                    {value: '배송예정', text: '배송예정'},
                    {value: '배송중', text: '배송중'},
                    {value: '배송완료', text: '배송완료'},
                    {value: '주문접수', text: '주문접수'},
                    {value: '주문취소', text: '주문취소'},
                    {value: '출고거절', text: '출고거절'},
                    {value: '결제대기', text: '결제대기'},
                ]
            }
        },
    }
</script>

<style scoped>

</style>