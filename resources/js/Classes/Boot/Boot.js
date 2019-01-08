class Boot {

    constructor(name, options) {

        this.plugins = [
            {
                key: '_',
                method: 'LoadLodash'
            },
            {
                key: 'Popper',
                method: 'LoadPopper'
            },
            {
                key: '$',
                method: 'LoadJQuery'
            },
            {
                key: 'moment',
                method: 'LoadMoment',
                config: 'ConfigMoment'
            },
            {
                key: 'axios',
                method: 'LoadAxios'
            },
            {
                key: 'Vue',
                method: 'LoadVue'
            }
        ];

        /** Load all dependinces */
        this.LoadPlugins()   
        
        /** Load Vue components */
        if( options.hasOwnProperty('components') )
        {
            this.LoadVueComponents(options.components)
        }

        /** Create the store and attach to Vue */
        if( options.hasOwnProperty('store') )
        {
            this.store = new Vuex.Store(options.store)
        }

        /** Vue gloval mixins */
        if( options.hasOwnProperty('mixins') )
        {
            this.LoadGlobalMixins(options.mixins)
        }

        /** Create app  */
        window[name] = {}
        window[name]['Http'] = require('./../Http/Http')
    }

    LoadLodash() {
        window._ = require('lodash')
    }

    LoadAxios() {
        window.axios = require('axios')
        window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content
        window.axios.defaults.baseURL = document.head.querySelector('meta[name="base-url"]').content + '/'
    }

    LoadVue() {
        window.Vue = require('vue')
        window.VueRouter = require('vue-router').default
        window.Vuex = require('vuex')
        window.Vue.use(window.Vuex)
        window.Vue.use(window.VueRouter)
    }

    ConfigMoment() {
        window.moment.locale(document.head.querySelector('meta[name="locale"]').content)
    }

    LoadPlugins() {

        for(let i in this.plugins)
        {
            if(! window.hasOwnProperty(this.plugins[i].key))
            {
                this[this.plugins[i].method]()
            }
            if( this.plugins[i].hasOwnProperty('config'))
            {
                this[this.plugins[i].config]()
            }
        }
    }

    LoadVueComponents(files) {
        files.keys().map(key => {
            Vue.component(key.split('/').pop().split('.')[0], files(key).default)
        })
    }

    LoadGlobalMixins(mixins) {
        _.each(mixins, mixin => {Vue.mixin(mixin)})
    }

    Mount(el) {
        return new Vue({
            el,
            store: this.store,
            mounted() {
                this.$store.commit('getConfig')
            }
        });
    }
}

export default Boot