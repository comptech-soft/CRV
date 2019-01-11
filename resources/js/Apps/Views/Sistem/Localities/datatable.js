module.exports = ComptechApp.CreateDatatable('datatable-breeds', {

    default_order: {
        key: 'name',
        fields: ['geo_localities.name'],
        direction: 'asc'
    },
    columns: require('./columns')
})