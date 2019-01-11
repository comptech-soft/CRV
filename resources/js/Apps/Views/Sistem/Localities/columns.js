const Columns = require('./../../../Columns/Columns')

module.exports = {

    reccount: Columns.RecCount(5),

    name: ComptechApp.CreateColumn('name', {
        width: 25,
        caption: 'Denumire', 
        orderby: ['geo_localities.name'], 
        direction: 'asc', 
        source: 'name'
    }),

    judet_id: ComptechApp.CreateColumn('judet_id', {
        width: 20,
        caption: 'Județ', 
        orderby: ['geo_judete.name', 'geo_localities.name'], 
        direction: 'asc', 
        source: 'judet.name'
    }),

    region_id: ComptechApp.CreateColumn('region_id', {
        width: 20,
        caption: 'Regiune', 
        orderby: ['geo_regions.name', 'geo_judete.name', 'geo_localities.name'], 
        direction: 'asc', 
        source: 'judet.region.name'
    }),

    country_id: ComptechApp.CreateColumn('country_id', {
        width: 20,
        caption: 'Țara', 
        orderby: ['geo_countries.name', 'geo_regions.name', 'geo_judete.name', 'geo_localities.name'], 
        direction: 'asc', 
        source: 'judet.region.country.name'
    }),

    actions: Columns.Actions(10),
    
}