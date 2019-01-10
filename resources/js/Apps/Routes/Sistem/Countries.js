module.exports = { 
    name: 'countries',
    path: '/countries', 
    components: {
        default: require('./../../Views/Sistem/Countries/Default').default,
        subheader: require('./../../Views/Sistem/Countries/Subheader').default,
    }
}