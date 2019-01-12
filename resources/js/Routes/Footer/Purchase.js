module.exports = { 
    name: 'purchase',
    path: '/purchase', 
    components: {
        default: require('./../../Views/Footer/Purchase/Default').default,
        subheader: require('./../../Views/Footer/Purchase/Subheader').default,
    }
}