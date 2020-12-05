import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        listAgenda: [
            
        
        ]
    },
    mutations: {
        KONFIRMASI_AGENDA: (state, agenda) => {
            state.listAgenda.push(agenda)
        }
    },
    actions: {
        simpanAgenda({ commit, state }, agenda) {
            setTimeout(() => {
                commit('KONFIRMASI_AGENDA', agenda)
                state.isLoading = false
            }, 1500)
        }
    }
})