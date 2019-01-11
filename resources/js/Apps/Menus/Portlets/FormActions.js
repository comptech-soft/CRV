/**
 * La inchiderea formularului 
 */
const onClose = v => {

    /** Fac formularul invizibil */
    v.form.visible = false
    v.form.action = null
    v.form.record = null

    /** Afisez gridul si ascund filtrarea */
    v.grid.visible = true
    v.filter.visible = false

    /** Activez toate butoanele din toolbar */
    // _.each(v.grid.actions.options, action => {action.enabled = true})
}

module.exports = (v) => {

    let menu = ComptechApp.CreateMenu('form-actions')
    menu
        .AddOption('close', ComptechApp.CreateMenu('close', {
            title: 'Inchide',
            icon: 'la la-close',
            clicktype: 'event',
            event: 'form-action',
            visible: true,
            onClick: onClose
        }))
        
    return menu

}