const Columns = require('./../../../Columns/Columns')

module.exports = {

    RecCount: Columns.RecCount(3, {
        'font-size': '10px !important'
    }),

    AnimalStatus: ComptechApp.CreateColumn('animal_status', {
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

    LongName: ComptechApp.CreateColumn('long_name', {
        width: 10,
        caption: 'Nume<br/>lung', 
        orderby: ['animals.long_name'], 
        direction: 'asc', 
        html_style: {
            'font-size': '10px !important',
        },
        source: 'long_name'
    }),

    ShortName: ComptechApp.CreateColumn('short_name', {
        width: 10,
        caption: 'Nume<br/>scurt', 
        orderby: ['animals.short_name'], 
        direction: 'asc', 
        html_style: {
            'font-size': '10px !important',
        },
        source: 'short_name'
    }),

    Pedigree: ComptechApp.CreateColumn('pedigree', {
        width: 10,
        caption: 'Ascendența', 
        html_style: {
            'font-size': '10px !important',
        },
        source: record => {
            return 'pedigreee'
        }
    })
    
}