<template>
    <div>
        <table style="width:90%; margin:5% auto">
            <tr>
                <th class="w-75"><h4>공지사항</h4></th>
                <th class="text-right"><small style="font-size:15px ;color:rgba(150,150,150)">더보기 ></small></th>
            </tr>
            <tr style="border-bottom: 0.1px solid rgba(233,233,233);" v-for="(notice, index) in this.store.state.customerNotice" v-bind:key="notice.id">
                <td class="w-75text-right font-weight-bold">
                    <div>
                        <b-btn v-b-modal="`modal${index}`" class="bg-transparent text-dark border-0">{{notice.title}}</b-btn>
                        <b-modal :id="`modal${index}`" :title="notice.title">
                            <p class="my-4">{{notice.title}}</p>
                        </b-modal>
                    </div>
                </td>
                <td class="text-right"><small>{{notice.regDate}}</small></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import Modal from './Modal'
    var baseurl="http://freshntech.cafe24.com";
    export default {
        name: "Notice",
        components: {
            Modal
        },
        data () {
            return {
                detail: []
            }
        },
        methods:{
            getNoticeDetail(idx){
                this.$http.post(baseurl+"/order/customernotice/" + idx)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        },
        created() {
            this.getNoticeDetail();
        },
    }
</script>

<style scoped>

</style>