module.exports = ComptechApp.CreateDatatable('datatable-breeds', {

    default_order: {
        key: 'regions',
        fields: ['geo_regions.name'],
        direction: 'asc'
    },
    columns: require('./columns')
})