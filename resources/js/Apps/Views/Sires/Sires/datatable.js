module.exports = ComptechApp.CreateDatatable('datatable-breeds', {

    default_order: {
        key: 'interbull_code',
        fields: ['animals.interbull_code'],
        direction: 'asc'
    },
    columns: require('./columns')
})