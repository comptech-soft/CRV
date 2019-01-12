module.exports = { 
    name: 'about',
    path: '/about', 
    components: {
        default: require('./../../Views/Footer/About/Default').default,
        subheader: require('./../../Views/Footer/About/Subheader').default,
    }
}