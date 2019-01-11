<template>
    <div v-html="renderCell(control, record)">
    </div>    
</template>

<script>
    export default {
        props: {
            control: {required: true},
            record: {required: true},
            current_page: {},
            per_page: {},
            row: {},
        },
        
        methods: {

            renderField(control, record) {
                
                if(_.isFunction(control.source))
                {
                    return control.source(record)
                }
                let parts = control.source.split('.')
                let r = record[parts[0]]
                for(let i = 1; i < parts.length; i++)
                {
                    r = r[parts[i]]
                }
                return r
            },

            renderReccount(control, record) {
                let r = (this.current_page - 1) * this.per_page + this.row + 1 
                return '#' + r
            },

            renderHtml(control, record) {
                return control.source(record)
            },

            renderCell(control, record) {
                let renderer = 'render' + _.capitalize(control.type)
                try
                {
                    return this[renderer](control, record)
                }
                catch(error)
                {
                    return renderer + ': ' + error.message
                }
            }
        }
    }
</script>