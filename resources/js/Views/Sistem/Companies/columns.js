const Columns = require('./../../../Columns/Columns')

module.exports = {

    reccount: Columns.RecCount(10),

    name: ComptechApp.CreateColumn('name', {
        width: 70,
        caption: 'Denumire', 
        orderby: ['companies.name'], 
        direction: 'asc', 
        source: 'name'
    }),

    logo: ComptechApp.CreateColumn('logo', {
        width: 10,
        caption: 'Logo',
        type: 'html', 
        source: record => {
            return ! record.logo ? null : '<img class="img-fluid" src="' + record.logo + '" />'
        }
    }),

    actions: Columns.Actions(10),
    
}