module.exports = ComptechApp.CreateDatatable('datatable-colors', {

    default_order: {
        key: 'color',
        fields: ['colors.color'],
        direction: 'asc'
    },
    columns: require('./columns')
})