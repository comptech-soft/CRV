module.exports = { 
    name: 'welcome',
    path: '/', 
    components: {
        default: require('./../../Views/Welcome/Home/Default').default,
        subheader: require('./../../Views/Welcome/Home/Subheader').default,
    }
}