const Columns = require('./../../../Columns/Columns')

module.exports = {

    reccount: Columns.RecCount(5),

    external_id: ComptechApp.CreateColumn('farm', {
        width: 5,
        caption: 'ID', 
        orderby: ['farms.external_id'], 
        direction: 'asc', 
        html_style: {
            'text-align': 'right',
        },
        source: 'external_id'
    }),

    status: ComptechApp.CreateColumn('status', {
        width: 5,
        caption: 'Status', 
        orderby: ['farms.status'], 
        direction: 'asc', 
        html_style: {
            'text-align': 'center',
        },
        source: 'status'
    }),

    farm: ComptechApp.CreateColumn('farm', {
        width: 60,
        caption: 'Denumire', 
        orderby: ['farms.farm'], 
        direction: 'asc', 
        source: 'farm'
    }),

    cod_exploatatie: ComptechApp.CreateColumn('cod_exploatatie', {
        width: 10,
        caption: 'Cod exploatație', 
        orderby: ['farms.cod_exploatatie'], 
        direction: 'asc', 
        source: 'cod_exploatatie'
    }),

    cif: ComptechApp.CreateColumn('cif', {
        width: 10,
        caption: 'CIF', 
        orderby: ['farms.cif'], 
        direction: 'asc', 
        source: 'cif'
    }),

    actions: Columns.Actions(5),
    
}