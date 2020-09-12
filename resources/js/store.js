import Vue from 'vue';
import Vuex from 'vuex';
import * as authServices from './services/auth_services';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: null,
        apiURL: 'http://localhost:8000',
        serverPath: "http://localhost:8000",
        profile: {}
    },
    mutations: {
        authenticate(state, payload){
            state.isLoggedIn = authServices.isLoogedIn();

            if (state.isLoggedIn)
            {
                state.profile = payload;
            }else {
                state.profile = {};
            }
        }
    },
    actions: {
        authenticate(context, payload)
        {
            context.commit('authenticate', payload);
        }
    },
    
});