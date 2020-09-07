import Vuex from 'vuex'
import { state } from './state.js'
import { getters } from './getters.js'
import { mutations } from './mutations.js';
import { actions } from './actions.js';

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  })
}

export default createStore