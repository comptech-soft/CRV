/**
 * La inchiderea formularului 
 */
const onClose = v => {

    /** Fac formularul invizibil */
    v.filter.visible = false

    /** Activez toate butoanele din toolbar */
    _.each(v.grid.actions.options, action => {
        action.enabled = true
    })

}

module.exports = (v) => {

    let menu = ComptechApp.CreateMenu('filter-actions')
    menu
        .AddOption('close', ComptechApp.CreateMenu('close', {
            title: 'Inchide',
            icon: 'la la-close',
            clicktype: 'event',
            event: 'filter-action',
            visible: true,
            onClick: onClose
        }))
        
    return menu

}