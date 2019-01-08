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
            state.mounted = true
        })
        .catch( error => {
            console.log('ERROR.Store Mutations::getConfig()')
            console.log(error)
        })
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
