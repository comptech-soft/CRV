const BrandFarmMenu = (farm, user, role) => {

    let menu = ComptechApp.CreateMenu('brand-farm', {
        caption: farm.farm
    })
    
    let options = [
        {
            name: 'brand-farm-dashboard',
            caption: 'Dashboard',
            route: null,
        },
        {
            name: 'brand-farm-vaci',
            caption: 'Vaci',
            route: null,
        },
        {
            name: 'brand-farm-tauri',
            caption: 'Tauri',
            route: null,
        },
        {
            name: 'brand-farm-ore-mulsori',
            caption: 'Ore mulsori',
            route: null,
        },
        {
            name: 'brand-farm-users',
            caption: 'Utilizatori',
            route: null,
        }
    ];

    _.each(options, item => {
        menu.AddOption(item.name, ComptechApp.CreateMenu(item.name, {
            caption: item.caption,
            clicktype: 'click',
            onClick: v => v.$router.push(item.route)
        }))
    })

    return menu
}

module.exports = BrandFarmMenu