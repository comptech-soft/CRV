module.exports = ComptechApp.CreateDatatable('datatable-colors', {

    default_order: {
        key: 'id',
        fields: ['colors.id'],
        direction: 'asc'
    },
    columns: require('./columns')
})