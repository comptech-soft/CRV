module.exports = ComptechApp.CreateDatatable('datatable-breeds', {

    default_order: {
        key: 'id',
        fields: ['breeds.id'],
        direction: 'asc'
    },
    columns: require('./columns')
})