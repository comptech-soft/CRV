const Boot = require('comptechsoft-libraries').Classes.Boot

const boot = new Boot('ComptechApp', {

    components: [
        require.context('./../../../node_modules/comptechsoft-libraries/src/Components/Controls', true, /\.vue$/i),
        require.context('./../../../node_modules/comptechsoft-libraries/src/Components/Metronic', true, /\.vue$/i),
        require.context('./../Components', true, /\.vue$/i), 
    ],

    store: require('./../Store/~store'),
    
    mixins: [
        require('comptechsoft-libraries').Mixins.StoreApp,
        require('comptechsoft-libraries').Mixins.Datetime,
        require('comptechsoft-libraries').Mixins.MenuOptions,

        /** specific temei Metronic */
        require('comptechsoft-libraries').Mixins.Metronic,
    ],
    
    routes: require('../Routes/~routes')
})

ComptechApp.vue = boot.Mount('#app')