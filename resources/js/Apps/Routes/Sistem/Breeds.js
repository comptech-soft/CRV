module.exports = { 
    name: 'breeds',
    path: '/breeds', 
    components: {
        default: require('./../../Views/Sistem/Breeds/Default').default,
        subheader: require('./../../Views/Sistem/Breeds/Subheader').default,
    }
}