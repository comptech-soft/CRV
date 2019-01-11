module.exports = ComptechApp.CreateDatatable('datatable-breeds', {

    default_order: {
        key: 'total_score',
        fields: ['animals.total_score'],
        direction: 'desc'
    },
    columns: require('./columns')
})