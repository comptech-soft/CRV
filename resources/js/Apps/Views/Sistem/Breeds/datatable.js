module.exports = ComptechApp.CreateDatatable('datatable-breeds', {

    default_order: {
        key: 'breed',
        fields: ['breeds.breed'],
        direction: 'asc'
    },
    columns: require('./columns')
})