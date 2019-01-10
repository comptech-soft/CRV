/**
 * La afisarea formularului insert 
 */
const onInsert = v => {
    /** Formularul devine vizibil */
    v.form.visible = true
    
    /** Deactivez toate butoanele din toolbar */
    _.each(v.grid.actions.options, action => {
        action.enabled = false
    })
}

const onFilter = v => {
    // v.form.visible = false
    v.filter.visible = true
    // v.grid.visible = true

    /** Deactivez toate butoanele din toolbar */
    _.each(v.grid.actions.options, action => {
        action.enabled = false
    })
}

module.exports = (v) => {

    let menu = ComptechApp.CreateMenu('grid-actions')
    menu
        .AddOption('insert', ComptechApp.CreateMenu('insert', {
            title: 'Adaugă',
            icon: 'la la-plus',
            clicktype: 'event',
            event: 'grid-action',
            visible: true,
            onClick: onInsert
        }))
        .AddOption('filter', ComptechApp.CreateMenu('filter', {
            title: 'Filtrează',
            icon: 'la la-filter',
            clicktype: 'event',
            event: 'grid-action',
            visible: true,
            onClick: onFilter
        }))
        .AddOption('delete-all', ComptechApp.CreateMenu('delete-all', {
            title: 'Șterge toate înregistrările',
            icon: 'la la-trash',
            visible: true,
        }))
        .AddOption('download', ComptechApp.CreateMenu('download', {
            title: 'Exportă',
            icon: 'la la-download',
            visible: true,
        }))
        .AddOption('upload', ComptechApp.CreateMenu('upload', {
            title: 'Importă',
            icon: 'la la-upload',
            visible: true,
        }))
        .AddOption('refresh', ComptechApp.CreateMenu('refresh', {
            title: 'Refresh',
            icon: 'la la-refresh',
            clicktype: 'event',
            event: 'grid-action',
            visible: true,
            onClick: v => v.df.populate()
        }))
    return menu

}