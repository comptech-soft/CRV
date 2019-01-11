const Columns = require('./../../../Columns/Columns')

module.exports = {

    reccount: Columns.RecCount(5),

    name: ComptechApp.CreateColumn('name', {
        width: 30,
        caption: 'Denumire', 
        orderby: ['geo_judete.name'], 
        direction: 'asc', 
        source: 'name'
    }),

    region_id: ComptechApp.CreateColumn('region_id', {
        width: 25,
        caption: 'Regiunea', 
        orderby: ['geo_regions.name', 'geo_judete.name'], 
        direction: 'asc', 
        source: 'region.name'
    }),

    country_id: ComptechApp.CreateColumn('country_id', {
        width: 20,
        caption: 'Țara', 
        orderby: ['geo_countries.name', 'geo_regions.name', 'geo_judete.name'], 
        direction: 'asc', 
        source: 'region.country.name'
    }),

    localities_count: ComptechApp.CreateColumn('localities_count', {
        width: 10,
        caption: 'Număr de localități', 
        orderby: ['localities_count'], 
        direction: 'asc', 
        html_style: {
            'text-align': 'right'
        },
        source: 'localities_count'
    }),

    actions: Columns.Actions(10),
    
}