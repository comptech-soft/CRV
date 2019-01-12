const Attributes = require('./../../Attributes/Animal')

const BrandAnimalMenu = (animal, user, role) => {

    let menu = ComptechApp.CreateMenu('brand-animal', {
        caption: Attributes.NameOrCode(animal) + ' (' + (animal.type === 'sire' ? 'taur' : 'vacă') +')'
    })
    
    let options = [
        {
            name: 'brand-animal-dashboard',
            caption: 'Dashboard',
            route: null,
        },
        {
            name: 'brand-animal-pedigree',
            caption: 'Ascendența',
            route: null,
        },
        {
            name: 'brand-animal-traits',
            caption: 'Caracteristici',
            route: null,
        },
        {
            name: 'brand-animal-update',
            caption: 'Editare',
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

module.exports = BrandAnimalMenu