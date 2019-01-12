const Columns = require('./../../../Columns/Columns')

module.exports = {

    reccount: Columns.RecCount(10),

    name: ComptechApp.CreateColumn('name', {
        width: 45,
        caption: 'Denumire', 
        orderby: ['geo_regions.name'], 
        direction: 'asc', 
        source: 'name'
    }),

    country_id: ComptechApp.CreateColumn('country_id', {
        width: 25,
        caption: 'Țara', 
        orderby: ['geo_countries.name', 'geo_regions.name'], 
        direction: 'asc', 
        source: 'country.name'
    }),

    judete_count: ComptechApp.CreateColumn('judete_count', {
        width: 10,
        caption: 'Număr de județe', 
        orderby: ['judete_count'], 
        direction: 'asc', 
        html_style: {
            'text-align': 'right'
        },
        source: 'judete_count'
    }),

    actions: Columns.Actions(10),
    
}