const Columns = require('./../../../Columns/Columns')

module.exports = {

    reccount: Columns.RecCount(10),

    breed: ComptechApp.CreateColumn('breed', {
        width: 50,
        caption: 'Denumire', 
        orderby: ['breeds.breed'], 
        direction: 'asc', 
        source: 'breed'
    }),

    code: ComptechApp.CreateColumn('code', {
        width: 30,
        caption: 'Cod', 
        orderby: ['breeds.code'], 
        direction: 'asc', 
        source: 'code'
    }),

    actions: Columns.Actions(10),
    
}