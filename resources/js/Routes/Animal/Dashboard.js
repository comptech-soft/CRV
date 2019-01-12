module.exports = { 
    name: 'animal-dashboard',
    path: '/animal-dashboard/:id', 
    components: {
        default: require('./../../Views/Animal/Dashboard/Default').default,
        subheader: require('./../../Views/Animal/Dashboard/Subheader').default,
    }
}