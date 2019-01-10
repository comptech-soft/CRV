class DataFetch {

    constructor(vue, options) {

        this.vue = vue

        this.loading = false
        this.endpoint = options.hasOwnProperty('endpoint') ? options.endpoint : null
        this.searchable = options.hasOwnProperty('searchable') ? options.searchable : null
        this.conditions = options.hasOwnProperty('conditions') ? options.conditions : null
        this.current_page = 1
        this.current_order = options.hasOwnProperty('current_order') ? options.current_order : null

        this.from = null
        this.to = null
        this.last_page = null
        this.path = null
        this.first_page_url = null
        this.last_page_url = null
        this.next_page_url = null
        this.prev_page_url = null
        this.per_page = options.hasOwnProperty('per_page') ? options.per_page: 10
        this.total = null
    }
    
    getEndpoint() {
        return this.current_page ? this.endpoint + '?page=' + this.current_page : this.endpoint
    }

    getData() {
        let r = {
            per_page: this.per_page,
            searchable: this.searchable,
            orderable: this.current_order,
            conditions: this.conditions,
        }
        // if(this.conditions)
        // {
        //     r['conditions'] = this.filterable.conditions
        // }
        return r
    }

    processResults(data) {
        _.each(data, (item, key) => {
            if( key == 'data')
            {
                /**
                 * Seteaza datele din instanta vue
                 */
                this.vue.records = item
            }
            else
            {
                if( ! this.hasOwnProperty(key) )
                {
                    throw 'Presentation. The [' + key + '] not exist'
                }
                else
                {
                    this[key] = item
                }
            }
        })
    }

    populate() {
        this.loading = true
        try {
            return axios.request({
                method: 'post', 
                url: this.getEndpoint(), 
                data: this.getData(),
            })
            .then( r => {
                let t = setTimeout( () => {
                    this.processResults(r.data)
                    this.loading = false
                }, 100)
            })
            .catch( e => {
                this.loading = false
                console.log('ERROR. Presentation::populate()')
                console.log(e)
            })
        }
        catch(e) {
            this.loading = false
            console.log('ERROR. Presentation::populate()')
            console.log(e)
        }
    }

    onPerPageSelected(per_page) {
        this.per_page = per_page
        this.current_page = 1
        this.populate()
    }

    onQuickSearch(searched) {
        if( this.searchable )
        {
            this.searchable.value = searched
            this.current_page = 1
            this.populate()
        }
    }

    onFilterChanged(conditions) {
        if( conditions )
        {
            _.each(conditions, (value, key) => {
                this.conditions[key].value = value
            })
            this.current_page = 1
            this.populate()
        }
    }

    resetConditions() {
        if( this.conditions )
        {
            _.each(this.conditions, (item, key) => {
                item.value = null
            })
            this.current_page = 1
            this.populate()
        }
    }

    onChangePage(page) {
        this.current_page = page
        this.populate()
    }

    onOrderBy(order) {
        this.current_order.key = order.key
        this.current_order.fields = order.fields
        this.current_order.direction = order.direction
        this.populate()
    }
}


module.exports = DataFetch