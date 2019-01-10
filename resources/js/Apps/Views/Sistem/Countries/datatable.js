module.exports = ComptechApp.CreateDatatable('datatable-countries', {

    default_order: {
        key: 'id',
        fields: ['geo_countries.id'],
        direction: 'asc'
    },
    columns: require('./columns')
})