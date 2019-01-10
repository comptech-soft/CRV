module.exports = {

    id: ComptechApp.CreateColumn('id', {
        width: 10,
        caption: 'ID', 
        orderby: ['geo_countries.id'], 
        direction: 'asc', 
        source: 'id'
    }),

    name: ComptechApp.CreateColumn('name', {
        width: 80,
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
    
}