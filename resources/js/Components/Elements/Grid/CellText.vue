<template>
    <div class="parent-cell">
        <div class="child-cell" v-html="renderCell(control, record)">

        </div>
    </div>
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
            html_class: {defaut: null}
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
div.parent-cell {
  display: flex;
}

div.child-cell {
  flex: 1;
  width: 1px;
  overflow-x: hidden;
  text-overflow: ellipsis;
}
</style>