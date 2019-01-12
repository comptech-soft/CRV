import Boot from './../../Classes/Boot/Boot'

const boot = new Boot('ComptechApp', {
    components: require.context('./../../Components', true, /\.vue$/i), 
    store: require('./../Store/~store'),
    mixins: [
        require('./../../Mixins/Store'),
    ],
    routes: require('./../Routes/~routes')
})

ComptechApp.vue = boot.Mount('#crv-app')