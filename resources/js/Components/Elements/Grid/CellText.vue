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
                /**
                 * To Do: sa mearga pentru campuri succesive din relatii
                 */

                return record[control.source]
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