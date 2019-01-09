module.exports = {

    user: state => state.user,

    config: state => state.config,

    role: state => state.role,

    mounted: state => {
        if( state.config === null)
        {
            return false
        }
        return state.mounted
    },

    url: state => {
        if( state.config === null)
        {
            return null
        }
        return state.config.base_url + '/'
    },

    brand: state => state.brand,

    quick_actions: state => state.quick_actions,
    
    horizontal_menu: state => state.horizontal_menu,

    footer: state => state.footer,

    

    // farm: state => state.farm,

    // animal: state => state.animal,

    // grids: state => state.grids,

}
