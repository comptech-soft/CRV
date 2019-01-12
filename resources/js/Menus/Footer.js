module.exports = (state) => {

    let menu = ComptechApp.CreateMenu('footer')
    let options = [
        {
            name: 'about',
            caption: 'Despre',
            route: {name: 'about'},
        },
        {
            name: 'privacy',
            caption: 'Confidențialitate',
            route: {name: 'privacy'},
        },
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
    ];

    _.each(options, item => {
        menu.AddOption(item.name, ComptechApp.CreateMenu(item.name, {
            caption: item.caption,
            clicktype: 'click',
            onClick: v => v.$router.push(item.route)
        }))
    })

    state.footer.menu = menu
}