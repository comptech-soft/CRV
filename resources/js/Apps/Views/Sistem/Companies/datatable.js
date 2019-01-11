module.exports = ComptechApp.CreateDatatable('datatable-companies', {

    default_order: {
        key: 'id',
        fields: ['companies.id'],
        direction: 'asc'
    },
    columns: require('./columns')
})