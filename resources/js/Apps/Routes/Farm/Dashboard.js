module.exports = { 
    name: 'farm-dashboard',
    path: '/farm-dashboard/:id', 
    components: {
        default: require('./../../Views/Farm/Dashboard/Default').default,
        subheader: require('./../../Views/Farm/Dashboard/Subheader').default,
    }
}