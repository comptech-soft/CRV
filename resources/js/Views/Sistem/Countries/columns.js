const Columns = require('./../../../Columns/Columns')

module.exports = {

    reccount: Columns.RecCount(10),

    name: ComptechApp.CreateColumn('name', {
        width: 60,
        caption: 'Denumire', 
        orderby: ['geo_countries.name'], 
        direction: 'asc', 
        source: 'name'
    }),

    code: ComptechApp.CreateColumn('code', {
        width: 10,
        caption: 'Cod', 
        orderby: ['geo_countries.code'], 
        direction: 'asc', 
        source: 'code'
    }),

    icon: ComptechApp.CreateColumn('icon', {
        width: 10,
        caption: 'Icon',
        type: 'html', 
        source: record => {
            return ! record.icon ? null : '<img class="img-fluid" src="' + record.icon + '" />'
        }
    }),

    actions: Columns.Actions(10),
    
}