module.exports = {

    getConfig: ({ commit }) => commit('getConfig'),

    setBrandMenu: ({ commit }, options) => commit('setBrandMenu', options),
    
}
