const Columns = require('./../../../Columns/Columns')
const AnimalColumns = require('./../~Columns/Columns')

const columns = {

    reccount: AnimalColumns.RecCount,

    animal_status: AnimalColumns.AnimalStatus,

    long_name: AnimalColumns.LongName,

    short_name: AnimalColumns.ShortName,

    pedigree: AnimalColumns.Pedigree,

}

let breedings = [

    {
        key: 'nvi',
        caption: 'NVI'
    },
    {
        key: 'milk_kg',
        caption: 'Milk<br/>Kg'
    },
    {
        key: 'fat_percent',
        caption: 'Fat<br/>%'
    },
    {
        key: 'protein_percent',
        caption: 'Protein<br/>%'
    },
    {
        key: 'inet',
        caption: 'INET'
    },
    {
        key: 'longevity',
        caption: 'Longevity'
    },
    {
        key: 'frame',
        caption: 'Frame'
    },
    {
        key: 'udder',
        caption: 'Udder'
    },
    {
        key: 'feet_legs',
        caption: 'Feet and<br/>legs'
    },
    {
        key: 'total_score',
        caption: 'Total<br/>score'
    },
    {
        key: 'udder_health',
        caption: 'Udder<br/>health'
    },
    {
        key: 'calving_ease',
        caption: 'Calving<br/>ease'
    },

];

_.each(breedings, item => {

    columns[item.key] = ComptechApp.CreateColumn(item.key, {
        width: 5,
        caption: item.caption, 
        orderby: ['animals.' + item.key], 
        direction: 'asc', 
        html_style: {
            'font-size': '10px !important',
            'text-align': 'right'
        },
        source: record => ! record[item.key] ? '0' : record[item.key]
    })
})

module.exports = columns