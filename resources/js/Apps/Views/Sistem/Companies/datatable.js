module.exports = ComptechApp.CreateDatatable('datatable-companies', {

    default_order: {
        key: 'name',
        fields: ['companies.name'],
        direction: 'asc'
    },
    columns: require('./columns')
})