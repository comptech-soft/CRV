const 
    FooterMenu = require('./../Menus/Footer'),
    BrandAnimalMenu = require('./../Menus/Brand/Animal'),
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
            state.brand.record = options.record
            state.brand.type = options.type
            return null
        }
    },

    // getFarm(state, id) {
    //     state.farm.loading = true
    //     csApp.Http.Post('api/get-record', {
    //         model: '\\App\\Models\\Farms\\Farms\\Farm',
    //         id
    //     },  data => {
    //         state.farm.record = data.result.payload.record
    //         state.farm.loading = false
    //     })
       
    // },

    // setFarm(state, farm) {
    //     state.farm.record = farm
    // },

    // getAnimal(state, id) {
    //     state.animal.loading = true
    //     csApp.Http.Post('api/get-record', {
    //         model: '\\App\\Models\\Animals\\Animals\\Animal',
    //         id
    //     },  data => {
    //         state.animal.record = data.result.payload.record
    //         state.animal.loading = false
    //     })
       
    // },

    // setAnimal(state, animal) {
    //     state.animal.record = animal
    // },

    // saveCurrentPage(state, page) {
    //     let id = page.id.replace('dt-pagination-grid-', '')
    //     console.log('Save current page >> ' + id);
    //     if( state.grids.hasOwnProperty(id) )
    //     {
    //         state.grids[id].current_page = page.current_page
    //     }
    // }
}
