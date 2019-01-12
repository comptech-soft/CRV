module.exports = {

    NameOrCode: record => {
        return record.long_name || record.short_name || record.interbull_code || record.matricol_number || record.naab || record.cod_ro
    },

    Status: record => {
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
    },

    Pedigree: record => {
        return 'pedigreee'
    }
}