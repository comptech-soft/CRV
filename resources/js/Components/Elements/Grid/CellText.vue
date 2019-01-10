<template>
    <div v-html="renderCell(control, record)">
    </div>    
</template>

<script>
    export default {
        props: {
            control: {required: true},
            record: {required: true},
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