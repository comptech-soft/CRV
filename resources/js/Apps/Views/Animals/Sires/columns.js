const Columns = require('./../../../Columns/Columns')
const AnimalColumns = require('./../~Columns/Columns')

module.exports = {

    reccount: AnimalColumns.RecCount,

    animal_status: AnimalColumns.AnimalStatus,

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

    long_name: AnimalColumns.LongName,

    short_name: AnimalColumns.ShortName,

    pedigree: AnimalColumns.Pedigree,

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