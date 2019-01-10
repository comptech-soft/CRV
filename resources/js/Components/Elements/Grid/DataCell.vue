<template>
    <td
        class="m-datatable__cell table-cell"
        :style="cellStyle"
    >
        <component
            :is="'cell-' + column.component"
            :control="column"
            :record="record"
            @click="onCellActionClick"
        >
        </component>
    </td>
</template>

<script>
    export default {
        props: {
            column: {required: true},
            index: {required: true},
            id: {required: true},
            row: {required: true},
            record: {required: true},
        },

        computed: {


            cellStyle() {
                let r = {}
                r['width'] = this.column.width + '%'
                if( this.column.hasOwnProperty('html_style') ) 
                {
                    _.each(this.column.html_style, (value, key) => {
                        r[key] = value
                    })
                }
                return r
            }
            
        },

        methods: {
            onCellActionClick(event) {
                this.$emit('cell-action-click', {
                    event,
                    record: this.record,
                })
            }
        },

        // components: {
        //     'cell-text': require('./CellText'),
        //     'cell-actions': require('./CellActions')
        // }
    }
</script>

<style lang="scss" scoped>
    td.table-cell {
        /*
        padding: 0.35rem !important;
        font-size: 12px;
        */
    }
</style>
