const Columns = require('./../../../Columns/Columns')

module.exports = {

    reccount: Columns.RecCount(3, {
        'font-size': '10px !important'
    }),

    animal_status: ComptechApp.CreateColumn('animal_status', {
        width: 4,
        caption: 'Stare', 
        orderby: ['animals.animal_status'], 
        direction: 'asc', 
        html_style: {
            'text-align': 'center',
            'font-size': '10px !important',
        },
        source: record => {
            if(record.animal_status === 'valid')
            {
                return '<span class="m-badge m-badge--success">V</span>'
            }
            if(record.animal_status === 'invalid')
            {
                return '<span class="m-badge m-badge--danger">I</span>'
            }
            if(record.animal_status === 'adaugat-ferna')
            {
                return '<span class="m-badge m-badge--warning">AF</span>'
            }
            return '-'
        }
    }),

    interbull_code: ComptechApp.CreateColumn('interbull_code', {
        width: 7,
        caption: 'International<br/>ID', 
        orderby: ['animals.interbull_code'], 
        direction: 'asc', 
        html_style: {
            'font-size': '10px !important',
        },
        source: 'interbull_code'
    }),

    long_name: ComptechApp.CreateColumn('long_name', {
        width: 10,
        caption: 'Nume<br/>lung', 
        orderby: ['animals.long_name'], 
        direction: 'asc', 
        html_style: {
            'font-size': '10px !important',
        },
        source: 'long_name'
    }),

    short_name: ComptechApp.CreateColumn('short_name', {
        width: 10,
        caption: 'Nume<br/>scurt', 
        orderby: ['animals.short_name'], 
        direction: 'asc', 
        html_style: {
            'font-size': '10px !important',
        },
        source: 'short_name'
    }),

    pedigree: ComptechApp.CreateColumn('pedigree', {
        width: 10,
        caption: 'Ascendența', 
        html_style: {
            'font-size': '10px !important',
        },
        source: record => {
            'asce'
        }
    }),

    naab: ComptechApp.CreateColumn('naab', {
        width: 10,
        caption: 'NAAB', 
        orderby: ['animals.naab'], 
        direction: 'asc',
        html_style: {
            'font-size': '10px !important',
        }, 
        source: 'naab'
    }),

    matricol_number: ComptechApp.CreateColumn('matricol_number', {
        width: 10,
        caption: 'Număr<br/>matricol', 
        orderby: ['animals.matricol_number'], 
        direction: 'asc', 
        html_style: {
            'font-size': '10px !important',
        },
        source: 'matricol_number'
    }),

    cod_ro: ComptechApp.CreateColumn('cod_ro', {
        width: 7,
        caption: 'Cod<br/>RO', 
        orderby: ['animals.cod_ro'], 
        direction: 'asc', 
        html_style: {
            'font-size': '10px !important',
        },
        source: 'cod_ro'
    }),

    birth_date: ComptechApp.CreateColumn('birth_date', {
        width: 7,
        caption: 'Data<br/>nașterii', 
        orderby: ['animals.birth_date', 'animals.long_name'], 
        direction: 'asc', 
        html_style: {
            'text-align': 'center',
            'font-size': '10px !important',
        },
        source: record => (! record.birth_date ? '-' : moment(record.birth_date).format('DD.MM.YYYY'))
    }),

    breed_id: ComptechApp.CreateColumn('breed_id', {
        width: 7,
        caption: 'Rasa',
        html_style: {
            'font-size': '10px !important',
        },
        source: record => {
            let r = []
            if(record.breed)
            {
                r.push(record.breed)
            }
            if(record.breed_id)
            {
                r.push(record.rasa.breed)
            }
            return r.join(', ')
        }
    }),

    company_id: ComptechApp.CreateColumn('company_id', {
        width: 7,
        caption: 'Firma', 
        html_style: {
            'font-size': '10px !important',
        },
        source: record => {
            let r = []
            if(record.company_id)
            {
                if(! record.company.logo)
                {
                    r.push(record.company.name)
                }
                else
                {
                    r.push('<img class="img-fluid" src="' + record.company.logo + '" />')
                }
            }
            return r.join(', ')
        }
    }),

    
    actions: Columns.Actions(8),
    
}