const Events = require('./../../Events/Events')

module.exports = buttons => {

    let actions = {
        insert: ComptechApp.CreateMenu('insert', {
            title: 'Adaugă',
            icon: 'la la-plus',
            clicktype: 'event',
            event: 'grid-action',
            visible: true,
            onClick: Events.ToolBar.onClickInsertBtn
        }),
        filter: ComptechApp.CreateMenu('filter', {
            title: 'Filtrează',
            icon: 'la la-filter',
            clicktype: 'event',
            event: 'grid-action',
            visible: true,
            onClick: Events.ToolBar.onClickFilterBtn
        }),
        'delete-all':  ComptechApp.CreateMenu('delete-all', {
            title: 'Șterge toate înregistrările',
            icon: 'la la-trash',
            visible: true,
        }),
        download: ComptechApp.CreateMenu('download', {
            title: 'Exportă',
            icon: 'la la-download',
            visible: true,
        }),
        upload: ComptechApp.CreateMenu('upload', {
            title: 'Importă',
            icon: 'la la-upload',
            visible: true,
        }),
        refresh: ComptechApp.CreateMenu('refresh', {
            title: 'Refresh',
            icon: 'la la-refresh',
            clicktype: 'event',
            event: 'grid-action',
            visible: true,
            onClick: v => v.df.populate()
        })
    }

    return v => {
        let menu = ComptechApp.CreateMenu('grid-actions')
        _.each(buttons, (exists, key) => {
            if(exists)
            {
                menu.AddOption(key, actions[key])
            }
        })
        return menu
    }

    
}