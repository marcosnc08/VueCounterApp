import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countValue: 0
  },
  mutations: {
    increment(state, payload) {
        state.countValue = state.countValue + payload.valueToAdd;
    },
    decrement(state, payload) {
        state.countValue = state.countValue + payload.valueToAdd;
    }
  },
  actions: {
    increment(context) {
        setTimeout(function() {
            context.commit('increment', { valueToAdd: 1 });
        }, 500);
    },
    decrement(context) {
        setTimeout(function() {
            context.commit('decrement', { valueToAdd: -1 });
        }, 500);
    },
    incrementByValue(context, payload) {
        setTimeout(function() {
            context.commit('increment', payload);
        }, 500);
    },
  }
})
