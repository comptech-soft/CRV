const 
    FooterMenu = require('./../Menus/Footer'),
    BrandAnimalMenu = require('./../Menus/Brand/Animal'),
    BrandFarmMenu = require('./../Menus/Brand/Farm'),
    QuickActionsMenu = require('./../Menus/QuickActions'),
    HorizontalMenu = require('./../Menus/Horizontal')

module.exports = {

    getConfig(state) {
        state.mounted = false
        return axios.request({
            method: 'post', 
            url: 'get-app-configs', 
            data: {},
        })
        .then( r => {
            state.user = r.data.user
            state.config = r.data.config
            state.role = r.data.role

            /** Creez meniul brand */
            // BrandMenu(state)

            /** Creez meniul quick actions */
            QuickActionsMenu(state)

            /** Creez meniul orizontal */
            HorizontalMenu(state)

            /** Creez meniul footer */
            FooterMenu(state)

            state.mounted = true

            let i = setInterval( () => {

                mLayout.init()
                mApp.init({})

                clearInterval(i);
            
            }, 2000)
        })
        .catch( error => {
            console.log('ERROR.Store Mutations::getConfig()')
            console.log(error)
        })
    },

    setBrandMenu(state, options) {
        if(options.type === null)
        {
            state.brand.menu = null
            state.brand.record = null
            state.brand.type = null
            return null
        }
        if( options.type === 'animal')
        {
            state.brand.menu = BrandAnimalMenu(options.record, state.user, state.role)            
        }
        if( options.type === 'farm')
        {
            state.brand.menu = BrandFarmMenu(options.record, state.user, state.role)
        }
        state.brand.record = options.record
        state.brand.type = options.type
        return null
    },

}
