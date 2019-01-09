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

    // menu
    //     .AddOption(
    //         'about',
    //         ComptechApp.CreateMenu('about', {
    //             caption: 'Despre',
    //             clicktype: 'click',
    //             onClick: v => v.$router.push({name: 'about'})
    //         })
    //     )
    //     .AddOption(
    //         'privacy',
    //         ComptechApp.CreateMenu('privacy', {
    //             caption: 'Confidențialitate',
    //             clicktype: 'click',
    //             onClick: v => v.$router.push({name: 'privacy'})
    //         })
    //     )
    //     .AddOption(
    //         'terms-and-conditions',
    //         ComptechApp.CreateMenu('terms-and-conditions', {
    //             caption: 'Termeni și condiții',
    //             clicktype: 'click',
    //             onClick: v => v.$router.push({name: 'terms'})
    //         })
    //     )
    //     .AddOption(
    //         'purchase',
    //         ComptechApp.CreateMenu('purchase', {
    //             caption: 'Prețuri',
    //             clicktype: 'click',
    //             onClick: v => v.$router.push({name: 'purchase'})
    //         })
    //     )

    state.footer.menu = menu
}