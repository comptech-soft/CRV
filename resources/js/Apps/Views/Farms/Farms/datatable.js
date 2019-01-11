module.exports = ComptechApp.CreateDatatable('datatable-breeds', {

    default_order: {
        key: 'farm',
        fields: ['farms.farm'],
        direction: 'asc'
    },
    columns: require('./columns')
})