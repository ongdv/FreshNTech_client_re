<template>
    <div>
        <div style="display:none;" v-on:change ="stringSearch">
            <input type="radio" v-model="selectDate" value="total" id="totalStatics" >
            <input type="radio" v-model="selectDate" value="lastMonth" id="lastMonth" >
            <input type="radio" v-model="selectDate" value="thisMonth" id="thisMonth" >
        </div>
        <div class="w-100 bg-light" style="text-align:center;height:65px;">
            <b-button-group style="margin-top:3%;">
                <label for="thisMonth" class="btn btn-white text-success border-dark" style="width:100px;font-weight:bold;" v-if="selectDate === 'thisMonth'">이번달</label>
                <label for="thisMonth" class="btn btn-white text-secondary border-dark" style="width:100px;" v-else>이번달</label>
                <label for="lastMonth" class="btn btn-white text-success border-dark" style="width:100px;font-weight:bold;" v-if="selectDate==='lastMonth'">지난달</label>
                <label for="lastMonth" class="btn btn-white text-secondary border-dark" style="width:100px;" v-else>지난달</label>
                <label for="totalStatics" class="btn btn-white text-success border-dark" style="width:100px;font-weight:bold;" v-if="selectDate === 'total'">전체</label>
                <label for="totalStatics" class="btn btn-white text-secondary border-dark" style="width:100px;" v-else>전체</label>
            </b-button-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StatisticsCondition',
        data () {
            return{
                selectDate: 'total'
            }
        },
        methods: {
            stringSearch(){
                this.$emit('getStatistics', this.selectDate);
            }
            
        }
        
    }
</script>

<style scoped>

</style>