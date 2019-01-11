<template>
    <span class="text-overflow-dynamic-container">
        <span class="text-overflow-dynamic-ellipsis" v-html="renderCell(control, record)">
        </span>
    </span>    
</template>


<script>
    /**
     * https://stackoverflow.com/questions/9789723/css-text-overflow-in-a-table-cell/11877033
     */
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
                return r + '.'
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

<style lang="scss" scoped>
    
    .text-overflow-dynamic-container {
        position: relative;
        max-width: 100%;
        padding: 0 !important;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        vertical-align: text-bottom !important;
    }
    .text-overflow-dynamic-ellipsis {
        position: absolute;
        white-space: nowrap;
        overflow-y: visible;
        overflow-x: hidden;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        max-width: 100%;
        min-width: 0;
        width:100%;
        top: 0;
        left: 0;
    }
    .text-overflow-dynamic-container:after,
    .text-overflow-dynamic-ellipsis:after {
        content: '-';
        display: inline;
        visibility: hidden;
        width: 0;
    }
</style>