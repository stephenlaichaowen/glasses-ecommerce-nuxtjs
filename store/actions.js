export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('setMenu')
    // return await dispatch('setAssort')    
    return await dispatch('setSellingList')    
  },

  async setMenu({ commit }) {
    const data = await this.$axios.$get('/json/menu.json')
    commit('setMenu', data)
  },

  async setAssort({ commit }) {
    const data = await this.$axios.$get('/json/assort.json')
    commit('setAssort', data)
  },

  async setSellingList({ commit }) {
    const data = await this.$axios.$get('/json/selling-list.json')
    commit('setSellingList', data)
  },
  
  setTitle({ commit }, title) {
    commit('setTitle', title)
  },

  setActiveTabbar({ commit }, activeTabbar) {
    commit('setActiveTabbar', activeTabbar)
  }
}