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
                },
                {
                    name: 'colors',
                    caption: 'Culori',
                    route: {name: 'colors'},
                },
                {
                    name: 'locations',
                    caption: 'Țări, regiuni, județe, localități',
                    route: {name: 'countries'},
                },
            ]
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
                    onClick: v => v.$router.push(subitem.route)
                }))
            })
        }
        menu.AddOption(item.name, submenu)
    })

    state.horizontal_menu.menu = menu
}