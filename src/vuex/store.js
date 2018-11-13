import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        customer: {
            bname: '',
            deliverer_bname: '',
            userid: '',
            id: '',
            isAuth: false,
        },
        orderList: [],
        adBoard: [],
        favorite: [],
        customerNotice: []
    }
})

export default store;