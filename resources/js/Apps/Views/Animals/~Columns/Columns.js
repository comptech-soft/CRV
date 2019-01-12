const Columns = require('./../../../Columns/Columns')
const Attributes = require('./../../../Attributes/Animal')

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
        source: Attributes.Status
    }),

    LongName: ComptechApp.CreateColumn('long_name', {
        width: 10,
        caption: 'Nume<br/>lung', 
        orderby: ['animals.long_name'], 
        direction: 'asc', 
        html_style: {
            'font-size': '10px !important',
            'cursor': 'pointer',
        },
        html_class: {
            'm-link': true,
            'm--font-bolder': true,
        },
        source: 'long_name',
        onClick: v => v.$router.push({name: 'animal-dashboard', params: {id: v.record.id}}),
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
        source: Attributes.Pedigree
    })
    
}