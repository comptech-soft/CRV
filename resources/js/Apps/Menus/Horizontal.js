module.exports = (state) => {

    let menu = ComptechApp.CreateMenu('brand', {caption: 'Horizontal menu'})
    let options = [
        {
            name: 'home',
            caption: 'Home',
            route: {name: 'welcome'},
        },
        {
            name: 'option-1',
            caption: 'Optiunea #1',
            route: null,
            options: [
                {
                    name: 'terms',
                    caption: 'Termeni și condiții',
                    route: {name: 'terms'},
                },
                {
                    name: 'purchase',
                    caption: 'Prețuri',
                    route: {name: 'purchase'},
                }
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