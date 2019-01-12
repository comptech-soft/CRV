const Columns = require('./../../../Columns/Columns')

module.exports = {

    reccount: Columns.RecCount(10),

    color: ComptechApp.CreateColumn('color', {
        width: 80,
        caption: 'Denumire', 
        orderby: ['colors.color'], 
        direction: 'asc', 
        source: 'color'
    }),

    actions: Columns.Actions(10),
    
}