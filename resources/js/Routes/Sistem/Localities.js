module.exports = { 
    name: 'localities',
    path: '/localities', 
    components: {
        default: require('./../../Views/Sistem/Localities/Default').default,
        subheader: require('./../../Views/Sistem/Localities/Subheader').default,
    }
}