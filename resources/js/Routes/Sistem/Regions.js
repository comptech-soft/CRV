module.exports = { 
    name: 'regions',
    path: '/regions', 
    components: {
        default: require('./../../Views/Sistem/Regions/Default').default,
        subheader: require('./../../Views/Sistem/Regions/Subheader').default,
    }
}