module.exports = ComptechApp.CreateDatatable('datatable-countries', {

    default_order: {
        key: 'name',
        fields: ['geo_countries.name'],
        direction: 'asc'
    },
    columns: require('./columns')
})