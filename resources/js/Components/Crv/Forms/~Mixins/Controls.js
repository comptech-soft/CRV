module.exports = {

    props: {
        errors: {required: true, default: null},
        action: {required: true, default: null},
        old: {required: true, default: null},
    },

    data() {
        return {
            ready: false,
            timeout: null,
        }
    },

    computed: {
        is_disabled() {
            return this.action === 'delete'
        }
    },

    watch: {
        'record': {
            handler: function(newRecord, oldRecord) {
                if(this.timeout)
                {
                    clearTimeout(this.timeout)
                }
                this.timeout = setTimeout( () => {
                    this.$emit('current-record', this.record)
                }, 200)
            },
            deep: true
        }
    },

    methods: {

        getRecord() {
            _.each(this.record, (value, field) => {
                if( this.old.hasOwnProperty(field) )
                {
                    this.record[field] = this.old[field]
                }
            })
        },

        init() {
            if( ! (this.old === null ) )
            {
                this.getRecord()
            }
            this.ready = true
            this.$emit('current-record', this.record)
        }
    },

    mounted() {
        this.ready = false
        let i = setInterval( () => {
            if( ! (this.action === null) )
            {
                clearInterval(i)
                this.init()
            }
        }, 50)
    }

}