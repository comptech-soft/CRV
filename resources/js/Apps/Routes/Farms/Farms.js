module.exports = { 
    name: 'farms',
    path: '/farms', 
    components: {
        default: require('./../../Views/Farms/Farms/Default').default,
        subheader: require('./../../Views/Farms/Farms/Subheader').default,
    }
}