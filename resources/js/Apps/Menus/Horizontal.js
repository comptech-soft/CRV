module.exports = (state) => {

    let menu = ComptechApp.CreateMenu('horizontal-menu', {caption: 'Horizontal menu'})
    let options = [
        {
            name: 'home',
            caption: 'Home',
            route: {name: 'welcome'},
        },
        {
            name: 'system-data',
            caption: 'Sistem',
            route: null,
            options: [
                {
                    name: 'breeds',
                    caption: 'Rase',
                    route: {name: 'breeds'},
                    icon: 'flaticon-attachment'
                },
                {
                    name: 'colors',
                    caption: 'Culori',
                    route: {name: 'colors'},
                    icon: 'flaticon-attachment'
                },
                {
                    name: 'companies',
                    caption: 'Firme',
                    route: {name: 'companies'},
                    icon: 'flaticon-attachment'
                },
                {
                    name: 'countries',
                    caption: 'Țări', 
                    route: {name: 'countries'},
                    icon: 'flaticon-attachment'
                },
                {
                    name: 'regions',
                    caption: 'Regiuni', 
                    route: {name: 'regions'},
                    icon: 'flaticon-attachment'
                },
                {
                    name: 'judete',
                    caption: 'Județe', 
                    route: {name: 'judete'},
                    icon: 'flaticon-attachment'
                },
                {
                    name: 'localities',
                    caption: 'Localități', 
                    route: {name: 'localities'},
                    icon: 'flaticon-attachment'
                },
                
            ]
        },
        {
            name: 'farms',
            caption: 'Ferme',
            route: {name: 'farms'},
        },
    ];

    _.each(options, item => {

        let params = {
            caption: item.caption,
            clicktype: 'click',
        }
        if(item.hasOwnProperty('route') && item.route)
        {
            params['onClick'] = v => v.$router.push(item.route)
        }
        let submenu = ComptechApp.CreateMenu(item.name, params)
        if(item.hasOwnProperty('options'))
        {
            _.each(item.options, subitem => {
                submenu.AddOption(subitem.name, ComptechApp.CreateMenu(subitem.name, {
                    caption: subitem.caption,
                    clicktype: 'click',
                    icon: subitem.icon,
                    onClick: v => v.$router.push(subitem.route)
                }))
            })
        }
        menu.AddOption(item.name, submenu)
    })

    state.horizontal_menu.menu = menu
}