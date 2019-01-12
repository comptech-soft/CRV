module.exports = { 
    name: 'companies',
    path: '/companies', 
    components: {
        default: require('./../../Views/Sistem/Companies/Default').default,
        subheader: require('./../../Views/Sistem/Companies/Subheader').default,
    }
}