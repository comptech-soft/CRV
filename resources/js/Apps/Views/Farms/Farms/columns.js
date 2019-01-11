const Columns = require('./../../../Columns/Columns')

module.exports = {

    reccount: Columns.RecCount(4),

    external_id: ComptechApp.CreateColumn('farm', {
        width: 4,
        caption: 'ID', 
        orderby: ['farms.external_id'], 
        direction: 'asc', 
        html_style: {
            'text-align': 'right',
        },
        source: 'external_id'
    }),

    status: ComptechApp.CreateColumn('status', {
        width: 4,
        caption: 'Status', 
        orderby: ['farms.status'], 
        direction: 'asc', 
        html_style: {
            'text-align': 'center',
        },
        source: record => {
            if(record.status === 'activ')
            {
                return '<span class="m-badge m-badge--success">A</span>'
            }
            if(record.status === 'inactiv')
            {
                return '<span class="m-badge m-badge--danger">I</span>'
            }
        }
    }),

    farm: ComptechApp.CreateColumn('farm', {
        width: 17,
        caption: 'Denumire', 
        orderby: ['farms.farm'], 
        direction: 'asc', 
        source: 'farm'
    }),

    address: ComptechApp.CreateColumn('address', {
        width: 20,
        caption: 'Adresa', 
        orderby: ['farms.address'], 
        direction: 'asc', 
        source: 'address'
    }),

    locality_id: ComptechApp.CreateColumn('locality_id', {
        width: 21,
        caption: 'Localitate', 
        orderby: ['farms.locality_id'], 
        direction: 'asc', 
        source: record => {
            if(! record.locality_id )
            {
                return '-'
            }
            let r = [record.locality.name]
            if(record.locality.judet_id)
            {
                r.push(record.locality.judet.name)
                if(record.locality.judet.region_id)
                {
                    if(record.locality.judet.region.country_id)
                    {
                        r.push(record.locality.judet.region.country.name)
                    }
                }
            }
            
            return r.join(', ') 
        }
    }),

    cod_exploatatie: ComptechApp.CreateColumn('cod_exploatatie', {
        width: 12,
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

    actions: Columns.Actions(8),
    
}