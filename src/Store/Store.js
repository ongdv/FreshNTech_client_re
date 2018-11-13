import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const baseUrl = "freshntech.cafe24.com";

Vue.use(Vuex);

export const store = new Vuex.Store({
    stete: {
        user: '',
        delivery: '',
        userid: '',
        usercode: '',
        deliveryLocation: '',
        isAuth: false,
        orderList: [],
        hNotice: [],
        vNotice: [],
        fNotice: [],
    }
});